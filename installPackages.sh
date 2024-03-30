#!/bin/bash

DOCKER_DIR="app"

read -p "Install with PNPM: " PACKAGE_NAME

docker-compose run "$DOCKER_DIR" pnpm install "$PACKAGE_NAME"