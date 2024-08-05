// Primer main creado y prueba echa con un button

import React from 'react'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root'))

// Mi primer componente 
const Button = ({text}) =>{
  return (
    <button> {text} </button>
  )
}

// Renderizo el componente Button
 root.render(
  <React.Fragment>
    <Button text="Boton 1" />
    <Button text="Boton 2" />
    <Button text="Boton 3" />
  </React.Fragment>
)
