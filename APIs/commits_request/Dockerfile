FROM node:alpine

RUN mkdir -p /usr/breakdown/APIs/commits_api
WORKDIR /usr/breakdown/APIs/commits_api

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3001

CMD ["npm", "start"]