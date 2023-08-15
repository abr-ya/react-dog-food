#!/usr/bin/env bash

SERVER_PORT=3034
EXIT_CODE=0


function killAppsOnPort {
    echo "[run cypress tests]: killing apps on port $SERVER_PORT"
    
    lsof -ti :$SERVER_PORT | xargs kill -9
}


killAppsOnPort


echo "[run cypress tests]: starting dev server"
yarn start -- --port=$SERVER_PORT &


sleep 30;


echo "[run cypress tests]: starting cypress tests"
APP_URL=http://localhost:$SERVER_PORT yarn run cy:run || EXIT_CODE=$?


killAppsOnPort

exit $EXIT_CODE