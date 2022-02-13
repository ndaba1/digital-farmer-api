#!/usr/bin/env sh

if ["$WORKER_MODE" == "true"]; then
    python ./jobs/main.py
else 
    npm start
fi