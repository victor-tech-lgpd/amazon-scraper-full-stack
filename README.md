<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Amazon Product Scraper Full-Stack</title>
    
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    
    <!-- Google Fonts: Inter -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- Lucide Icons -->
    <script src="https://unpkg.com/lucide-react@latest/dist/lucide-react.js"></script>
    <script src="https://unpkg.com/lucide@latest"></script>

    <style>
        /* Base style with Inter font */
        body {
            font-family: 'Inter', sans-serif;
            background-color: #f8fafc; /* gray-50 */
            color: #1f2937; /* gray-800 */
        }
        /* Style for code blocks */
        pre code {
            display: block;
            white-space: pre-wrap;
            word-break: break-all;
        }
        /* Animation for copy feedback */
        .copied-feedback {
            animation: fadeOut 2s forwards;
        }
        @keyframes fadeOut {
            from { opacity: 1; transform: translateY(0); }
            to { opacity: 0; transform: translateY(-10px); }
        }
        /* Hide English by default */
        #english {
            display: none;
        }
    </style>
</head>
<body class="antialiased">

    <div class="container mx-auto p-4 md:p-8 max-w-4xl relative">

        <!-- Language Switcher -->
        <div class="absolute top-4 right-4 md:top-8 md:right-8">
            <button id="lang-switcher" class="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors bg-white border border-gray-200 rounded-full px-4 py-2 shadow-sm">
                <i data-lucide="globe" class="w-4 h-4"></i>
                <span id="lang-text">English</span>
            </button>
        </div>

        <!-- Portuguese Content -->
        <div id="portugues">
            <header class="text-center mb-10 md:mb-16">
                <h1 class="text-4xl md:text-5xl font-bold text-gray-900">Amazon Product Scraper</h1>
                <p class="mt-3 text-lg text-gray-600">Um projeto full-stack para extrair dados de produtos da Amazon de forma eficiente.</p>
            </header>

            <main class="space-y-12 md:space-y-16">
                <section>
                    <h2 class="text-2xl font-semibold mb-4 flex items-center gap-3"><i data-lucide="image" class="w-6 h-6 text-indigo-600"></i>Demonstração da Aplicação</h2>
                    <div class="bg-gray-800 p-6 border border-gray-700 rounded-lg shadow-lg text-white font-mono text-sm">
                        <div class="flex items-center gap-2 mb-4">
                            <span class="w-3 h-3 bg-red-500 rounded-full"></span>
                            <span class="w-3 h-3 bg-yellow-500 rounded-full"></span>
                            <span class="w-3 h-3 bg-green-500 rounded-full"></span>
                        </div>
                        <p><span class="text-green-400">~ </span>/amazon-scraper/api $ curl -X GET "http://localhost:3001/api/scrape?keyword=monitor"</p>
                        <p class="mt-2 text-gray-400">[</p>
                        <p class="ml-4 text-gray-400">{</p>
                        <p class="ml-8"><span class="text-cyan-400">"title"</span>: <span class="text-yellow-400">"Monitor Gamer UltraWide..."</span>,</p>
                        <p class="ml-8"><span class="text-cyan-400">"rating"</span>: <span class="text-yellow-400">"4.7/5.0"</span>,</p>
                        <p class="ml-8"><span class="text-cyan-400">"reviews"</span>: <span class="text-purple-400">1890</span></p>
                        <p class="ml-4 text-gray-400">},</p>
                        <p class="ml-4 text-gray-400">{ ... }</p>
                        <p class="text-gray-400">]</p>
                    </div>
                </section>

                <section>
                    <h2 class="text-2xl font-semibold mb-6 flex items-center gap-3"><i data-lucide="sparkles" class="w-6 h-6 text-indigo-600"></i>Funcionalidades</h2>
                    <ul class="space-y-4">
                        <li class="flex items-start gap-3"><i data-lucide="check-circle-2" class="w-5 h-5 text-green-500 mt-1 flex-shrink-0"></i><span><strong>Extração de Dados da Amazon:</strong> Extrai título, avaliação, número de reviews e URL da imagem.</span></li>
                        <li class="flex items-start gap-3"><i data-lucide="check-circle-2" class="w-5 h-5 text-green-500 mt-1 flex-shrink-0"></i><span><strong>API RESTful Robusta:</strong> Endpoint `GET /api/scrape`.</span></li>
                        <li class="flex items-start gap-3"><i data-lucide="check-circle-2" class="w-5 h-5 text-green-500 mt-1 flex-shrink-0"></i><span><strong>Frontend Dinâmico e Reativo:</strong> Construído com Vanilla JavaScript.</span></li>
                        <li class="flex items-start gap-3"><i data-lucide="check-circle-2" class="w-5 h-5 text-green-500 mt-1 flex-shrink-0"></i><span><strong>Sistema de Proxy Rotativo:</strong> Essencial para web scraping eficaz.</span></li>
                        <li class="flex items-start gap-3"><i data-lucide="check-circle-2" class="w-5 h-5 text-green-500 mt-1 flex-shrink-0"></i><span><strong>Cache em Memória:</strong> Melhora o desempenho e reduz bloqueios.</span></li>
                        <li class="flex items-start gap-3"><i data-lucide="check-circle-2" class="w-5 h-5 text-green-500 mt-1 flex-shrink-0"></i><span><strong>Tratamento de Erros Avançado:</strong> Lida com bloqueios, erros de rede e entradas inválidas.</span></li>
                    </ul>
                </section>

                <section>
                    <h2 class="text-2xl font-semibold mb-6 flex items-center gap-3"><i data-lucide="cpu" class="w-6 h-6 text-indigo-600"></i>Tecnologias Utilizadas</h2>
                    <div class="grid md:grid-cols-2 gap-8">
                        <div class="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
                            <h3 class="text-lg font-semibold mb-4 text-gray-800">Backend</h3>
                            <ul class="space-y-2 text-gray-600">
                                <li class="flex items-center gap-2"><i data-lucide="dot" class="w-4 h-4 text-indigo-500"></i><strong>Runtime:</strong> Bun</li>
                                <li class="flex items-center gap-2"><i data-lucide="dot" class="w-4 h-4 text-indigo-500"></i><strong>Framework:</strong> Express.js</li>
                                <li class="flex items-center gap-2"><i data-lucide="dot" class="w-4 h-4 text-indigo-500"></i><strong>Requisições HTTP:</strong> Axios</li>
                                <li class="flex items-center gap-2"><i data-lucide="dot" class="w-4 h-4 text-indigo-500"></i><strong>Parsing HTML:</strong> JSDOM</li>
                                <li class="flex items-center gap-2"><i data-lucide="dot" class="w-4 h-4 text-indigo-500"></i><strong>Validação:</strong> Zod</li>
                            </ul>
                        </div>
                        <div class="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
                            <h3 class="text-lg font-semibold mb-4 text-gray-800">Frontend</h3>
                            <ul class="space-y-2 text-gray-600">
                                <li class="flex items-center gap-2"><i data-lucide="dot" class="w-4 h-4 text-indigo-500"></i><strong>Build Tool:</strong> Vite</li>
                                <li class="flex items-center gap-2"><i data-lucide="dot" class="w-4 h-4 text-indigo-500"></i><strong>Linguagem:</strong> Vanilla JavaScript</li>
                                <li class="flex items-center gap-2"><i data-lucide="dot" class="w-4 h-4 text-indigo-500"></i><strong>Estilização:</strong> CSS3 Moderno</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 class="text-2xl font-semibold mb-6 flex items-center gap-3"><i data-lucide="terminal" class="w-6 h-6 text-indigo-600"></i>Instalação e Setup</h2>
                    <div class="space-y-6">
                        <div>
                            <h3 class="text-lg font-medium mb-2">1. Clone o repositório:</h3>
                            <div class="code-block bg-gray-900 text-white rounded-lg relative">
                                <pre class="p-4"><code class="language-bash">git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio</code></pre>
                                <button class="copy-btn absolute top-2 right-2 p-2 bg-gray-700 hover:bg-gray-600 rounded-md text-gray-300"><i data-lucide="copy" class="w-4 h-4"></i></button>
                            </div>
                        </div>
                        <div>
                            <h3 class="text-lg font-medium mb-2">2. Instale as dependências do Backend:</h3>
                            <div class="code-block bg-gray-900 text-white rounded-lg relative">
                                <pre class="p-4"><code class="language-bash">cd backend
