FROM node:18.17.1-buster
COPY ./ /app
RUN apt-get update -y
RUN npm install -g serve
WORKDIR /app
EXPOSE 3000
ENTRYPOINT [ "npm","start" ]