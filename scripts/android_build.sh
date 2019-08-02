#!/bin/bash
#
# Android 打包
#

WORK_PATH=$(cd "$(dirname "$0")"; pwd)
PROJECT_PATH=$(cd "$WORK_PATH"; cd .. ; pwd)
BUILD_DATE=`date +%Y%m%d`
#PACKAGE_PATH=$PWD/android/app/build/outputs/apk
PACKAGE_PATH=$PROJECT_PATH/android/app/build/outputs/apk/release
BUILD_VERSION=$1
BUILD_DATE_INDEX=$2
BUILD_RELEASE=$3

if test "$#" -ne 3
then
   echo '[version] [index] [test|release]'
   exit 1;
fi

echo "cd $PROJECT_PATH/android && ./gradlew assembleRelease"
cd $PROJECT_PATH/android && ./gradlew assembleRelease
# cd $PROJECT_PATH/android && ./gradlew bundleRelease

cd ..

cp $PACKAGE_PATH/app-release.apk $PACKAGE_PATH/app-$BUILD_VERSION-$BUILD_DATE-$BUILD_DATE_INDEX-$BUILD_RELEASE.apk
