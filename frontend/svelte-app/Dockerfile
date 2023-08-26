# Use an official Node runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Install app dependencies
COPY package.json /app/
RUN npm install

# Copy the current directory contents into the container at /app
COPY . /app/

CMD ["npm", "run", "dev"]