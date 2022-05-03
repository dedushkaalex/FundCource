import React, {useState} from 'react'

const InputControll = () => {
    const [value, setValue] = useState("Текст в инпуте")
  return (
    <div>
    <input type="text" value={value} onChange = {event => setValue(event.target.value)} />
    <h1>{value}</h1>
    </div>
  )
}

export default InputControll