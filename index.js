const axios = require('axios')
const randomMua = require('random-mua')
const encodeUrl = require('encodeurl')

const Ata = axios.create()

Ata.interceptors.request.use(
  function(config) {
    config.url = encodeUrl(config.url)

    if (!config.headers['User-Agent']) {
      config.headers['User-Agent'] = randomMua()
    }

    if (config.proxy && typeof config.proxy === 'string') {
      const [host, port] = config.proxy.split(':')
      config.proxy = {
        host,
        port
      }
    }
    return config
  },
  function(error) {
    return Promise.reject(error)
  }
)

/**
 * Fork: [axios-module](https://github.com/nuxt-community/axios-module)
 */
const shortcut = Object.create(null)
const requestMethods = [
  'request',
  'delete',
  'get',
  'head',
  'options',
  'post',
  'put',
  'patch'
]

for (const method of requestMethods) {
  shortcut['$' + method] = function() {
    return this[method].apply(this, arguments).then(res => res && res.data)
  }
}

for (const key in shortcut) {
  Ata[key] = shortcut[key].bind(Ata)
}

module.exports = Ata
