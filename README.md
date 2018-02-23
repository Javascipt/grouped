# Grouped [![Build Status](https://travis-ci.org/Javascipt/grouped.svg?branch=master)](https://travis-ci.org/Javascipt/grouped)

This package is inspired by [`word-list`](https://github.com/sindresorhus/word-list), all credits should go to the author [Sindre Sorhus](https://github.com/sindresorhus). Some credits should also go to the author [Pass-phrase](https://github.com/aaronbassett/Pass-phrase) for the lists used in this package.

I wanted to create a package to be able to get word list by type which can be very helpful in certain senarios like the usage in this package : [`usernames`](https://github.com/javascipt/usernames)


## Install

```
$ npm install --save grouped
```


## Usage

```js
const fs = require('fs');

// Returns the path to the word list which is separated by `\n`
const listsPaths = require('grouped');

const verbsArray    = fs.readFileSync(listsPaths.verbs, 'utf8').split('\n');
const adverbsArray  = fs.readFileSync(listsPaths.adverbs, 'utf8').split('\n');
const adjArray      = fs.readFileSync(listsPaths.adjectives, 'utf8').split('\n');
const nounsArray    = fs.readFileSync(listsPaths.nouns, 'utf8').split('\n');
```


## License

MIT
