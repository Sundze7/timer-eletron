import './assets/main.css'
import Timer from './components/Timer'
import TopBar from './components/TopBar'
import { useState } from 'react'
function App() {
  const [isOverlay, setIsOverlay] = useState(false)
  return (
    <>
      <TopBar />
      <div className="bg-black opacity-70 text-white p-3 rounded-b-xl">
        <Timer />
      </div>
    </>
  )
}

export default App
