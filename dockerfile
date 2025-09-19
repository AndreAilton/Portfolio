# ===== Etapa 1: Build do React com Node =====
FROM node:20-alpine AS build

# Criar diretório de trabalho
WORKDIR /app

# Copiar package.json e package-lock.json
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar o restante do código
COPY . .

# Build do React com Vite
RUN npm run build

# ===== Etapa 2: Servir com Nginx =====
FROM nginx:alpine

# Copiar build do React (Vite gera 'dist')
COPY --from=build /app/dist /usr/share/nginx/html

# Copiar nginx.conf customizado
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expor porta 80 no container
EXPOSE 80

# Iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