bun install</code></pre>
                                <button class="copy-btn absolute top-2 right-2 p-2 bg-gray-700 hover:bg-gray-600 rounded-md text-gray-300"><i data-lucide="copy" class="w-4 h-4"></i></button>
                            </div>
                        </div>
                        <div>
                            <h3 class="text-lg font-medium mb-2">3. Instale as dependências do Frontend:</h3>
                            <div class="code-block bg-gray-900 text-white rounded-lg relative">
                                <pre class="p-4"><code class="language-bash">cd ../frontend
bun install</code></pre>
                                <button class="copy-btn absolute top-2 right-2 p-2 bg-gray-700 hover:bg-gray-600 rounded-md text-gray-300"><i data-lucide="copy" class="w-4 h-4"></i></button>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section>
                    <h2 class="text-2xl font-semibold mb-6 flex items-center gap-3"><i data-lucide="settings" class="w-6 h-6 text-indigo-600"></i>Configuração (Variáveis de Ambiente)</h2>
                    <p class="mb-4 text-gray-600">Na pasta `backend`, renomeie `.env.example` para `.env` e preencha com as suas credenciais de proxy.</p>
                    <div class="code-block bg-gray-900 text-white rounded-lg relative">
                        <pre class="p-4"><code class="language-env"># backend/.env.example
