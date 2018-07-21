#!/bin/bash

pushd .
cd $TRAVIS_BUILD_DIR/Shopkick
npm install
ng build
popd

mvn package
