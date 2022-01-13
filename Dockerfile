FROM node:lts-alpine

LABEL maintainer="vndabam@gmail.com"

RUN addgroup df && adduser -S -G df df
USER df

WORKDIR /app

ENV NODE_ENV=production

COPY package*.json ./
RUN npm install 

COPY . ./

CMD ["npm", "start"]

EXPOSE 9000