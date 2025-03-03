import './assets/main.css'
import Timer from './components/Timer'
import TopBar from './components/TopBar'
import { useState, useEffect } from 'react'
function App() {
  const [isOverlay, setIsOverlay] = useState(false)

  useEffect(() => {
    window.electron.ipcRenderer.on('overlay-mode', () => {
      setIsOverlay((prevState) => !prevState)
    })
    // clean up fxn
    return () => {
      window.electron.ipcRenderer.removeAllListeners('overlay-mode')
    }
  }, [])
  return (
    <>
      <div className={!isOverlay ? 'visible' : 'invisible'}>
        <TopBar />
      </div>
      <div
        className={
          !isOverlay
            ? 'bg-black opacity-70 text-white p-3 rounded-b-xl'
            : 'bg-black opacity-70 text-white p-3 rounded-xl'
        }
      >
        <Timer isOverlay={isOverlay} />
      </div>
    </>
  )
}

export default App
