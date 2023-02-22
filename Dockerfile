FROM node:10

WORKDIR /app

ADD package.json .
ADD package-lock.json .
RUN npm install

ADD . .

ENTRYPOINT [ "node", "./src/index.js" ]