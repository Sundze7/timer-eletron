import { useState, useEffect } from 'react'
import InputField from './InputField'
import alarm from '../assets/sounds/alarm.mp3'

// eslint-disable-next-line react/prop-types
export default function Timer({ isOverlay }) {
  const [isEditing, setIsEditing] = useState(true)
  const [minutes, setMinutes] = useState(1)
  const [seconds, setSeconds] = useState(0)
  const [hours, setHours] = useState(0)
  const [isActive, setIsActive] = useState(false)

  const audio = new Audio(alarm)

  useEffect(() => {
    let intervalId
    if (isActive) {
      intervalId = setInterval(() => {
        if (seconds > 0) {
          setSeconds((seconds) => seconds - 1)
        } else {
          if (minutes === 0 && hours === 0) {
            //audio
            audio.play()
            clearInterval(intervalId)
            setIsActive(false)
          } else {
            if (minutes === 0) {
              setHours((hours) => hours - 1)
              setMinutes(59)
            } else {
              setMinutes((minutes) => minutes - 1)
            }
            setSeconds(59)
          }
        }
      }, 1000)
    } else {
      clearInterval(intervalId)
    }
    return () => clearInterval(intervalId) // prevent memory management issues
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isActive, hours, minutes, seconds])

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
              className="bg-lime-400 text-amber-900 px-16 mt-3 rounded-lg text-2xl items-center"
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
          <div id="timer-buttton" className={!isOverlay ? '' : 'hidden'}>
            {isActive ? (
              <>
                <div className="flex justify-between items-center mx-5 text-4xl">
                  <button
                    onClick={() => setIsActive(false)}
                    className="text-slate-200 text-2xl font-bold"
                  >
                    ||
                  </button>
                  <button
                    onClick={() => {
                      setIsActive(false)
                      setHours(0)
                      setMinutes(0)
                      setSeconds(0)
                    }}
                    className="text-red-600"
                  >
                    &#9632;
                  </button>
                </div>
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
