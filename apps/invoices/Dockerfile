FROM node:lts as development
#Handle prisma openssl issues
RUN apt-get -qy update && apt-get -qy install openssl
# Create app directory, this is in our container/in our image
WORKDIR /app
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package.json yarn.lock ./
COPY prisma ./prisma/

RUN yarn install

# Bundle app source
COPY . .

RUN yarn run build