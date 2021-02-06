---
path: '/docker-cheatsheet'
title: 'Docker Cheatsheet'
order: 4.0
section: "Docker Cheatsheet"
description: ""
---


## Build Container Image

1. Build an image from the Dockerfile in the current directory and tag the image
```
docker build -t satyambnsal/todoapp:1.0.0 .
```
In 👆command `satyambnsal` is dockerhub username and `1.0.0` is image tag.

2. List all images that are locally stored with the Docker Engine
```
docker image ls
```

3. Delete an image from the local image store
```
docker image rm satyambnsal/todoapp:1.0.0
```


## Share Container Image with Others

1. Login to Dockerhub
```
docker login -u <dockerhub-username>
```

2. Pull an image from a registry(Default registry is [Dockerhub](https://hub.docker.com/))
```
docker pull node:14
```
in 👆command, image name is `node` and `14` is image tag.

3. Retag a local image with a new image name and tag
```
docker tag satyambnsal/todoapp:1.0.0 satyambnsal/mynewtodo:2.0.0
```

## Run Container
1. Run a container from NGINX Image and expose port 3000 externally mapped to port 80 inside the container
   ```
   docker container run --publish 3000:80 --name nginx-server nginx
   ```
2. Run 👆 container in detached mode with port mapped to 3001
      ```
   docker container run --publish 3001:80 --name nginx-server1 nginx
   ```
3. Get Inside a running container
   ```
   docker container exec -it nginx-server1
   ```


## Docker Volume
1. Create Docker volume
```
docker volume create <volume-name>
```
2. Inspect docker volume
```
docker volume inspect <volume-name|id>
```

3. Attach a volume to todoapp container
```
docker container run --detach --publish 3006:3000 -v todoappdb:/etc/todos satyambnsal/todoapp:1.0.1
```

## Docker Bind Mount
Mount current directory on host machine to NGINX server
```
docker container run -d --name nginx-dev-server -p 80:80 -v $(pwd):/usr/share/nginx/html nginx
```


## See container logs and properties
1. See container logs
```
docker container logs <container-name|container-id>
```
2. See container logs in live mode
```
docker container logs <container-name|container-id> --follow
```
3. See container config
```
docker container inspect <container-name|container-id>
```
4. See performance stats for all containers
```
docker container stats
```
5. See list of process running inside a container
```
docker container top <container-name|container-id>
```

## Use Environment variables
Run MySQL server 
```
docker container run --name mysql-server -d -p 3306:3306 -e MYSQL_RANDOM_ROOT_PASSWORD=yes mysql/mysql-server
```