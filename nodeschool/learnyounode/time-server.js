const net = require("net")
const strftime = require('strftime')

let port = process.argv[2]

const server = net.createServer((c) => {
  console.log('client connected')
  c.on('end', () => {
    console.log('client disconnected')
  })
  c.end(strftime('%Y-%m-%d %H:%M') + '\n')
})

server.on('error', (err) => {
  throw err
})

server.listen(port, () => {
  //console.log('server bound')
})
