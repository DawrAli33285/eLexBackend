FROM node:14
WORKDIR /app
COPY package*.json ./
RUN npm install --force
COPY . .
EXPOSE 5000
CMD ["npm","run","server"]