PORT=3001
AMAZON_BASE_URL="https://www.amazon.com"
CACHE_TTL_HOURS=1

# ATENÇÃO: Substitua pelos seus dados de proxy reais.
PROXY_LIST='[{"host":"host.proxy.provedor.com","port":8000,"auth":{"username":"seu_username","password":"sua_password"}}]'</code></pre>
                        <button class="copy-btn absolute top-2 right-2 p-2 bg-gray-700 hover:bg-gray-600 rounded-md text-gray-300"><i data-lucide="copy" class="w-4 h-4"></i></button>
                    </div>
                </section>

                <section>
                    <h2 class="text-2xl font-semibold mb-6 flex items-center gap-3"><i data-lucide="play-circle" class="w-6 h-6 text-indigo-600"></i>Como Executar a Aplicação</h2>
                    <div class="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 class="text-lg font-medium mb-2">1. Inicie o Backend:</h3>
                            <div class="code-block bg-gray-900 text-white rounded-lg relative">
                                <pre class="p-4"><code class="language-bash"># No diretório backend
bun run dev</code></pre>
                                <button class="copy-btn absolute top-2 right-2 p-2 bg-gray-700 hover:bg-gray-600 rounded-md text-gray-300"><i data-lucide="copy" class="w-4 h-4"></i></button>
                            </div>
                        </div>
                        <div>
                            <h3 class="text-lg font-medium mb-2">2. Inicie o Frontend:</h3>
                            <div class="code-block bg-gray-900 text-white rounded-lg relative">
                                <pre class="p-4"><code class="language-bash"># No diretório frontend
