# Docker Setup for Hooman Amini Blog

This document explains how to run the blog application using Docker and Docker Compose.

## Prerequisites

- Docker (version 20.10 or higher)
- Docker Compose (version 2.0 or higher)

## Quick Start

### Production Environment

```bash
# Build and start all services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop all services
docker-compose down
```

### Development Environment

```bash
# Start development environment with hot reload
docker-compose -f docker-compose.dev.yml up -d

# View development logs
docker-compose -f docker-compose.dev.yml logs -f app

# Stop development environment
docker-compose -f docker-compose.dev.yml down
```

## Services

### Production (`docker-compose.yml`)

- **app**: Next.js application (port 4000)
- **nginx**: Reverse proxy and load balancer (ports 80, 443)
- **redis**: Caching service (port 6379)

### Development (`docker-compose.dev.yml`)

- **app**: Next.js development server with hot reload (port 4000)
- **redis**: Development Redis instance (port 6379)

## Configuration

### Environment Variables

Create a `.env` file in the project root:

```env
# Application
NODE_ENV=production
PORT=3000

# Redis
REDIS_URL=redis://redis:6379

# Database (if using)
DATABASE_URL=postgresql://blog_user:blog_password@postgres:5432/blog
```

### Nginx Configuration

The `nginx.conf` file includes:

- Gzip compression
- Static file caching
- Rate limiting for API endpoints
- Security headers
- WebSocket support for Next.js hot reload

## Useful Commands

### Container Management

```bash
# Build specific service
docker-compose build app

# Rebuild and restart service
docker-compose up -d --build app

# Execute command in running container
docker-compose exec app bash

# View container logs
docker-compose logs -f app

# Scale services
docker-compose up -d --scale app=3
```

### Database Operations

```bash
# Access Redis CLI
docker-compose exec redis redis-cli

# Backup Redis data
docker-compose exec redis redis-cli --rdb /data/dump.rdb
```

### Health Checks

```bash
# Check application health
curl http://localhost:4000/health

# Check all services status
docker-compose ps
```

## Development Workflow

1. **Start development environment**:

   ```bash
   docker-compose -f docker-compose.dev.yml up -d
   ```

2. **Make code changes** - The application will automatically reload

3. **View logs**:

   ```bash
   docker-compose -f docker-compose.dev.yml logs -f app
   ```

4. **Stop development environment**:
   ```bash
   docker-compose -f docker-compose.dev.yml down
   ```

## Production Deployment

1. **Build production image**:

   ```bash
   docker-compose build
   ```

2. **Start production services**:

   ```bash
   docker-compose up -d
   ```

3. **Verify deployment**:
   ```bash
   curl http://localhost:4000
   ```

## Troubleshooting

### Common Issues

1. **Port conflicts**: Ensure ports 4000, 80, 443, and 6379 are available
2. **Permission issues**: Run with `sudo` if needed
3. **Memory issues**: Increase Docker memory allocation

### Debug Commands

```bash
# Check container status
docker-compose ps

# View detailed logs
docker-compose logs --tail=100 app

# Access container shell
docker-compose exec app sh

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

## SSL/HTTPS Setup

To enable HTTPS:

1. Place SSL certificates in `./ssl/` directory
2. Update `nginx.conf` to include SSL configuration
3. Uncomment SSL-related lines in the nginx service

## Monitoring

The setup includes health checks and monitoring capabilities:

- Application health endpoint: `/health`
- Redis monitoring via `redis-cli`
- Container health status via `docker-compose ps`

## Performance Optimization

- Static files are cached for 1 year
- Gzip compression is enabled
- Rate limiting prevents abuse
- Redis caching for improved performance
