FROM node:18-alpine As development
WORKDIR /app
RUN npm install -g pnpm

COPY  package.json pnpm-lock.yaml ./
ENV NODE_ENV development
RUN pnpm install --dev
COPY  . .
EXPOSE 8002
CMD [ "pnpm", "dev" ]
FROM node:18-alpine As build
USER node
WORKDIR /app
RUN npm install -g pnpm

COPY --chown=node:node package.json pnpm-lock.yaml ./
COPY --chown=node:node --from=development /app/node_modules ./node_modules
COPY --chown=node:node . .
RUN pnpm install --production
RUN pnpm run build
USER node
FROM node:18-alpine As production
ENV NODE_ENV production
COPY --chown=node:node --from=build /app/node_modules ./node_modules
COPY --chown=node:node --from=build /app/dist ./dist
EXPOSE 8002
CMD [ "pnpm", "start" ]