bun run dev</code></pre>
                                <button class="copy-btn absolute top-2 right-2 p-2 bg-gray-700 hover:bg-gray-600 rounded-md text-gray-300"><i data-lucide="copy" class="w-4 h-4"></i></button>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 class="text-2xl font-semibold mb-6 flex items-center gap-3"><i data-lucide="webhook" class="w-6 h-6 text-indigo-600"></i>API</h2>
                    <div class="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                        <div class="p-6">
                            <p class="text-sm font-mono bg-indigo-100 text-indigo-800 rounded px-2 py-1 inline-block mb-3"><span class="font-bold text-green-700">GET</span> /api/scrape</p>
                            <p class="text-gray-600">Extrai dados de produtos da Amazon com base em uma palavra-chave.</p>
                            <p class="mt-4 mb-2 font-semibold">Parâmetros:</p>
                            <ul class="list-disc list-inside text-gray-600">
                                <li>`keyword` (query string): O termo de busca (Obrigatório).</li>
                            </ul>
                        </div>
                        <div class="bg-gray-50 p-6 border-t border-gray-200">
                            <p class="font-semibold mb-2">Resposta de Sucesso (200 OK):</p>
                            <div class="code-block bg-gray-900 text-white text-sm rounded-lg relative">
                                <pre class="p-4"><code class="language-json">[
  {
    "title": "...",
    "rating": "4.5/5.0",
    "reviews": 1234,
    "imageUrl": "...",
    "price": 29.99,
    "productUrl": "..."
  }
]</code></pre>
                                <button class="copy-btn absolute top-2 right-2 p-2 bg-gray-700 hover:bg-gray-600 rounded-md text-gray-300"><i data-lucide="copy" class="w-4 h-4"></i></button>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section>
                    <div class="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg">
                        <div class="flex items-center gap-3">
                            <i data-lucide="alert-triangle" class="w-8 h-8 text-amber-500 flex-shrink-0"></i>
                            <div>
                                <h2 class="text-xl font-semibold text-amber-800">Aviso Legal e Limitações</h2>
                            </div>
                        </div>
                        <ul class="mt-4 space-y-3 text-amber-700">
                            <li><strong>Termos de Serviço:</strong> Fazer web scraping da Amazon viola os seus Termos de Serviço. Este projeto foi desenvolvido para <strong>fins estritamente educacionais</strong>.</li>
                            <li><strong>Necessidade de Proxies:</strong> A extração de dados bem-sucedida <strong>requer o uso de um serviço de proxy residencial pago e de alta qualidade</strong>.</li>
                            <li><strong>Volatilidade do HTML:</strong> A estrutura do site da Amazon muda frequentemente, o que pode quebrar os seletores CSS do `parser`.</li>
                        </ul>
                    </div>
                </section>

            </main>
        </div>

        <!-- English Content -->
        <div id="english">
            <header class="text-center mb-10 md:mb-16">
                <h1 class="text-4xl md:text-5xl font-bold text-gray-900">Full-Stack Amazon Product Scraper</h1>
                <p class="mt-3 text-lg text-gray-600">A complete full-stack project to efficiently scrape product data from Amazon.</p>
            </header>

            <main class="space-y-12 md:space-y-16">
                 <section>
                    <h2 class="text-2xl font-semibold mb-4 flex items-center gap-3"><i data-lucide="image" class="w-6 h-6 text-indigo-600"></i>Application Demo</h2>
                    <div class="bg-gray-800 p-6 border border-gray-700 rounded-lg shadow-lg text-white font-mono text-sm">
                        <div class="flex items-center gap-2 mb-4">
                            <span class="w-3 h-3 bg-red-500 rounded-full"></span>
                            <span class="w-3 h-3 bg-yellow-500 rounded-full"></span>
                            <span class="w-3 h-3 bg-green-500 rounded-full"></span>
                        </div>
                        <p><span class="text-green-400">~ </span>/amazon-scraper/api $ curl -X GET "http://localhost:3001/api/scrape?keyword=monitor"</p>
                        <p class="mt-2 text-gray-400">[</p>
                        <p class="ml-4 text-gray-400">{</p>
                        <p class="ml-8"><span class="text-cyan-400">"title"</span>: <span class="text-yellow-400">"UltraWide Gaming Monitor..."</span>,</p>
                        <p class="ml-8"><span class="text-cyan-400">"rating"</span>: <span class="text-yellow-400">"4.7/5.0"</span>,</p>
                        <p class="ml-8"><span class="text-cyan-400">"reviews"</span>: <span class="text-purple-400">1890</span></p>
                        <p class="ml-4 text-gray-400">},</p>
                        <p class="ml-4 text-gray-400">{ ... }</p>
                        <p class="text-gray-400">]</p>
                    </div>
                </section>

                <section>
                    <h2 class="text-2xl font-semibold mb-6 flex items-center gap-3"><i data-lucide="sparkles" class="w-6 h-6 text-indigo-600"></i>Features</h2>
                    <ul class="space-y-4">
                        <li class="flex items-start gap-3"><i data-lucide="check-circle-2" class="w-5 h-5 text-green-500 mt-1 flex-shrink-0"></i><span><strong>Amazon Data Extraction:</strong> Scrapes product title, rating, number of reviews, and image URL.</span></li>
                        <li class="flex items-start gap-3"><i data-lucide="check-circle-2" class="w-5 h-5 text-green-500 mt-1 flex-shrink-0"></i><span><strong>Robust RESTful API:</strong> A `GET /api/scrape` endpoint.</span></li>
                        <li class="flex items-start gap-3"><i data-lucide="check-circle-2" class="w-5 h-5 text-green-500 mt-1 flex-shrink-0"></i><span><strong>Dynamic and Responsive Frontend:</strong> Built with Vanilla JavaScript.</span></li>
                        <li class="flex items-start gap-3"><i data-lucide="check-circle-2" class="w-5 h-5 text-green-500 mt-1 flex-shrink-0"></i><span><strong>Rotating Proxy System:</strong> Essential for effective web scraping.</span></li>
                        <li class="flex items-start gap-3"><i data-lucide="check-circle-2" class="w-5 h-5 text-green-500 mt-1 flex-shrink-0"></i><span><strong>In-Memory Caching:</strong> Improves performance and reduces blocks.</span></li>
                        <li class="flex items-start gap-3"><i data-lucide="check-circle-2" class="w-5 h-5 text-green-500 mt-1 flex-shrink-0"></i><span><strong>Advanced Error Handling:</strong> Gracefully handles blocks, network errors, and invalid inputs.</span></li>
                    </ul>
                </section>

                <section>
                    <h2 class="text-2xl font-semibold mb-6 flex items-center gap-3"><i data-lucide="cpu" class="w-6 h-6 text-indigo-600"></i>Tech Stack</h2>
                    <div class="grid md:grid-cols-2 gap-8">
                        <div class="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
                            <h3 class="text-lg font-semibold mb-4 text-gray-800">Backend</h3>
                            <ul class="space-y-2 text-gray-600">
                                <li class="flex items-center gap-2"><i data-lucide="dot" class="w-4 h-4 text-indigo-500"></i><strong>Runtime:</strong> Bun</li>
                                <li class="flex items-center gap-2"><i data-lucide="dot" class="w-4 h-4 text-indigo-500"></i><strong>Framework:</strong> Express.js</li>
                                <li class="flex items-center gap-2"><i data-lucide="dot" class="w-4 h-4 text-indigo-500"></i><strong>HTTP Requests:</strong> Axios</li>
                                <li class="flex items-center gap-2"><i data-lucide="dot" class="w-4 h-4 text-indigo-500"></i><strong>HTML Parsing:</strong> JSDOM</li>
                                <li class="flex items-center gap-2"><i data-lucide="dot" class="w-4 h-4 text-indigo-500"></i><strong>Validation:</strong> Zod</li>
                            </ul>
                        </div>
                        <div class="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
                            <h3 class="text-lg font-semibold mb-4 text-gray-800">Frontend</h3>
                            <ul class="space-y-2 text-gray-600">
                                <li class="flex items-center gap-2"><i data-lucide="dot" class="w-4 h-4 text-indigo-500"></i><strong>Build Tool:</strong> Vite</li>
                                <li class="flex items-center gap-2"><i data-lucide="dot" class="w-4 h-4 text-indigo-500"></i><strong>Language:</strong> Vanilla JavaScript</li>
                                <li class="flex items-center gap-2"><i data-lucide="dot" class="w-4 h-4 text-indigo-500"></i><strong>Styling:</strong> Modern CSS3</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 class="text-2xl font-semibold mb-6 flex items-center gap-3"><i data-lucide="terminal" class="w-6 h-6 text-indigo-600"></i>Installation and Setup</h2>
                    <div class="space-y-6">
                        <div>
                            <h3 class="text-lg font-medium mb-2">1. Clone the repository:</h3>
                            <div class="code-block bg-gray-900 text-white rounded-lg relative">
                                <pre class="p-4"><code class="language-bash">git clone https://github.com/your-username/your-repository.git
