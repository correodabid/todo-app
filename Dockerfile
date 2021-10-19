# Select environment
FROM node:16

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./
RUN npm cache clean --force

RUN npm install

# Bundle app source
COPY . /app

EXPOSE 7575

RUN npm run build

ENV NODE_ENV=production

CMD ["npm","run","deploy"]