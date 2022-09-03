FROM node:18
WORKDIR /app
COPY . .
RUN npm i 
EXPOSE 3000
RUN npm run build
CMD [ "node", "dist/main.js" ]