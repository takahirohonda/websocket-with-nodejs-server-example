import { WebSocketServer } from 'ws'

const wss = new WebSocketServer({ port: 443 })

wss.on('connection', function connection(ws) {
  ws.on('error', console.error)

  ws.on('message', function message(data) {
    console.log('received: %s', data)
    ws.send(`We received your message: ${data}`)
  })

  ws.on('close', function message(data) {
    console.log('WebSocket closed: ', data)
  })
})
