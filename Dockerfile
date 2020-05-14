FROM node:12.16.3

WORKDIR /usr/src/app

COPY package.json .

RUN npm install

EXPOSE 3003

CMD [ "npm", "run", "server" ]

COPY . .