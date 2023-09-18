FROM node:14
COPY public /app/public
COPY src /app/src
COPY package.json /app/package.json
RUN apt-get update -y
WORKDIR /app
RUN npm install
ENTRYPOINT ["npm","start"]