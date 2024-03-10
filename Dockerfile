# Use Node.js as the base image
FROM node:18-alpine as build

# Set the working directory
WORKDIR /app/src

# Copy the package.json and package-lock.json files
COPY demo_springboot/package*.json ./

# Install the dependencies
RUN npm ci

# Copy the rest of the app files
COPY demo_springboot/ .

# Build the app
RUN npm run build:prod

# Use nginx as the web server
FROM nginx:1.15.8-alpine

# Copy the built app files to the nginx html folder
COPY --from=build /app/src/dist/springmongo-frontend/browser /usr/share/nginx/html