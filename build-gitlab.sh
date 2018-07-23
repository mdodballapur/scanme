#!/bin/bash

pushd .
cd $CI_PROJECT_DIR/Shopkick
npm install
ng build
popd

mvn package
