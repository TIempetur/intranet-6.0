# Use the official Node.js LTS (Long Term Support) Alpine image as a base
FROM node:lts-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port that the NestJS app will run on
EXPOSE 3000

# Define the command to run your NestJS app
CMD ["npm", "run", "dev"]

