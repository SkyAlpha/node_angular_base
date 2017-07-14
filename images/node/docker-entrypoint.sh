#!/bin/bash
npm install -g nodemon
npm install -g grunt-cli

#NPM install on both folders
cd /usr/src/app/server && npm install
cd /usr/src/app/web && npm install grunt --save-dev
cd /usr/src/app/web && npm install grunt-contrib-uglify --save-dev
cd /usr/src/app/web && npm install

cd /usr/src/app/web && grunt uglify:taskOne

nodemon /usr/src/app/server/index.js
