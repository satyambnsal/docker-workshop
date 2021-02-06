---
path: '/create-docker-image'
title: 'How to Create Docker Image'
order: 2.0
section: "Working with Docker"
description: ""
---

Dockerfile for Sample NodeJS APP

```
FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "src/index.js"]

```