FROM node:alpine as build

COPY package*.json ./
RUN npm install

ARG VITE_API_URL
ARG VITE_API_WS_URL

ENV VITE_API_URL=$VITE_API_URL
ENV VITE_API_WS_URL=$VITE_API_WS_URL

COPY . .
RUN npm run build

FROM nginx:stable-alpine

COPY --from=build /dist /usr/share/nginx/html
COPY --from=build nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 3002
CMD [ "nginx", "-g", "daemon off;" ]
