import React from "react";
import { useDispatch } from "react-redux";
import { completeTodo, deleteTodo }from '../../redux/actions';

const Todo = function(props) {
    const dispatch = useDispatch();

    const handleComplete = () => {
        dispatch(completeTodo(props.id))
    }
    const handleDelete = () => {
        dispatch(deleteTodo(props.id))
    }
    return (
        <div>
            <h2
                style={props.complete ?
                {color:'green'} :
                {color:'red'}
            }>Tarea {props.id} : {props.text}</h2>
            <button onClick={handleComplete}>Tarea completa</button>
            <button onClick={handleDelete}>Eliminar tarea</button>

        </div>
    )
}
export default Todo;