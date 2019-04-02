# Ata

[![996ICU Licence](<https://img.shields.io/badge/license-NPL%20(The%20996%20Prohibited%20License)-blue.svg>)](https://github.com/996icu/996.ICU/blob/master/LICENSE)

- axios + random useragent + encode url + ...
- fetch style requests with `$` prefixed methods, like [axios-module](https://github.com/nuxt-community/axios-module)
- support string proxy config like `127.0.0.1:9000`

## Install

```sh
yarn add ata
# or
npm install ata
```

## Usage

```js
const Ata = require('ata')

const url = 'http://httpbin.org/get?show_env=1'

async function go() {
  // const { data } = await Ata.get(url)
  const data = await Ata.$get(url)

  console.log(data)
}

go()
```

## License

[996ICU](./LICENSE)
