FROM node:lts-alpine

LABEL maintainer="vndaba <vndabam@gmail.com>"

RUN addgroup -S df && adduser -S -G df df
RUN mkdir /app && chown df /app
USER df

WORKDIR /app

ENV NODE_ENV=production

COPY --chown=df:df package*.json ./
RUN npm install --include=dev

COPY --chown=df:df . ./

ENTRYPOINT [ "npm" , "start" ]

EXPOSE 9000