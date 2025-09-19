# Etapa 1: Build
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Etapa 2: Servir com Nginx
# Etapa 2: Servir com Nginx
FROM nginx:alpine

# Copiar arquivos do build do Vite (dist) para o Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Copiar nginx.conf customizado (opcional)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]