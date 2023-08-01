# Estágio 1: configurando o ambiente de desenvolvimento
FROM node:14 AS development

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

ENV NODE_ENV=development

EXPOSE 3000

ENTRYPOINT [ "npm", "run" ]
CMD ["dev"]

# Estágio 2: configurando o ambiente de produção
FROM node:14 AS production

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install --production

COPY . .

ENV NODE_ENV=production

EXPOSE 3000

# Define o comando para executar o script de build no estágio de produção
RUN npm run dev

ENTRYPOINT ["npm", "run"]
CMD ["dev"]
