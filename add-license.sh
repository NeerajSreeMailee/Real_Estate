#!/bin/bash
if ! grep -q '"license"' package.json; then
  echo 'Adding license field to package.json...'
  jq '. + {license: "MIT"}' package.json > temp.json && mv temp.json package.json
else
  echo 'License field already exists in package.json.'
fi
