import React from 'react'

const Card = ({nombre, apellido}) => {
  return (
    <div>
        <h3>Nombre: {nombre}</h3>
        <h4>Apellido: {apellido}</h4>
    </div>
    
  )
}

export default Card
