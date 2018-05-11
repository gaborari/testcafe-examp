#!/bin/sh
XVFB_SCREEN_WIDTH=${SCREEN_WIDTH-1280}
XVFB_SCREEN_HEIGHT=${SCREEN_HEIGHT-720}

cd $HOME

yarn install
yarn check

dbus-daemon --session --fork
Xvfb :1 -screen 0 "${XVFB_SCREEN_WIDTH}x${XVFB_SCREEN_HEIGHT}x24" >/dev/null 2>&1 &
export DISPLAY=:1.0
fluxbox >/dev/null 2>&1 &

node_modules/.bin/testcafe --ports 1337,1338 "$@"
export RESULT=$?

rm -rf .config .local .pki .dbus .gconf .mozilla .yarn .fluxbox
chmod -Rf 777 $HOME

exit $RESULT