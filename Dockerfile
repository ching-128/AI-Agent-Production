# Use official Node.js runtime as base image
FROM node:24-alpine

# Set working directory in container
WORKDIR /app

# Copy package.json and package-lock.json (if exists)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Create log directory
RUN mkdir -p /app/log

# Expose the port (default is 8000)
EXPOSE 8000

# Start the application
CMD ["npm", "start"]
