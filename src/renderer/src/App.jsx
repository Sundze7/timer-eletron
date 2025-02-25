import './assets/main.css'
import TopBar from './components/TopBar'
import { useState } from 'react'
function App() {
  const [isOverlay, setIsOverlay] = useState(false)
  return (
    <>
      <TopBar />
      <h1 className="text-2xl text-purple-500">Hello World</h1>
    </>
  )
}

export default App
