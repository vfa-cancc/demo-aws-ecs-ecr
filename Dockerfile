FROM node:10-alpine

EXPOSE 3000
WORKDIR /app

COPY package.json package-lock.json /app/
RUN npm install

COPY . /app

CMD node app.js
