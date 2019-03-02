FROM node:10.15.0-alpine
LABEL maintainer="Shouvik Mukherjee <contact@ishouvik.com>"

# Setup system packages
RUN apk update
RUN apk add mysql-dev bash

# Setup workdir
RUN mkdir /app
WORKDIR /app

# Install packages
COPY package.json /app/package.json
RUN yarn global add pm2 sequelize-cli
RUN yarn

# Add all application files to workdir
COPY . /app

CMD [ "yarn", "start" ]

EXPOSE 3000/tcp
