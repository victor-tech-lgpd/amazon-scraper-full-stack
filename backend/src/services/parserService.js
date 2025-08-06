/**
 * @fileoverview Serviço para parsear o HTML da página de resultados da Amazon e extrair dados dos produtos.
 * Utiliza seletores CSS flexíveis para aumentar a resiliência a mudanças no layout da Amazon.
 */

import { JSDOM } from 'jsdom';

/**
 * Limpa e formata o texto de avaliação.
 * Ex: "4.5 out of 5 stars" -> "4.5/5.0"
 * @param {string} ratingText - O texto de avaliação bruto.
 * @returns {string|null} A avaliação formatada ou null.
 */
function formatRating(ratingText) {
  if (!ratingText) return null;
  const ratingMatch = ratingText.trim().match(/^(\d+(\.\d+)?)/);
  return ratingMatch? `${ratingMatch}/5.0` : null;
}

/**
 * Limpa e formata o número de avaliações.
 * Ex: "(1,234)" -> 1234
 * @param {string} reviewsText - O texto do número de avaliações bruto.
 * @returns {number|null} O número de avaliações ou null.
 */
function formatReviewsCount(reviewsText) {
  if (!reviewsText) return null;
  const reviewsCount = parseInt(reviewsText.trim().replace(/[(),]/g, ''), 10);
  return isNaN(reviewsCount)? null : reviewsCount;
}

/**
 * Limpa e formata o preço.
 * Ex: "$29.99" -> 29.99
 * @param {string} priceText - O texto do preço bruto.
 * @returns {number|null} O preço como um número ou null.
 */
function formatPrice(priceText) {
    if (!priceText) return null;
    // Remove o símbolo da moeda e quaisquer caracteres não numéricos, exceto o ponto decimal.
    const cleanedPrice = priceText.trim().replace(/[^0-9.]/g, '');
    const price = parseFloat(cleanedPrice);
    return isNaN(price)? null : price;
}

/**
 * Parseia o HTML da página de busca e extrai uma lista de produtos.
 * @param {string} htmlContent - O conteúdo HTML da página.
 * @returns {Array<object>} Uma lista de objetos de produto.
 */
function parseProducts(htmlContent) {
  const dom = new JSDOM(htmlContent);
  const document = dom.window.document;
  const products =[];


  // Seletor principal para os contêineres de produtos. É mais estável usar atributos de dados.
  const productElements = document.querySelectorAll("div[data-component-type='s-search-result']");

  productElements.forEach(element => {
    // Ignora produtos patrocinados (anúncios) que geralmente estão em um contêiner diferente
    // ou têm um link de redirecionamento.
    const adMarker = element.querySelector('.puis-sponsored-label-text');
    const productLinkElement = element.querySelector('a.a-link-normal.s-no-outline');
    const productUrl = productLinkElement ? productLinkElement.href : '';

    // CORREÇÃO 1: Operador 'OU' (||) corrigido
    if (adMarker || productUrl.includes('/slredirect/')) {
      return; // Pula este item, pois é um anúncio.
    }

    try {
      // CORREÇÃO 2: Operador 'OU' (||) para o valor padrão null
      const title = element.querySelector('h2.a-link-normal.a-text-normal')?.textContent.trim() || null;
      
      const ratingElement = element.querySelector('.a-icon-alt');
      const rating = formatRating(ratingElement?.textContent);

      const reviewsElement = element.querySelector('.a-size-base.s-underline-text');
      const reviews = formatReviewsCount(reviewsElement?.textContent);

      // CORREÇÃO 3: Operador 'OU' (||) para o valor padrão null
      const imageUrl = element.querySelector('img.s-image')?.getAttribute('src') || null;
      
      const priceElement = element.querySelector('.a-price.a-offscreen');
      const price = formatPrice(priceElement?.textContent);

      // Garante que apenas produtos com título e URL sejam adicionados
      if (title && productUrl) {
        products.push({
          title,
          rating,
          reviews,
          imageUrl,
          price,
          productUrl: `https://www.amazon.com${productUrl}`,
        });
      }
    } catch (e) {
      console.error(" Error parsing a product element. Skipping.", e);
    }
  });

  return products;

  return products;
}

export default {
  parseProducts,
};