#!/usr/bin/env bash

PACKAGE_FILE_NAME='release.zip'

PATH_TO_ICONS_SOURCE='../icons'
PATH_TO_ICONS_TARGET='./icons'

PATH_TO_SCRIPT_SOURCE='../user-script/tweet-pure-links.user.js'
PATH_TO_SCRIPT_TARGET='./main.js'

SKIP_FROM_PACKAGE_ONE='*.DS_Store'
SKIP_FROM_PACKAGE_TWO='*LICENSE'

echo "Building browser extension..."

cp -r $PATH_TO_ICONS_SOURCE $PATH_TO_ICONS_TARGET
cp $PATH_TO_SCRIPT_SOURCE $PATH_TO_SCRIPT_TARGET

zip -r $PACKAGE_FILE_NAME \
  $PATH_TO_ICONS_TARGET \
  $PATH_TO_SCRIPT_TARGET \
  -x "$SKIP_FROM_PACKAGE_ONE" \
  -x "$SKIP_FROM_PACKAGE_TWO"

echo "Successfully build!"

echo "Cleaning temporary copied files..."

rm -r $PATH_TO_ICONS_TARGET
rm $PATH_TO_SCRIPT_TARGET

echo "Successfully clean!"

echo "Submit $PACKAGE_FILE_NAME into the extension marketplace of each browser"
