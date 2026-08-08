#!/bin/bash
# VPS Startup script for Kids School Next.js App
echo "Starting Kids School Next.js App..."
export PORT=3000
export NODE_ENV=production
export DATABASE_URL="file:./dev.db"

# Install PM2 if not installed: npm install -g pm2
if command -v pm2 &> /dev/null; then
    pm2 restart ecosystem.config.js || pm2 start ecosystem.config.js
    pm2 save
    echo "App successfully started with PM2 on port 3000!"
else
    echo "PM2 not found. Running with Node directly..."
    node server.js
fi
