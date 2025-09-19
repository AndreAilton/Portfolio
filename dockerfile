# Etapa 1: Build
FROM node:20-alpine AS build

# Diretório de trabalho
WORKDIR /app

# Copiar package.json e instalar dependências
COPY package*.json ./
RUN npm install

# Copiar o restante do código e gerar build
COPY . .
RUN npm run build

# Etapa 2: Servir com Nginx
FROM nginx:alpine AS prod
WORKDIR /usr/share/nginx/html

# Limpar conteúdo padrão do Nginx
RUN rm -rf ./*

# Copiar build do React
COPY --from=build /app/dist ./

# Copiar configuração do Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf 

# NÃO expor porta (easyPanel gerencia automaticamente)
CMD ["nginx", "-g", "daemon off;"]
