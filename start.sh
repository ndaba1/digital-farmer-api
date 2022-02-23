#!/usr/bin/env sh

if [ "$WORKER_MODE" == "true" ]; then
    ./jobs/venv/Scripts/python ./jobs/main.py
else 
    npm start
fi