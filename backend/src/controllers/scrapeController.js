/**
 * @fileoverview Controller para a rota de scraping.
 * Responsável por validar a entrada, orquestrar os serviços de cache, scraping e parsing,
 * e formatar a resposta da API, incluindo o tratamento de erros.
 */
import { Router } from 'express';
import { z } from 'zod';
import scrapingService from '../services/scrapingService.js';
import parserService from '../services/parserService.js';
import cacheService from '../services/cacheService.js';
import fs from 'fs';

const router = Router();

// Define o esquema de validação para o parâmetro de busca usando Zod
const scrapeQuerySchema = z.object({
  keyword: z.string().min(1, { message: "Keyword cannot be empty" }),
});

router.get('/scrape', async (req, res) => {
  try {
    // 1. Validar a entrada
    const validationResult = scrapeQuerySchema.safeParse(req.query);
    if (!validationResult.success) {
      return res.status(400).json({ error: 'Keyword is required and must be a non-empty string.', details: validationResult.error.flatten() });
    }
    const { keyword } = validationResult.data;
    const cacheKey = `scrape:${keyword.toLowerCase()}`;

    // 2. Verificar o cache
    const cachedData = cacheService.get(cacheKey);
    if (cachedData) {
      return res.status(200).json(cachedData);
    }

    // 3. Se não houver cache, fazer o scraping
    console.log(`No cache found for "${keyword}". Starting scrape.`);
    const htmlContent = await scrapingService.fetchSearchPage(keyword);
    
    // 4. Parsear o HTML
    const products = parserService.parseProducts(htmlContent);

    // 5. Armazenar o resultado no cache
    cacheService.set(cacheKey, products);

    // 6. Enviar a resposta
    res.status(200).json(products);

  } catch (error) {
    // 7. Tratamento de erros centralizado
    console.error(`An error occurred: ${error.message}`);
    // Determina o status code com base no tipo de erro
    if (error.message.includes('Falha ao obter dados')) {
        // Erro de rede ou bloqueio pela Amazon
        return res.status(502).json({ error: 'Bad Gateway: Could not retrieve data from Amazon.' });
    }
    // Erro de parsing ou outro erro inesperado
    return res.status(500).json({ error: 'Internal Server Error: An unexpected error occurred while processing your request.' });
  }
});

export default router;