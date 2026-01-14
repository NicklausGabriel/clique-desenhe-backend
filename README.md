<h1>Clique & Desenhe – Random Image API (NestJS)</h1>

API REST desenvolvida para fornecer **imagens aleatórias por categoria**, servindo como base para aplicações de estudo de desenho, ilustração e referências visuais.

A API consome dados do **Pixabay** e retorna imagens com metadados como autor, likes e visualizações.

---

<h2>🌐 Endpoint de Produção</h2>

<p>
<strong>GET</strong>
</p>

<pre>
https://clique-desenhe-backend-production.up.railway.app/random-image
</pre>

---

<h2>🔎 Query Params</h2>

<table>
  <tr>
    <th>Parâmetro</th>
    <th>Tipo</th>
    <th>Obrigatório</th>
    <th>Descrição</th>
  </tr>
  <tr>
    <td><code>category</code></td>
    <td>string</td>
    <td>✅ Sim</td>
    <td>Categoria da imagem</td>
  </tr>
  <tr>
    <td><code>page</code></td>
    <td>number</td>
    <td>❌ Não</td>
    <td>Página da API do Pixabay</td>
  </tr>
  <tr>
    <td><code>index</code></td>
    <td>number</td>
    <td>❌ Não</td>
    <td>Índice da imagem retornada</td>
  </tr>
</table>

---

<h2>🗂️ Categorias Disponíveis</h2>

<pre>
backgrounds
fashion
nature
science
education
feelings
health
people
religion
places
animals
industry
computer
food
sports
transportation
travel
buildings
business
music
</pre>

---

<h2>📏 Regras de Validação</h2>

<h3>page</h3>
<ul>
  <li>Valor mínimo: <strong>1</strong></li>
  <li>Valor máximo: <strong>160</strong></li>
</ul>

<h3>index</h3>
<ul>
  <li>Valor mínimo: <strong>0</strong></li>
  <li>Valor máximo: <strong>2</strong></li>
</ul>

<p>
⚠️ O parâmetro <code>index</code> define qual imagem será escolhida dentro da página retornada.
</p>

---

<h2>🧪 Exemplo de Requisição</h2>

<pre>
GET https://clique-desenhe-backend-production.up.railway.app/random-image?category=food&page=2&index=2
</pre>

---

<h2>📦 Exemplo de Resposta</h2>

<pre>
{
  "reference": {
    "author": "ELG21",
    "url": "https://pixabay.com/get/gd45e945903b972ac2514c69bfc0d9c278340ea9657d590049d962280c000441cc95141c25d6a6e5577c56e288a01687ab4d7192b45a889abbe971c8893ed3a25_1280.jpg",
    "likes": 88,
    "userPage": "https://pixabay.com/users/3764790/",
    "views": 7050
  }
}
</pre>

---

<h2>🛠️ Tecnologias Utilizadas</h2>

<ul>
  <li>Node.js</li>
  <li>NestJS</li>
  <li>TypeScript</li>
  <li>Axios</li>
  <li>Pixabay API</li>
  <li>Railway (deploy)</li>
</ul>

---

<h2>📦 Como Rodar Localmente</h2>

<ol>
  <li>git clone https://github.com/NicklausGabriel/clique-desenhe-backend.git</li>
  <li>cd clique-desenhe-backend</li>
  <li>npm install</li>
  <li>npm run start:dev</li>
</ol>

---

<h2>🤝 Contribuição</h2>

<p>
Pull Requests são bem-vindos.<br/>
Para mudanças maiores, abra uma issue antes para discussão.
</p>

---

<h2>📄 Licença</h2>

<p>
MIT © Gabriel Avelar
</p>
