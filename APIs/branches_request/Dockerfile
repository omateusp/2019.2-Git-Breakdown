FROM node:alpine

RUN mkdir -p /usr/breakdown/APIs/branch_api
WORKDIR /usr/breakdown/APIs/branch_api

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3004

CMD ["npm", "start"]