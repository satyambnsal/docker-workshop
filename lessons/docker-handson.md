---
path: '/docker-handson'
title: 'Docker Handson'
order: 3.2
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

1. Login to Dockerhub
```
docker login -u <dockerhub-username>
```

2. Pull NGINX Image from DockerHub
```
docker pull nginx
```

3. Run NGINX Server 
```
docker container run --name nginx-server --publish 80:80 nginx
```

4. Run NGINX Server in Detached Mode
```
docker container run --name nginx-server --publish 80:80 --detach nginx
```

5. See NGINX Server Logs
```
docker container logs nginx-server
```

6. See NGINX Server Live Logs 
```
docker container logs nginx-server --follow
```

7. Get Inside **nginx-server** container
```
docker container exec -it nginx-server
```


**NOTE: Container only runs as longs as the command at the startup runs**