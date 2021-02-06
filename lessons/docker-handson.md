---
path: '/docker-ecosystem'
title: 'Docker Ecosystem'
order: 2.0
section: "Working with Docker"
description: "Docker Hands On"
---


# Tasks

- [ ] Dockerhub Walkthrough
- [ ] Pull Image from Dockerhub
- [ ] Create Alpine Linux container
- [ ] Create Nginx Server
- [ ] Containerize NodeJS Application





# Docker Commands

Login to Dockerhub

```docker login -u <dockerhub-username>```

Pull NGINX Image from DockerHub

```docker pull nginx```

Run NGINX Server 

```docker container run --name nginx-server --publish 80:80 nginx```

Run NGINX Server in Detached Mode

```docker container run --name nginx-server --publish 80:80 --detach nginx```

See NGINX Server Logs

```docker container logs nginx-server```


See NGINX Server Live Logs 
```docker container logs nginx-server --follow```

Get Inside **nginx-server** container

```docker container exec -it nginx-server```


**NOTE: Container only runs as longs as the command at the startup runs**