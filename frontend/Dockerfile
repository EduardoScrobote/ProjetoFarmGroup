# Estágio 1: construindo a aplicação
FROM node:14 AS builder

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia os arquivos de dependências
COPY package.json package-lock.json ./

# Instala as dependências
RUN npm install

# Copia o código fonte da aplicação
COPY . .

# Constrói a aplicação
RUN npm run dev

# Estágio 2: executando a aplicação em produção
FROM node:14 AS production

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia os arquivos de dependências
COPY package.json package-lock.json ./

# Instala as dependências apenas para produção
RUN npm install --production

# Copia os arquivos do estágio anterior
COPY --from=builder /app/dist ./dist

# Define a porta que será exposta pelo contêiner (ajuste se necessário)
EXPOSE 3000

# Define o comando para iniciar o servidor de produção
ENTRYPOINT ["npm", "run"]
CMD ["dev"]
