#!/bin/bash
# Build the keiba-calculator project
set -e
cd /root/clawd/keiba-calculator
npm install --prefer-offline 2>/dev/null || npm install
npm run build
echo "Build complete!"
