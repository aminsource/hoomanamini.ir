# Use the official Node.js Alpine image as a base (smaller size)
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Enable Corepack to use the correct Yarn version
RUN corepack enable

# Copy package.json and yarn.lock
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Reinstall dependencies after copying all files to ensure proper state
RUN yarn install --frozen-lockfile

# Build the Next.js application
RUN yarn build

# Expose the port the app runs on
EXPOSE 3000

# Start the Next.js application
CMD ["yarn", "serve"]


# docker build -t hoomanamini:latest .
# docker stop hoomanamini || true
# docker rm hoomanamini || true
# docker run -d -p 4000:3000 hoomanamini