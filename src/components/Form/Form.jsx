import React from 'react';
import { addTodo } from '../../redux/actions';
import { connect } from 'react-redux';

class Form extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        text: "",
        complete: false
    }
}

handleChange = (event) => {
    this.setState({
        ...this.state,
        text: event.target.value
    })
}
id = 0;
handleSubmit = event => {
    event.preventDefault();
    this.props.addTodo({ ...this.state, id: this.id++});
    this.setState({
    text: "",
    complete: false
})
}

render() {
    return(
        <div>
            <h1>Nueva tarea</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Nueva tarea:</label>
                <input
                    type='text'
                    value={this.state.text}
                    placeholder='Nueva tarea...'
                    onChange={this.handleChange}
                    />
                    <button type='submit'>Crear tarea</button>
                </form>
            

        </div>
    )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addTodo: todo => {dispatch(addTodo(todo))}
    }
}

export default connect(null, mapDispatchToProps)(Form);