cd your-repository</code></pre>
                                <button class="copy-btn absolute top-2 right-2 p-2 bg-gray-700 hover:bg-gray-600 rounded-md text-gray-300"><i data-lucide="copy" class="w-4 h-4"></i></button>
                            </div>
                        </div>
                        <div>
                            <h3 class="text-lg font-medium mb-2">2. Install Backend Dependencies:</h3>
                            <div class="code-block bg-gray-900 text-white rounded-lg relative">
                                <pre class="p-4"><code class="language-bash">cd backend
bun install</code></pre>
                                <button class="copy-btn absolute top-2 right-2 p-2 bg-gray-700 hover:bg-gray-600 rounded-md text-gray-300"><i data-lucide="copy" class="w-4 h-4"></i></button>
                            </div>
                        </div>
                        <div>
                            <h3 class="text-lg font-medium mb-2">3. Install Frontend Dependencies:</h3>
                            <div class="code-block bg-gray-900 text-white rounded-lg relative">
                                <pre class="p-4"><code class="language-bash">cd ../frontend
bun install</code></pre>
                                <button class="copy-btn absolute top-2 right-2 p-2 bg-gray-700 hover:bg-gray-600 rounded-md text-gray-300"><i data-lucide="copy" class="w-4 h-4"></i></button>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section>
                    <h2 class="text-2xl font-semibold mb-6 flex items-center gap-3"><i data-lucide="settings" class="w-6 h-6 text-indigo-600"></i>Configuration (Environment Variables)</h2>
                    <p class="mb-4 text-gray-600">In the `backend` folder, rename `.env.example` to `.env` and fill in your proxy credentials.</p>
                    <div class="code-block bg-gray-900 text-white rounded-lg relative">
                        <pre class="p-4"><code class="language-env"># backend/.env.example
