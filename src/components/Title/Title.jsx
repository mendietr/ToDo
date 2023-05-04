import React, { useState } from 'react'


export const Title = (props) => {
    const [input, setInput] = useState('');
    const [user, setUser] = useState('')
    
    
    const handleChange = event => {
        setInput(event.target.value)
    }
    const handleClick = event => {
        setUser(input)
    }

  return (
    <div>
        <h1>Lista de Tareas de {user}</h1>
        {
            !user &&
        <div>
            <input
            name='input'
            type='text'
            placeholder='Ingrese su Nombre'
            onChange={handleChange}
            />
        <p>{input}</p>
        <button onClick={handleClick}>Ingresar Nombre</button>
        </div>
        }
    </div>
  )
}

export default Title;