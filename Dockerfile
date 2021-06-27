FROM node:12-alpine

WORKDIR /srv
COPY package*.json /srv/
RUN npm ci
COPY tsconfig.json /srv/
COPY .env /srv/
COPY src /srv/src/
CMD [ "npm", "run", "dev"]
