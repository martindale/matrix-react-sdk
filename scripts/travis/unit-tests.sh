#!/bin/bash
#
# script which is run by the travis build (after `yarn test`).
#
# clones riot-web develop and runs the tests against our version of react-sdk.

set -ev

scripts/travis/build.sh
CHROME_BIN='/usr/bin/google-chrome-stable' yarn test
