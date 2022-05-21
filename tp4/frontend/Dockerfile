# pull the base image
FROM node:latest

# set the working direction
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH
ENV CHOKIDAR_USEPOLLING=true
# install app dependencies
COPY package.json ./

COPY package-lock.json ./

RUN npm config set unsafe-perm true

RUN npm install

# add app
COPY . ./

# start app
CMD ["npm", "start"]