# 🚴 BikeMap API

API educativa desenvolvida para fins didáticos na disciplina de **Cloud Computing**, com foco em CI/CD, testes automatizados, containerização e deploy.  
Ela simula rotas de bicicleta por bairros, retornando pontos de referência.

---

## 📦 Tecnologias Utilizadas

- Node.js + ESModules  
- Express  
- Jest + Supertest  
- Docker  
- GitHub Actions (CI)  
- Render (Deploy gratuito)  

---

## 📁 Estrutura do Projeto

```
bikemap-api/
├── dados/
│   └── rotas.js          # Dados simulados com bairros e rotas
├── test/
│   └── api.test.js       # Testes automatizados
├── .github/
│   └── workflows/
│       └── ci.yml        # Pipeline CI com GitHub Actions
├── index.js              # Código principal da API
├── Dockerfile            # Containerização
├── package.json          # Dependências e scripts
└── README.md             # Documentação
```

---

## 🚀 Como Executar Localmente

### 1. Clonar o Projeto

```bash
git clone https://github.com/seu-usuario/bikemap-api.git
cd bikemap-api
```

### 2. Instalar Dependências

```bash
npm install
```

### 3. Rodar a API

```bash
npm start
```

Acesse em:  
http://localhost:3000/rotas/centro

---

## 🧪 Testes Automatizados

```bash
npm test
```

### Resultado Esperado

```bash
PASS  test/api.test.js
✓ retorna rotas para o bairro Centro
✓ retorna erro para bairro inexistente
```

---

## 🐳 Docker

### Build da Imagem

```bash
docker build -t bikemap-api .
```

### Executar o Container

```bash
docker run -p 3000:3000 bikemap-api
```

### Testar via Terminal

```bash
curl http://localhost:3000/rotas/centro
```

---

## 🔁 GitHub Actions (CI)

Pipeline automático com testes a cada push ou PR para a branch `main`.

Arquivo de configuração: `.github/workflows/ci.yml`

---

## 🌍 Deploy com Render

1. Criar conta em https://render.com  
2. Novo → Web Service (usando Docker)  
3. Conectar repositório do GitHub  
4. Aguardar build e acessar a URL pública gerada

---

## 🎯 Aprendizados Desenvolvidos

- Prática com desenvolvimento de APIs modernas  
- Testes automatizados com Jest  
- CI com GitHub Actions  
- Containerização com Docker  
- Deploy gratuito com Render  

---

## 👨‍🏫 Licença e Autor

Projeto desenvolvido para fins educacionais na disciplina de **Cloud Computing** – Curso de Sistemas de Informação – [Unidavi](https://www.unidavi.edu.br)  
Professor responsável: [@juniorperfoll](https://github.com/juniorperfoll)
