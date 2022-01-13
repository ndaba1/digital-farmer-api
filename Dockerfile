FROM node:lts-alpine

LABEL maintainer="vndabam@gmail.com"

RUN addgroup node && adduser -S -G node node
USER node

WORKDIR /app

ENV NODE_ENV=production

COPY package*.json ./
RUN npm install 

COPY . ./

CMD ["npm", "start"]

EXPOSE 9000