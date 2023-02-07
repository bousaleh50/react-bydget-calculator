import React from 'react'
import { useEffect } from 'react'

export default function Alert(props) {

  //console.log("hello from alert component")

  return (
    <div className={`alert ${props.alert.status}`} style={{"display":`${props.alert.display}`}}>
      <p>{props.alert.alertMessage}</p>
    </div>
  )
}
