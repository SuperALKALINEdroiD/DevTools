FROM node:20-alpine AS build-stage
WORKDIR /app

COPY . .

RUN npm install

RUN npm install -g serve

RUN npm run build

RUN ls -l

# FROM node:20-alpine AS run-stage

# WORKDIR /app

# COPY --from=build-stage /app/dist ./dist

EXPOSE 8080

CMD ["serve", "-s", "dist", "-l", "8080"]

