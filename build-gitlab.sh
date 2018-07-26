#!/bin/bash -xe


ng-build () {
    pushd .
    cd $CI_PROJECT_DIR/Shopkick
    npm install
    ng build
    popd
}

mvn-package() {
    mvn package    
}

