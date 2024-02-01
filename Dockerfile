FROM node:18-alpine
COPY . /enu-oprintrvn-client

WORKDIR /enu-oprintrvn-client
  
EXPOSE 3001

ENTRYPOINT npm start