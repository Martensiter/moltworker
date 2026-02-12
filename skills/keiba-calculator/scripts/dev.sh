#!/bin/bash
# Start the keiba-calculator dev server
set -e
cd /root/clawd/keiba-calculator
npm install --prefer-offline 2>/dev/null || npm install
npm run dev -- --port 3000
