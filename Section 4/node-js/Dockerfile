FROM node:alpine

WORKDIR /usr/app

COPY package.json .
RUN npm install

COPY App.js .

CMD [ "npm", "start"]
