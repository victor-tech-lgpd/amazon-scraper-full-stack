/**
 * @fileoverview Serviço de cache em memória simples para armazenar resultados de scraping.
 * Ajuda a reduzir requisições repetidas para a mesma palavra-chave, melhorando o desempenho
 * e diminuindo a chance de ser bloqueado.
 */

const cache = new Map();
const CACHE_TTL_HOURS = parseFloat(process.env.CACHE_TTL_HOURS) || 1;
const CACHE_TTL_MS = CACHE_TTL_HOURS * 60 * 60 * 1000; // Tempo de vida do cache


/**
 * Obtém um valor do cache.
 * @param {string} key - A chave para buscar no cache.
 * @returns {any|null} O valor armazenado ou null se não existir ou estiver expirado.
 */
function get(key) {
  const cachedItem = cache.get(key);
  if (!cachedItem) {
    return null;
  }

  const isExpired = (Date.now() - cachedItem.timestamp) > CACHE_TTL_MS;
  if (isExpired) {
    cache.delete(key);
    return null;
  }

  console.log(` Cache HIT for key: ${key}`);
  return cachedItem.value;
}

/**
 * Adiciona um valor ao cache.
 * @param {string} key - A chave para armazenar o valor.
 * @param {any} value - O valor a ser armazenado.
 */
function set(key, value) {
  const item = {
    value,
    timestamp: Date.now(),
  };
  cache.set(key, item);
  console.log(` Cache SET for key: ${key}`);
}

export default {
  get,
  set,
};