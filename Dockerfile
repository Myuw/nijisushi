FROM monkeythedev/svelte-material-ui-website

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

ENV HOST=0.0.0.0

CMD [ "npm", "run", "dev", "--host", "0.0.0.0" ]