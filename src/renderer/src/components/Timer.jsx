import { useState } from 'react'
import InputField from './InputField'

export default function Timer({ isOverlay }) {
  const [isEditing, setIsEditing] = useState(true)
  const [minutes, setMinutes] = useState(1)
  const [seconds, setSeconds] = useState(0)
  const [hours, setHours] = useState(0)
  const [isActive, setIsActive] = useState(false)
  return (
    <div>
      {isEditing ? (
        //Time Setting
        <div className="flex justify-center flex-col items-center">
          <div>
            <InputField
              label={'Hours'}
              value={hours}
              onChange={(e) => setHours(parseInt(e.target.value))}
            />
            <InputField
              label={'Minutes'}
              value={minutes}
              onChange={(e) => setMinutes(parseInt(e.target.value))}
            />
            <InputField
              label={'Seconds'}
              value={seconds}
              onChange={(e) => setSeconds(parseInt(e.target.value))}
            />
            <button
              onClick={() => setIsEditing(false)}
              className="bg-lime-400 text-stone-200 px-12 rounded-lg text-lg items-center"
            >
              &#10004;
            </button>
          </div>
        </div>
      ) : (
        // Timer
        <div>
          <div className="flex justify-center">
            <h1 className="text-lime-400 text-6xl font-serif">{`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}</h1>
          </div>
          <div id="timer-buttton">
            {isActive ? (
              <>
                <button>Pause</button>
                <button>Stop</button>
              </>
            ) : (
              <>
                <div className="flex justify-between items-center mx-5 text-4xl">
                  <button onClick={() => setIsActive(true)} className="text-green-400">
                    &#9658;
                  </button>
                  <button onClick={() => setIsEditing(true)} className="text-orange-300">
                    &#9998;
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
