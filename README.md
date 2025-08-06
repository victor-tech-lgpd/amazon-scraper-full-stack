<div align="center">

<h1>Amazon Product Scraper Full-Stack</h1>
Um projeto full-stack completo para extrair informações de produtos da Amazon, com uma API robusta e uma interface de utilizador moderna.

</div>

<div align="center">

</div>

🌐 Languages / Idiomas
<details open>
<summary>🇬🇧 English</summary>

✨ Features
✅ Amazon Data Extraction: Scrapes product title, rating, number of reviews, and image URL.

✅ Robust RESTful API: A GET /api/scrape endpoint to initiate the scraping process.

✅ Dynamic and Responsive Frontend: An interface built with Vanilla JavaScript that consumes the API and renders results without a page reload.

✅ Rotating Proxy System: An advanced implementation to bypass IP-based blocking.

✅ In-Memory Caching: Reduces redundant requests for the same keyword, improving performance.

✅ Advanced Error Handling: Gracefully handles Amazon blocks, network errors, and invalid inputs.

🚀 Tech Stack
Backend

Frontend

Runtime: Bun

Build Tool: Vite

Framework: Express.js

Language: Vanilla JS

HTTP: Axios

Styling: Modern CSS3

Parsing: JSDOM



Validation: Zod



⚙️ Installation and Setup
Follow the steps below to set up the local development environment.

Prerequisites:

Bun (v1.0 or higher) installed.

Step-by-Step:

Clone the repository:

git clone https://github.com/your-username/your-repository.git
cd your-repository

Install Backend Dependencies:

cd backend
bun install

Install Frontend Dependencies:

cd ../frontend
bun install

🔑 Configuration (Environment Variables)
For the scraper to work effectively, configuring a proxy service is essential.

In the backend folder, rename the .env.example file to .env.

Open the backend/.env file and fill in the variables with your proxy credentials.

backend/.env.example

# Example environment variables for the project
PORT=3001
AMAZON_BASE_URL="https://www.amazon.com"
CACHE_TTL_HOURS=1

# WARNING: Replace with your actual proxy credentials. This is only a format example.
PROXY_LIST='[{"host":"host.proxy.provider.com","port":8000,"auth":{"username":"your_username","password":"your_password"}}]'

▶️ Running the Application
The application requires running two servers in parallel in separate terminals.

Start the Backend Server:
(In the backend directory)

bun run dev

The server will be running at http://localhost:3001.

Start the Frontend Server:
(In the frontend directory)

bun run dev

The UI will be accessible at http://localhost:5173.

🤝 Contributing
Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

Fork the Project

Create your Feature Branch (git checkout -b feature/AmazingFeature)

Commit your Changes (git commit -m 'Add some AmazingFeature')

Push to the Branch (git push origin feature/AmazingFeature)

Open a Pull Request

⚖️ Disclaimer and Limitations
Terms of Service: Scraping Amazon violates their Terms of Service. This project is intended for strictly educational purposes.

Proxy Requirement: Due to Amazon's strong anti-bot measures, successful data extraction requires the use of a high-quality, paid residential proxy service.

HTML Volatility: Amazon's website structure changes frequently, which can break the parser's CSS selectors at any time.

📄 License
Distributed under the MIT License. See LICENSE for more information.

</details>

<details>
<summary>🇧🇷 Português</summary>

✨ Funcionalidades
✅ Extração de Dados da Amazon: Extrai título, avaliação, número de reviews e URL da imagem dos produtos.

✅ API RESTful Robusta: Endpoint GET /api/scrape para iniciar a extração.

✅ Frontend Dinâmico e Reativo: Interface construída com Vanilla JavaScript que consome a API e renderiza os resultados.

✅ Sistema de Proxy Rotativo: Implementação avançada para contornar bloqueios de IP.

✅ Cache em Memória: Reduz requisições redundantes, melhorando o desempenho.

✅ Tratamento de Erros Avançado: Lida de forma elegante com bloqueios da Amazon, erros de rede e entradas inválidas.

🚀 Tecnologias Utilizadas
Backend

Frontend

Runtime: Bun

Build Tool: Vite

Framework: Express.js

Linguagem: Vanilla JS

HTTP: Axios

Estilo: CSS3 Moderno

Parsing: JSDOM



Validação: Zod



⚙️ Instalação e Setup
Siga os passos abaixo para configurar o ambiente de desenvolvimento local.

Pré-requisitos:

Bun (v1.0 ou superior) instalado.

Passo a Passo:

Clone o repositório:

git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio

Instale as dependências do Backend:

cd backend
bun install

Instale as dependências do Frontend:

cd ../frontend
bun install

🔑 Configuração (Variáveis de Ambiente)
Para que o scraper funcione eficazmente, é essencial configurar um serviço de proxy.

Na pasta backend, renomeie o arquivo .env.example para .env.

Abra o arquivo backend/.env e preencha as variáveis com as suas credenciais de proxy.

backend/.env.example

# Exemplo de variáveis de ambiente para o projeto
PORT=3001
AMAZON_BASE_URL="https://www.amazon.com"
CACHE_TTL_HOURS=1

# ATENÇÃO: Substitua pelos seus dados de proxy reais.
PROXY_LIST='[{"host":"host.proxy.provedor.com","port":8000,"auth":{"username":"seu_username","password":"sua_password"}}]'

▶️ Como Executar a Aplicação
A aplicação requer que dois servidores sejam executados em paralelo.

Inicie o servidor Backend:
(No diretório backend)

bun run dev

O servidor estará a rodar em http://localhost:3001.

Inicie o servidor Frontend:
(No diretório frontend)

bun run dev

A interface estará acessível em http://localhost:5173.

🤝 Contribuindo
Contribuições fazem da comunidade de código aberto um lugar incrível para aprender, inspirar e criar. Qualquer contribuição que você fizer será muito apreciada.

Se você tem uma sugestão para melhorar o projeto, por favor, faça um fork do repositório e crie um pull request. Você também pode simplesmente abrir uma issue com a tag "enhancement".

Faça um Fork do Projeto

Crie sua Feature Branch (git checkout -b feature/AmazingFeature)

Faça o Commit de suas alterações (git commit -m 'Add some AmazingFeature')

Faça o Push para a Branch (git push origin feature/AmazingFeature)

Abra um Pull Request

⚖️ Aviso Legal e Limitações
Termos de Serviço: Fazer web scraping da Amazon viola os seus Termos de Serviço. Este projeto foi desenvolvido para fins estritamente educacionais.

Necessidade de Proxies: A extração de dados bem-sucedida requer o uso de um serviço de proxy residencial pago e de alta qualidade.

Volatilidade do HTML: A estrutura do site da Amazon muda frequentemente, o que pode quebrar os seletores CSS do parser.

📄 Licença
Distribuído sob a Licença MIT. Veja LICENSE para mais informações.

</details>
