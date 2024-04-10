# Use specific Node.js version as base
FROM node:18.15.0

# Create app directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

# Expose port 5000
EXPOSE 5000

# Command to run the application
CMD [ "node", "index.js" ]