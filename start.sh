#!/usr/bin/env sh

if [ "$WORKER_MODE" == "true" ]; then
    python3 ./jobs/main.py
else 
    npm start
fi