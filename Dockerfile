FROM node:16.17.1

WORKDIR /usr/src/app

RUN npm install --only=development

COPY . .

RUN npm run build

CMD ("node", "dist/main")