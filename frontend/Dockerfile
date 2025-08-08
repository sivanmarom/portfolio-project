# frontend/Dockerfile

# build
FROM node:18 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
# Build args + הפיכה ל-ENV כדי ש-React יקרא בזמן build
ARG REACT_APP_EMAILJS_SERVICE_ID
ARG REACT_APP_EMAILJS_TEMPLATE_ID
ARG REACT_APP_EMAILJS_PUBLIC_KEY
ENV REACT_APP_EMAILJS_SERVICE_ID=$REACT_APP_EMAILJS_SERVICE_ID
ENV REACT_APP_EMAILJS_TEMPLATE_ID=$REACT_APP_EMAILJS_TEMPLATE_ID
ENV REACT_APP_EMAILJS_PUBLIC_KEY=$REACT_APP_EMAILJS_PUBLIC_KEY


COPY . .
COPY .env .env
RUN npm run build

# serve
FROM node:18
WORKDIR /app
RUN npm install -g serve
COPY --from=build /app/build ./build

# חשוב: האזנה ל-0.0.0.0
EXPOSE 3000
CMD ["serve", "-s", "build", "-l", "tcp://0.0.0.0:3000"]