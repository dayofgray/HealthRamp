import React, {useState} from 'react'

export function Checkbox({status}) {
  const [checked, setChecked] = useState(status)
  return (
    <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)}/>
  )
}

