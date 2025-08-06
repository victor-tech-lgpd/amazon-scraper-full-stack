/**
 * @fileoverview Lógica principal do frontend para o Amazon Scraper.
 * Gerencia a interação do usuário, a comunicação com a API de backend,
 * e a renderização dinâmica dos resultados na página.
 */

// Seleciona os elementos do DOM necessários para a interatividade
const searchForm = document.getElementById('search-form');
const keywordInput = document.getElementById('keyword-input');
const searchButton = document.getElementById('search-button');
const loader = document.getElementById('loader');
const errorMessageContainer = document.getElementById('error-message');
const resultsSection = document.getElementById('results-section');

/**
 * Exibe ou oculta o spinner de carregamento e gerencia o estado do botão de busca.
 * @param {boolean} isLoading - True para mostrar o loader, false para ocultar.
 */
function setLoadingState(isLoading) {
  loader.classList.toggle('hidden', !isLoading);
  searchButton.disabled = isLoading;
  keywordInput.disabled = isLoading;
}

/**
 * Exibe uma mensagem de erro na interface.
 * @param {string} message - A mensagem de erro a ser exibida.
 */
function displayError(message) {
  errorMessageContainer.textContent = message;
  errorMessageContainer.classList.remove('hidden');
}

/**
 * Limpa o feedback anterior (erros e resultados).
 */
function clearFeedback() {
  errorMessageContainer.classList.add('hidden');
  resultsSection.innerHTML = '';
}

/**
 * Cria e retorna o HTML para um único card de produto.
 * @param {object} product - O objeto do produto com título, preço, etc.
 * @returns {string} A string HTML do card do produto.
 */
function createProductCard(product) {
  const priceDisplay = product.price
    ? `<div class="product-price">$${product.price.toFixed(2)}</div>`
    : `<div class="product-price no-price">Preço indisponível</div>`;

  const ratingDisplay = product.rating
    ? `<div class="product-rating">
         <span>${product.rating}</span>
         <span>(${product.reviews || 0} avaliações)</span>
       </div>`
    : `<div class="product-rating"><span>Sem avaliação</span></div>`;

  return `
    <div class="product-card">
      <a href="${product.productUrl}" target="_blank" rel="noopener noreferrer">
        <div class="product-image-container">
          <img src="${product.imageUrl}" alt="${product.title}" class="product-image" loading="lazy">
        </div>
        <div class="product-info">
          <h3 class="product-title">${product.title}</h3>
          ${ratingDisplay}
          ${priceDisplay}
        </div>
      </a>
    </div>
  `;
}

/**
 * Renderiza a lista de produtos na seção de resultados.
 * @param {Array<object>} products - A lista de produtos retornada pela API.
 */
function renderProducts(products) {
  // CORREÇÃO 1: Operador '||' para verificar se a lista de produtos está vazia.
  if (!products || products.length === 0) {
    displayError('Nenhum produto encontrado para a sua busca. Tente outra palavra-chave.');
    return;
  }

  const productsHtml = products.map(createProductCard).join('');
  resultsSection.innerHTML = productsHtml;
}

/**
 * Manipulador de evento para o envio do formulário de busca.
 * @param {Event} event - O objeto do evento de envio.
 */
async function handleSearch(event) {
  event.preventDefault();
  clearFeedback();

  const keyword = keywordInput.value.trim();

  // Validação simples no lado do cliente
  if (keyword.length < 2) {
    displayError('Por favor, insira uma palavra-chave com pelo menos 2 caracteres.');
    return;
  }

  setLoadingState(true);

  try {
    // Faz a requisição para a API de backend (usando o proxy do Vite)
    const response = await fetch(`/api/scrape?keyword=${encodeURIComponent(keyword)}`);

    if (!response.ok) {
      const errorData = await response.json();
      // CORREÇÃO 2: Operador '||' para a mensagem de erro.
      throw new Error(errorData.error || `Erro ${response.status}: Falha ao buscar dados.`);
    }

    const products = await response.json();
    renderProducts(products);

  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    // CORREÇÃO 3: Operador '||' para a mensagem de erro.
    displayError(error.message || 'Ocorreu um erro inesperado. Por favor, tente novamente mais tarde.');
  } finally {
    setLoadingState(false);
  }
}

// Adiciona o ouvinte de evento ao formulário
searchForm.addEventListener('submit', handleSearch);