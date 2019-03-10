# Ata

> axios + random useragent + encode url + ...
> fetch style requests with `$` prefixed methods, like [axios-module](https://github.com/nuxt-community/axios-module)
> support proxy string config like `127.0.0.1:9000`

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
