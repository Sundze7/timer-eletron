import { useState } from 'react'
import InputField from './InputField'

export default function Timer({ isOverlay }) {
  const [isEditing, setIsEditing] = useState(true)
  const [minutes, setMinutes] = useState(1)
  const [seconds, setSeconds] = useState(0)
  const [hours, setHours] = useState(0)
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
              className="bg-blue-700 text-stone-200 px-12 rounded-lg text-lg items-center"
            >
              &#10004;
            </button>
          </div>
        </div>
      ) : (
        // Timer
        <div className="flex justify-center">
          <h1 className=" text-6xl">{`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}</h1>
        </div>
      )}
    </div>
  )
}
