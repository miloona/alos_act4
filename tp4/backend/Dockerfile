FROM node:latest
WORKDIR /app
ENV CHOKIDAR_USEPOLLING=true
COPY . .
RUN npm install
RUN npm run build
EXPOSE 8000
ENTRYPOINT ["npx","nodemon", "./build/index.js"]