PORT=3001
AMAZON_BASE_URL="https://www.amazon.com"
CACHE_TTL_HOURS=1

# WARNING: Replace with your actual proxy credentials.
PROXY_LIST='[{"host":"host.proxy.provider.com","port":8000,"auth":{"username":"your_username","password":"your_password"}}]'</code></pre>
                        <button class="copy-btn absolute top-2 right-2 p-2 bg-gray-700 hover:bg-gray-600 rounded-md text-gray-300"><i data-lucide="copy" class="w-4 h-4"></i></button>
                    </div>
                </section>

                <section>
                    <h2 class="text-2xl font-semibold mb-6 flex items-center gap-3"><i data-lucide="play-circle" class="w-6 h-6 text-indigo-600"></i>Running the Application</h2>
                    <div class="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 class="text-lg font-medium mb-2">1. Start the Backend Server:</h3>
                            <div class="code-block bg-gray-900 text-white rounded-lg relative">
                                <pre class="p-4"><code class="language-bash"># In the backend directory
bun run dev</code></pre>
                                <button class="copy-btn absolute top-2 right-2 p-2 bg-gray-700 hover:bg-gray-600 rounded-md text-gray-300"><i data-lucide="copy" class="w-4 h-4"></i></button>
                            </div>
                        </div>
                        <div>
                            <h3 class="text-lg font-medium mb-2">2. Start the Frontend Server:</h3>
                            <div class="code-block bg-gray-900 text-white rounded-lg relative">
                                <pre class="p-4"><code class="language-bash"># In the frontend directory
