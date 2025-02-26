import './assets/main.css'
import Timer from './components/Timer'
import TopBar from './components/TopBar'
import { useState } from 'react'
function App() {
  const [isOverlay, setIsOverlay] = useState(false)
  return (
    <>
      <TopBar />
      <div className="bg-black opacity-40 text-white">
        <Timer />
      </div>
    </>
  )
}

export default App
