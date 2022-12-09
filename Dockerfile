FROM node:19

RUN mkdir -p /usr/src/backend

VOLUME ["/backend"]

WORKDIR /usr/src/backend

COPY package*.json ./

RUN npm install -g nodemon
RUN npm install

COPY . .

EXPOSE 3554

CMD ["npm","start"]








