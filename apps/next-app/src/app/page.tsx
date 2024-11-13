import { WebSocketTest } from '../components/WebSocketTest/WebSocketTest'

export default function Index() {
  return (
    <div className="bg-slate-900">
      <div className="container flex flex-col gap-[24px]">
        <h1>Web Socket Test</h1>
        <WebSocketTest />
      </div>
    </div>
  )
}
