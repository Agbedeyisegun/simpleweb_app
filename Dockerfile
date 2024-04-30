#specify the base image for the project
    FROM node:alpine 


    WORKDIR /usr/app
# install some dependecies    
    COPY ./ ./

    RUN npm install
# define what command docker should run when start up
CMD ["npm", "start"]
