# play.wizzard.ly

[![Build Status](https://semaphoreci.com/api/v1/wizzardly/play-wizzard-ly/branches/actors/badge.svg)](https://semaphoreci.com/wizzardly/play-wizzard-ly)
[![Maintainability](https://api.codeclimate.com/v1/badges/39f3f39d2e766182ec3a/maintainability)](https://codeclimate.com/github/wizzardly/play.wizzard.ly/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/39f3f39d2e766182ec3a/test_coverage)](https://codeclimate.com/github/wizzardly/play.wizzard.ly/test_coverage)

## Installation

```bash
yarn install
```

## Building

```bash
yarn build
```

## Running

```bash
yarn start
```

## Testing

```bash
yarn lint
yarn test
yarn ci # code coverage + code climate reporting
```

## Setting up git hooks

Some convenience hooks have been placed in the `.githooks/` directory.

To use one, simply:

```shell
cd .git/hooks
ln -s ../../.githooks/pre-push .
```

- `pre-push`: Checks for pushes to the master branch and prompts you before allowing the push
