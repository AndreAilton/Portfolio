# Stage 1: Build do app com Node.js
FROM node:20-alpine AS build

# Defina o diretório de trabalho
WORKDIR /app

# Copie package.json e package-lock.json primeiro (para cache de dependências)
COPY package*.json ./

# Instale dependências de produção (use --production para evitar devDependencies)
RUN npm ci

# Copie o código fonte
COPY . .

# Build o app para produção
RUN npm run build

# Stage 2: Imagem de produção com Nginx
FROM nginx:alpine

# Copie os arquivos buildados da stage anterior
COPY --from=build /app/dist /usr/share/nginx/html   

# Copie uma configuração personalizada de Nginx se precisar (opcional)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exponha a porta 80 (HTTP)
EXPOSE 80

# Rode o Nginx em foreground
CMD ["nginx", "-g", "daemon off;"]