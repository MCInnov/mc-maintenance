FROM node:22-alpine
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npx nuxi prepare && npx nuxi build
EXPOSE 3000
CMD ["npx", "serve", ".output/public"]