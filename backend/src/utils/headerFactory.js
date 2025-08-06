/**
 * @fileoverview Utilitário para gerar cabeçalhos HTTP realistas para as requisições de scraping.
 * A rotação de User-Agents e a criação de um perfil de cabeçalho consistente são
 * técnicas fundamentais para evitar a detecção por sistemas anti-bot.
 */

// Lista de User-Agents recentes e comuns para rotação.
const userAgents = [
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:126.0) Gecko/20100101 Firefox/126.0',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:126.0) Gecko/20100101 Firefox/126.0',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Edg/125.0.0.0 Safari/537.36'
];

/**
 * Seleciona um User-Agent aleatório da lista.
 * @returns {string} Um User-Agent.
 */
const getRandomUserAgent = () => {
  const randomIndex = Math.floor(Math.random() * userAgents.length);
  return userAgents[randomIndex];
};

/**
 * Gera um conjunto completo e consistente de cabeçalhos HTTP para simular um navegador real.
 * @returns {object} Um objeto contendo os cabeçalhos da requisição.
 */
const getRequestHeaders = () => {
  const userAgent = getRandomUserAgent();
  const platform = userAgent.includes('Windows') ? '"Windows"' : '"macOS"';

  return {
    'User-Agent': userAgent,
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    'Accept-Language': 'en-US,en;q=0.9',
    'Accept-Encoding': 'gzip, deflate, br',
    'Referer': 'https://www.google.com/',
    'DNT': '1',
    'Upgrade-Insecure-Requests': '1',
    'Sec-CH-UA': `"Google Chrome";v="125", "Chromium";v="125", "Not.A/Brand";v="24"`,
    'Sec-CH-UA-Mobile': '?0',
    'Sec-CH-UA-Platform': platform,
  };
}; // <-- A chave em falta estava provavelmente aqui.

export { getRequestHeaders };