FROM node:20.16.0-alpine AS base

WORKDIR /app

RUN npm install -g turbo@2.2.3 @nestjs/cli@10.4.7

COPY package*.json /app
COPY apps/api/package.json /app/apps/api/package.json
COPY apps/app/package.json /app/apps/app/package.json

ENV NODE_ENV=development

RUN npm install

COPY . /app

RUN npm run build

FROM base AS production

ENV NODE_ENV=production

RUN rm -rf node_modules

RUN npm ci

CMD [ "npm", "start" ]