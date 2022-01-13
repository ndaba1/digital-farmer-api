FROM node:lts-alpine

LABEL maintainer="vndabam@gmail.com"

RUN addgroup -S df && adduser -S -G df df
RUN mkdir /app && chown df /app
USER df

WORKDIR /app

ENV NODE_ENV=production

COPY --chown=df:df package*.json ./
RUN npm install 

COPY --chown=df:df . ./

CMD ["npm", "start"]

EXPOSE 9000