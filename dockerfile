# Etapa 1: Build
FROM node:20-alpine AS build

# Criar diretório de trabalho
WORKDIR /app

# Copiar package.json e instalar dependências
COPY package*.json ./
RUN npm install

# Copiar o restante do código e gerar build
COPY . .
RUN npm run build

# Etapa 2: Servir com Nginx
# Etapa 2: Produção com Nginx
FROM nginx:alpine AS prod
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=build /app/dist ./
COPY nginx.conf /etc/nginx/conf.d/default.conf 

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


