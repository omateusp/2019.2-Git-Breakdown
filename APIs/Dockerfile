FROM node:alpine

RUN mkdir -p /usr/breakdown/APIs
WORKDIR /usr/breakdown/APIs

COPY . .

RUN npm --prefix ./api_gateway install ./api_gateway
RUN npm --prefix ./branches_request install ./branches_request
RUN npm --prefix ./commits_request install ./commits_request
RUN npm --prefix ./issues_request install ./issues_request
RUN npm --prefix ./pullrequests_request install ./pullrequests_request

RUN npm test
