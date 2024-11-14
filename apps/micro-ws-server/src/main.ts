import uWs from 'uWebSockets.js'

const app = uWs.App()

app
  .get('/*', (res, req) => {
    res.end('Hello, uWebSockets.js!')
  })
  .ws('/*', {
    open: (ws) => {
      console.log('A WebSocket connected!')
    },
    message: (ws, message, isBinary) => {
      let messageStr

      // Check if the message is an ArrayBuffer and convert it to a string
      if (message instanceof ArrayBuffer) {
        const uint8Array = new Uint8Array(message)
        messageStr = new TextDecoder().decode(uint8Array)
      } else {
        messageStr = message // If it's already a string, use it as is
      }
      console.log('Received a message:', messageStr)
      ws.send(message, isBinary)
    },
    close: async (ws, code, message) => {
      console.log('WebSocket closed:', code, message)
      // const myPromise = await new Promise((resolve) =>
      //   setTimeout(resolve, 1000)
      // )
    },
  })
  .listen(443, (token) => {
    if (token) {
      console.log('Listening on port 3000')
    } else {
      console.error('Failed to listen to port 3000')
    }
  })
