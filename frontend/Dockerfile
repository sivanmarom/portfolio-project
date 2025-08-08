# frontend/Dockerfile

# build
FROM node:18 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# serve
FROM node:18
WORKDIR /app
RUN npm install -g serve
COPY --from=build /app/build ./build

# חשוב: האזנה ל-0.0.0.0
EXPOSE 3000
CMD ["serve", "-s", "build", "-l", "tcp://0.0.0.0:3000"]