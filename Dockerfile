#### Stage 0: Readme Info
# To build run: docker build -t formdesign-docker .
# To test: docker run -p 80:80 formdesign-docker

#### Stage 1: Build react app
# Define a docker image to work with, using a build that have node.js
FROM tiangolo/node-frontend:10 as build-stage

# Setting Work dir inside docker image
WORKDIR /frontend

# Copy JSON packed for node module to docker image, first is local from docker file second is addr docker container
COPY /package*.json /frontend/

# Running npm install since we are in frontend folder in docker
RUN npm install

# Copy front end files to front end in docker
COPY ./ /frontend/

# Building frontend application
RUN npm run build

#### Stage 2: Building install nginx image and copy build app to container
FROM nginx:1.15

# Still in the same work space so we can copy the build files
COPY --from=build-stage /frontend/build/ /usr/share/nginx/html

# Copy the default nginx.conf provided by tiangolo/node-frontend
COPY --from=build-stage /nginx.conf /etc/nginx/conf.d/default.conf


