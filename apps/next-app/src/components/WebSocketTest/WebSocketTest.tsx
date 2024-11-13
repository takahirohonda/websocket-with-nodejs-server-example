'use client'

import { useEffect, useState } from 'react'
import clsx from 'clsx'
import { Button, Typography } from '@mui/material'

export const WebSocketTest = () => {
  const [ws, setWs] = useState<WebSocket | null>(null)
  const [message, setMessage] = useState<string>('')
  useEffect(() => {
    const webSocket = new WebSocket('ws://localhost:443/')
    setWs(webSocket)
    webSocket.onmessage = (event) => {
      setMessage(event.data)
    }
  }, [])

  const sendMessage = () => {
    if (!ws) {
      console.error('WebSocket is not connected')
      return
    }
    ws.send('Hello, WebSocket!')
  }
  return (
    <div className={clsx(`flex flex-col gap-[16px]`)}>
      <Button variant="contained" color="success" onClick={sendMessage}>
        Send Message
      </Button>
      <Typography variant="body1">{message}</Typography>
    </div>
  )
}
