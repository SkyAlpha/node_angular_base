#!/bin/bash
npm install -g nodemon
cd /usr/src/app/server && npm install


nodemon /usr/src/app/server/index.js
