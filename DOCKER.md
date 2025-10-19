# Docker Setup for Hooman Amini Blog

This document explains how to run the blog application using Docker and Docker Compose.

## Prerequisites

- Docker (version 20.10 or higher)
- Docker Compose (version 2.0 or higher)

## Quick Start

### Production Environment

```bash
# Build and start the blog service
docker-compose up -d

# View logs
docker-compose logs -f

# Stop the service
docker-compose down
```

## Services

### Production (`docker-compose.yml`)

- **blog**: Next.js blog application (port 3000)

## Configuration

### Environment Variables

The application uses the following environment variables:

- `NODE_ENV=production`

## Useful Commands

### Container Management

```bash
# Build the blog service
docker-compose build blog

# Rebuild and restart service
docker-compose up -d --build blog

# Execute command in running container
docker-compose exec blog sh

# View container logs
docker-compose logs -f blog
```

### Health Checks

```bash
# Check application status
curl http://localhost:3000

# Check service status
docker-compose ps
```

## Production Deployment

1. **Build production image**:

   ```bash
   docker-compose build
   ```

2. **Start production service**:

   ```bash
   docker-compose up -d
   ```

3. **Verify deployment**:
   ```bash
   curl http://localhost:3000
   ```

## Troubleshooting

### Common Issues

1. **Port conflicts**: Ensure port 3000 is available
2. **Permission issues**: Run with `sudo` if needed
3. **Memory issues**: Increase Docker memory allocation

### Debug Commands

```bash
# Check container status
docker-compose ps

# View detailed logs
docker-compose logs --tail=100 blog

# Access container shell
docker-compose exec blog sh

# Check container resources
docker stats
```

### Cleanup

```bash
# Remove all containers and networks
docker-compose down --volumes --remove-orphans

# Remove all images
docker-compose down --rmi all

# Clean up unused resources
docker system prune -a
```

## Build and Run Commands

For manual Docker commands:

```bash
# Build the image
docker build -t hoomanamini:latest .

# Stop and remove existing container
docker stop hoomanamini || true
docker rm hoomanamini || true

# Run the container
docker run -d -p 3000:3000 hoomanamini
```
