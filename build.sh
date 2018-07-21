#!/bin/bash

pushd .
cd $TRAVIS_BUILD_DIR/Shopkick
ng build
popd

mvn package
