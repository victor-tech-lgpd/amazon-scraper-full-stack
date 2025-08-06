import express from 'express';
import cors from 'cors';
import scrapeController from './controllers/scrapeController.js';

// Inicializa a aplicação Express
const app = express();

// Define a porta do servidor, usando a variável de ambiente ou um padrão
const PORT = process.env.PORT || 3001;

// Habilita o CORS para permitir requisições do frontend
// Em um ambiente de produção, configure isso de forma mais restritiva
app.use(cors());

// Middleware para parsear JSON no corpo das requisições (se necessário no futuro)
app.use(express.json());

// Rota principal para verificar se o servidor está no ar
app.get('/', (req, res) => {
  res.send('Amazon Scraper API is running!');
});

// Define a rota de scraping principal
app.use('/api', scrapeController);

// Inicia o servidor e escuta na porta definida
app.listen(PORT, () => {
  console.log(`Backend server is running on http://localhost:${PORT}`);
});

export default app;