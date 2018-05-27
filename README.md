# Play Wizzardly

[![Build Status](https://semaphoreci.com/api/v1/wizzardly/play-wizzardly/branches/master/badge.svg)](https://semaphoreci.com/wizzardly/play-wizzardly)
[![Maintainability](https://api.codeclimate.com/v1/badges/e353df2e8988cd16025b/maintainability)](https://codeclimate.com/github/wizzardly/play-wizzardly/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/e353df2e8988cd16025b/test_coverage)](https://codeclimate.com/github/wizzardly/play-wizzardly/test_coverage)

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
