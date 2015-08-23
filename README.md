# fake-app

## Description
Fake iojs app for demos.

## Build
To build the docker container from sources:
```bash
make build
```
To build with version:
```bash
make VERSION=0.0.2 build
```

## Run
docker run -d -p 8080:8080 --name fake-app vpommier/fake-app:0.0.2
