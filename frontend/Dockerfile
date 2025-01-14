# Build Stage
FROM node:18 AS build
WORKDIR /app

# Accept the build argument
ARG VITE_API_BASE_URL
ENV VITE_API_BASE_URL=$VITE_API_BASE_URL

COPY package.json package-lock.json ./
RUN npm install

COPY . .

RUN VITE_API_BASE_URL=$VITE_API_BASE_URL npm run build

# Serve Stage
FROM nginx:alpine
WORKDIR /usr/share/nginx/html

COPY --from=build /app/dist .

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
