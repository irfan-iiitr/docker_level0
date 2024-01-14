# How to Create a Dockerfile Repository and Pull a Docker Image

This guide will walk you through the process of creating a Dockerfile repository and pulling a Docker image.

## Creating a Dockerfile Repository

1. Create a new directory for your Dockerfile and navigate into it.
2. Create a new file named `Dockerfile` in this directory.
3. In the Dockerfile, specify the base image, add the necessary dependencies, copy your application into the image, expose the necessary port, and specify the command to run your application.
4. Build your Docker image using the `docker build` command. Tag your image using `-t` followed by `username/repository:tag`.


## Building the Docker Image

To build the Hello Node Docker image, navigate to the root of the project directory and use the following command:

```bash
docker build -t irfaniiitr/hello-node:0.0.1.RELEASE .
```

## Running the Docker Container

To run the Hello Node Docker container, use the following command:

```bash
docker container run -d -p 3000:3000 irfaniiitr/hello-node:0.0.1.RELEASE
```


To run the Hello Node Docker container, use the following command:

```bash
docker container run -d -p 3000:3000 irfaniiitr/hello-node:0.0.1.RELEASE
```

## Pulling the Docker Image

To pull the Hello Node Docker image from Docker Hub, use the following command:

```bash
docker pull irfaniiitr/hello-node:0.0.1.RELEASE
```

## Running the Docker Container

To run the Hello Node Docker container, use the following command:

```bash
docker run -d -p 3000:3000 irfaniiitr/hello-node:0.0.1.RELEASE
```

## Listing Running Containers

To check the status of running Docker containers, you can use the following command:

```bash
docker ps
```

## Stopping Docker containers
```bash
docker stop 'container id'
```
