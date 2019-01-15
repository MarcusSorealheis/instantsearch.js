#! /usr/bin/env bash

set -e # exit when error

# Package the examples in the website
for example in website/examples/*; do
  if [ -d "$example" ]; then
    name=$(basename "$example")
    (cd "$example" && zip -r "../$name.zip" ./*)
  fi
done

# Build storybook
yarn run docs:storybook:build

# Move storybook to the website root
mv storybook/dist website/stories