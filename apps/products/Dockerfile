# Development stage
FROM node:18-alpine AS development
RUN npm i -g pnpm
WORKDIR /app
COPY package.json ./
ENV NODE_ENV development
RUN pnpm install
COPY . .
EXPOSE 8001
CMD [ "pnpm", "dev" ]

# Build stage
FROM node:18-alpine AS build
RUN npm i -g pnpm
USER node
WORKDIR /app
COPY --chown=node:node package.json ./
COPY --chown=node:node --from=development /app/node_modules ./node_modules
COPY --chown=node:node . .
RUN pnpm install
RUN pnpm run build

# Production stage
FROM node:18-alpine AS production
ENV NODE_ENV production
USER node
WORKDIR /app
COPY --chown=node:node --from=build /app/node_modules ./node_modules
COPY --chown=node:node --from=build /app/dist ./dist
EXPOSE 8001
CMD [ "pnpm", "start" ]