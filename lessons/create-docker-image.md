---
path: '/create-docker-image'
title: 'How to Create Docker Image'
order: 3.3
section: "Working with Docker"
description: ""
---

Dockerfile for Sample NodeJS APP

```
FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn install

COPY . .

EXPOSE 3000

CMD ["node", "src/index.js"]

```


Build the container image using the `docker build` command
```
docker build -t satyambnsal/todoapp:1.0.0 .
```