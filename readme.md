
> Generate brotli compressed files with Fly.

## Install

```
npm install --save-dev fly-brotli
```

## Usage

```js
exports.compress = function * (fly) {
  yield fly.source('src/*.html')
    .brotli()
    .target('dist');
}
```

## API

### .brotli(options)

This plugin offers no unique options.

However, it has a number of [default settings](config.js) that you may override.

Please see [brotli.js's Options](https://github.com/devongovett/brotli.js#brotlicompressbuffer-istext--false) for a full list of available options.

## License

MIT © [Chris Koster](https://koster.io)
