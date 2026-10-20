FROM node:22-alpine AS build
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

# Só para o `prisma generate` no build (não é a URL de runtime)
ARG DATABASE_URL=postgresql://user:pass@localhost:5432/db?schema=public
ENV DATABASE_URL=$DATABASE_URL

RUN npx prisma generate
RUN npm run build

FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

COPY --from=build /app/package.json ./
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist
COPY --from=build /app/prisma ./prisma
COPY --from=build /app/prisma7.config.ts ./
COPY --from=build /app/src/generated ./src/generated

EXPOSE 3000
CMD ["node", "dist/main.js"]