#!/bin/bash

TARGET_DIR=$(basename $(pwd))

cd $TARGET_DIR
zip ../${TARGET_DIR}.zip *
