FROM node:alpine

RUN mkdir -p /usr/breakdown/APIs/issue_api
WORKDIR /usr/breakdown/APIs/issue_api

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3002

CMD ["npm", "start"]