FROM node:20-alpine
WORKDIR /app
COPY package.json .
ARG NODE_ENV
RUN npm install
COPY . ./
ENV PORT 5555
EXPOSE $PORT
CMD ["node", "index.js"]