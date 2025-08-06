import axios from 'axios';
import { getRequestHeaders } from '../utils/headerFactory.js';

const AMAZON_BASE_URL = 'https://www.amazon.com';

// --- LÓGICA DO PROXY ROTATIVO ---
let proxyList = [];

// Carrega e parseia a lista de proxies do .env ao iniciar.
try {
  if (process.env.PROXY_LIST) {
    proxyList = JSON.parse(process.env.PROXY_LIST);
    console.log(`[Proxy] ${proxyList.length} proxies carregados com sucesso.`);
  } else {
    console.log('[Proxy] Nenhuma lista de proxy encontrada no .env. As requisições serão feitas diretamente.');
  }
} catch (error) {
  console.error('[Proxy] Erro ao parsear a PROXY_LIST do .env. Verifique o formato JSON.', error);
}

/**
 * Seleciona um proxy aleatório da lista.
 * @returns {object|null} Um objeto de configuração de proxy ou null se a lista estiver vazia.
 */
function getRandomProxy() {
  if (proxyList.length === 0) {
    return null;
  }
  const randomIndex = Math.floor(Math.random() * proxyList.length);
  return proxyList[randomIndex];
}

/**
 * Busca o HTML da página de resultados da Amazon, agora usando um proxy rotativo.
 * @param {string} keyword - A palavra-chave a ser pesquisada.
 * @returns {Promise<string>} O conteúdo HTML da página.
 */
async function fetchSearchPage(keyword) {
  const encodedKeyword = encodeURIComponent(keyword);
  const searchUrl = `${AMAZON_BASE_URL}/s?k=${encodedKeyword}`;
  
  const proxy = getRandomProxy();
  const requestConfig = {
    headers: getRequestHeaders(),
    timeout: 20000, // Aumentamos o timeout para 20s, pois proxies podem ser mais lentos.
  };

  if (proxy) {
    requestConfig.proxy = proxy;
    console.log(`[Request] Fazendo requisição para "${keyword}" através do proxy: ${proxy.host}`);
  } else {
    console.log(`[Request] Fazendo requisição direta para "${keyword}" (sem proxy).`);
  }

  try {
    const response = await axios.get(searchUrl, requestConfig);

    if (response.status === 200 && typeof response.data === 'string' && response.data.length > 0) {
      return response.data;
    } else {
      throw new Error(`A resposta da Amazon foi bem-sucedida (200 OK), mas o corpo estava vazio. Provável bloqueio silencioso.`);
    }
  } catch (error) {
    let errorMessage = error.message;
    if (error.response) {
      // Adiciona mais detalhes do erro se disponíveis na resposta do axios
      errorMessage = `Status: ${error.response.status}, Data: ${JSON.stringify(error.response.data)}`;
    }
    console.error(`Error fetching Amazon page for keyword "${keyword}":`, errorMessage);
    throw new Error('Falha ao obter dados da Amazon. O servidor pode estar a bloquear pedidos ou está temporariamente indisponível.');
  }
}

export default {
  fetchSearchPage,
};