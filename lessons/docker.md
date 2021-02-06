---
path: '/docker'
title: 'Docker'
order: 2.3
section: "Overview"
description: "Introduction to Docker"
---

## Introduction

Docker is an open-source project based on Linux containers. It uses Linux kernel features like namespaces and control groups to create containers on top of an operating system.

Just remember, docker is not the only thing that allows you to play with containers. there are other guys in town as well. Solaris Zones, BSD jails, and LXC.(can anybody guess what LXC stands for? 😄)


With Docker, the entire spectrum of software development can now leverage the power of containers. which is pretty cool 😎

1. Ease of use
2. Speed
3. Docker Hub
4. Modularity and Scalability

Now we understand the basics of containers. lets see how docker works behind the seen. what's under the hood 🥸.

**Lets switch our focus to Terminal and write some commands to see how Docker works behind the scene.**



```
docker container run -it --rm --privileged ubuntu:bionic
```