# FROM node:12 AS build

# WORKDIR /app

# COPY package*.json ./
# RUN npm install
# COPY . ./
# EXPOSE 5000
# CMD [ "npm", "run", "dev" ]

# FROM nginx:1.19-alpine
# COPY --from=build /app/index.html /usr/share/nginx/html/index.html

FROM node:14-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

ENV HOST=0.0.0.0

CMD [ "npm", "start", "--host" ]