FROM node:10.15.0-alpine

WORKDIR /app

RUN apk update

RUN yarn install -global webpack