#specify the base image for the project

FROM node:alpine 

# This specify the directory that the docker will start from and where all the file will me copy into

WORKDIR /usr/app

# install the dependencies required

RUN npm install

# This copy the package.json file to make sure it cache when the index file changes in made

COPY package.json ./

# copy other files dependecies    

COPY ./ ./

# define what command docker should run when start up

CMD ["npm", "start"]
