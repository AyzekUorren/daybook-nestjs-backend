FROM node:12-alpine

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

COPY . /usr/src/app

EXPOSE 3000

RUN npm run-script build

CMD [ "npm", "run-script", "start" ]