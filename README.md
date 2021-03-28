# vicken-ghoubiguian.github.io

This project consists to create my personal website which will be my online portfolio...

## Contents

## Deployment by Docker...

You can also use Docker to deploy my online portfolio. There are 2 methods of deploying my online portfolio by Docker:

### By the Dockerfile

A Dockerfile is available in the project root, and you can consult it [here](https://github.com/Vicken-Ghoubiguian/vicken-ghoubiguian.github.io/blob/master/Dockerfile). To deploy this web app by the Dockerfile, please follow these commands in order:

```bash
# Cloning the the 'vicken-ghoubiguian.github.io' project from GitHub...
git clone https://github.com/Vicken-Ghoubiguian/vicken-ghoubiguian.github.io

# Placing in the 'vicken-ghoubiguian.github.io' GitHub project's folder...
cd vicken-ghoubiguian.github.io

# Creating the 'vicken-ghoubiguian.github.io' Docker image...
docker build . -t vicken-ghoubiguian.github.io:latest

# Running the 'vicken-ghoubiguian.github.io' Docker image as a Docker container to deploy this portfolio online...
docker container run -d --name vicken-ghoubiguian.github.io -p 80:80 vicken-ghoubiguian.github.io:latest
```

### By Docker Hub

A Docker image is available on Docker hub just [here](https://hub.docker.com/r/wicken/vicken-ghoubiguian.github.io). To deploy my online portfolio by the image on Docker hub, please follow these commands in order:

```bash
# Pulling the 'vicken-ghoubiguian.github.io' from Docker hub in the current machine...
docker pull wicken/vicken-ghoubiguian.github.io:latest

# Running the 'vicken-ghoubiguian.github.io' Docker image as a Docker container to deploy this portfolio online...
docker container run -d --name vicken-ghoubiguian.github.io -p 80:80 wicken/vicken-ghoubiguian.github.io:latest

# Checking the IP address of the Docker container of the vicken-ghoubiguian.github.io application...
docker inspect --format='{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' vicken-ghoubiguian.github.io
```

## How to consult my online portfolio ?

To consult my online portfolio, please [click here](https://vicken-ghoubiguian.github.io/).