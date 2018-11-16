import React, { Component } from 'react'
import TodosItem from './TodosItem'

class Todo extends Component {
  render() {

    const {handleRemove, handleUpdate, handleEdit, todos} = this.props

    //Map through the todos
    const list = todos.map((todo, index) => {
       return <TodosItem 
                key={index}
                name={todo.name}
                edit={todo.edit}
                handleRemove={() => { handleRemove(todo.id) }}
                handleUpdate={(e) => { handleUpdate(e, index, todo.id) }}
                handleEdit={() => { handleEdit(index) }} />
       
        })   

    return (
        <div>
            { todos.length === 0 ? <p className="alert alert-danger" role="alert">No Todos</p> : <ul className="list-group">{list}</ul>}
        </div>
    )
  }
}

export default Todo