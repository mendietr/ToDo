import React from 'react';
import Title from '../Title/Title'
import { NavLink } from 'react-router-dom'

const Navbar = function(props) {

    return(
        <div style={{background: 'Lightgrey', heigh: '200px'}}>
            <Title />
            <NavLink to='/'>
                <button>Tareas</button>
            </NavLink>
        <NavLink to='/form'>
            <button>Nueva Tarea</button>
        </NavLink>
              
        </div>
    )
}

export default Navbar;