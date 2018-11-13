import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteTodo, addTodo } from '../actions/todoActions';

class Todo extends Component {
    state = {
        content: ''
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let newTodo = {
            content: this.state.content,
            id: Math.random()
        }
        this.props.addTodo(newTodo)
    }

    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    render() {
        const todoList = this.props.todos.length > 0 ?
            (
                <div>
                    {this.props.todos.map(todo => {
                        return (
                            <div className="collection-item" key={todo.id}>
                                <p>
                                    {todo.content}
                                    <button onClick={() => this.props.deleteTodo(todo.id)} className="waves-effect btn-small red darken-4">
                                        Sil
                                    </button>
                                </p>
                            </div>
                        )
                    })}
                </div>
            ) :
            (
                <div>you have no todo</div>
            )

        return (
            <div className="container">
                <h4>Todos</h4>
                <div className="row">
                    <form onSubmit={this.handleSubmit} className="col s6 center">
                        <input onChange={this.handleChange} placeholder="todo giriniz" className="validate" value={this.state.content}/>
                    </form>
                </div>

                {todoList}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteTodo: (id) => {
            dispatch(deleteTodo(id))
        },
        addTodo: (todo) => {
            dispatch(addTodo(todo))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
