const express = require('express')
const { Nuxt, Builder } = require('nuxt')
const app = express()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000
require('dotenv');

app.set('port', port)
// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(process.env.ACCESS_TOKEN)

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  // Give nuxt middleware to express
  function handleRequest(req, res) {
    res.set('Cache-Control', 'public, max-age=150, s-maxage=150');
    return new Promise((resolve, reject) => {
      nuxt.render(req, res, promise => {
        promise.then(resolve).catch(reject)
      })
    });
  }
  
  app.use(handleRequest);

  // app.get('/api', (req, res => {
  //   res.json({message: 'Hello, Nurse!'});
  // }));

  // Listen the server
  app.listen(port, host)
  console.log('Server listening on http://' + host + ':' + port) // eslint-disable-line no-console
}
start()
