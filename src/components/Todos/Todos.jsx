import React from "react";
import { useSelector } from "react-redux";
import Todo from '../Todo/Todo';

const Todos = function(props) {
    const todos = useSelector(state => state.todos);
    return (
        <div>
            <h1>Tareas</h1>
            {
                todos.map(todo => (
                    <Todo
                    key={todo.id}
                    id={todo.id}
                    text={todo.text}
                    complete={todo.complete}
                    />
                ))
            }
        </div>
    )
}
export default Todos;