bun run dev</code></pre>
                                <button class="copy-btn absolute top-2 right-2 p-2 bg-gray-700 hover:bg-gray-600 rounded-md text-gray-300"><i data-lucide="copy" class="w-4 h-4"></i></button>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 class="text-2xl font-semibold mb-6 flex items-center gap-3"><i data-lucide="webhook" class="w-6 h-6 text-indigo-600"></i>API Documentation</h2>
                    <div class="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                        <div class="p-6">
                            <p class="text-sm font-mono bg-indigo-100 text-indigo-800 rounded px-2 py-1 inline-block mb-3"><span class="font-bold text-green-700">GET</span> /api/scrape</p>
                            <p class="text-gray-600">Scrapes product data from Amazon based on a keyword.</p>
                            <p class="mt-4 mb-2 font-semibold">Parameters:</p>
                            <ul class="list-disc list-inside text-gray-600">
                                <li>`keyword` (query string): The search term (Required).</li>
                            </ul>
                        </div>
                        <div class="bg-gray-50 p-6 border-t border-gray-200">
                            <p class="font-semibold mb-2">Success Response (200 OK):</p>
                            <div class="code-block bg-gray-900 text-white text-sm rounded-lg relative">
                                <pre class="p-4"><code class="language-json">[
  {
    "title": "...",
    "rating": "4.5/5.0",
    "reviews": 1234,
    "imageUrl": "...",
    "price": 29.99,
    "productUrl": "..."
  }
]</code></pre>
                                <button class="copy-btn absolute top-2 right-2 p-2 bg-gray-700 hover:bg-gray-600 rounded-md text-gray-300"><i data-lucide="copy" class="w-4 h-4"></i></button>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section>
                    <div class="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg">
                        <div class="flex items-center gap-3">
                            <i data-lucide="alert-triangle" class="w-8 h-8 text-amber-500 flex-shrink-0"></i>
                            <div>
                                <h2 class="text-xl font-semibold text-amber-800">Disclaimer and Limitations</h2>
                            </div>
                        </div>
                        <ul class="mt-4 space-y-3 text-amber-700">
                            <li><strong>Terms of Service:</strong> Scraping Amazon violates their Terms of Service. This project is for <strong>strictly educational purposes</strong>.</li>
                            <li><strong>Proxy Requirement:</strong> Successful data extraction <strong>requires a high-quality, paid residential proxy service</strong>.</li>
                            <li><strong>HTML Volatility:</strong> Amazon's website structure changes frequently, which can break the `parser`'s CSS selectors.</li>
                        </ul>
                    </div>
                </section>
            </main>
        </div>

        <!-- Footer -->
        <footer class="text-center mt-16 pt-8 border-t border-gray-200">
            <p id="footer-pt" class="text-gray-500">Desenvolvido com <i data-lucide="heart" class="w-4 h-4 inline-block text-red-500"></i>. Veja o projeto no <a href="https://github.com/seu-usuario/seu-repositorio" target="_blank" rel="noopener noreferrer" class="text-indigo-600 hover:underline">GitHub</a>.</p>
            <p id="footer-en" class="text-gray-500" style="display: none;">Developed with <i data-lucide="heart" class="w-4 h-4 inline-block text-red-500"></i>. Check out the project on <a href="https://github.com/your-username/your-repository" target="_blank" rel="noopener noreferrer" class="text-indigo-600 hover:underline">GitHub</a>.</p>
        </footer>

    </div>

    <script>
        // Render Lucide icons
        lucide.createIcons();

        // Language Switcher Logic
        const langSwitcher = document.getElementById('lang-switcher');
        const langText = document.getElementById('lang-text');
        const ptContent = document.getElementById('portugues');
        const enContent = document.getElementById('english');
        const footerPt = document.getElementById('footer-pt');
        const footerEn = document.getElementById('footer-en');

        langSwitcher.addEventListener('click', () => {
            const isEnglishVisible = enContent.style.display === 'block';
            if (isEnglishVisible) {
                // Switch to Portuguese
                enContent.style.display = 'none';
                ptContent.style.display = 'block';
                footerEn.style.display = 'none';
                footerPt.style.display = 'block';
                langText.textContent = 'English';
                document.documentElement.lang = 'pt-br';
            } else {
                // Switch to English
                ptContent.style.display = 'none';
                enContent.style.display = 'block';
                footerPt.style.display = 'none';
                footerEn.style.display = 'block';
                langText.textContent = 'Português';
                document.documentElement.lang = 'en';
            }
        });

        // Copy to clipboard functionality
        document.querySelectorAll('.copy-btn').forEach(button => {
            button.addEventListener('click', () => {
                const codeBlock = button.closest('.code-block');
                const code = codeBlock.querySelector('code').innerText;
                
                navigator.clipboard.writeText(code).then(() => {
                    // Visual feedback
                    button.innerHTML = '<i data-lucide="check" class="w-4 h-4 text-green-400"></i>';
                    lucide.createIcons();

                    const feedback = document.createElement('span');
                    feedback.textContent = 'Copied!';
                    feedback.className = 'copied-feedback absolute -top-8 right-0 bg-gray-800 text-white text-xs rounded py-1 px-2';
                    button.parentElement.appendChild(feedback);

                    setTimeout(() => {
                        button.innerHTML = '<i data-lucide="copy" class="w-4 h-4"></i>';
                        lucide.createIcons();
                        feedback.remove();
                    }, 2000);
                }).catch(err => {
                    console.error('Failed to copy text: ', err);
                });
            });
        });
    </script>

</body>
</html>
