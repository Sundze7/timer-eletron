export default function TopBar() {
  const handleClose = () => {
    window.electron.ipcRenderer.send('close window')
  }
  const handleMininize = () => {
    window.electron.ipcRenderer.send('minimize window')
  }
  return (
    <div>
      <div
        className="bg-amber-900 text-white py-4 rounded-lg"
        style={{ webkitAppRegion: 'drag' }}
      ></div>
      <div
        id="control-button"
        className="absolute top-0 right-0 space-x-3 mr-2 text-white font-semibold text-lg "
        style={{ WebkitAppRegion: 'no-drag' }}
      >
        <button id="mininize" onClick={handleMininize} className="px-2">
          _
        </button>
        <button id="close" onClick={handleClose} className="mr-2">
          x
        </button>
      </div>
    </div>
  )
}
