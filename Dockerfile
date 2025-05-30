# Imagem base
FROM node:22-alpine

# Diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos de dependência
COPY package*.json ./

# Instala dependências
RUN npm install

# Copia o restante dos arquivos
COPY . .

# Expõe a porta da aplicação
EXPOSE 3000

# Comando para iniciar a API
CMD ["npm", "start"]
