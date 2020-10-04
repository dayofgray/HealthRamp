import React, {useState} from 'react'

export function Checkbox({status, id}) {
  const [checked, setChecked] = useState(status)

  function updateCheckbox() {
    const url = `http://localhost:3001/api/v1/shoppinglistitems/` + id
    const body = {
      purchased: !checked
    }
    
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(body),
      credentials: "include"
    })
    .then(setChecked(!checked))
    .catch(alert)
  }
  return (
    <input type="checkbox" checked={checked} onChange={updateCheckbox}/>
  )
}

