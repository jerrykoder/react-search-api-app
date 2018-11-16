import React from 'react'

const TodosItem = props => {

    const {handleRemove, handleUpdate, handleEdit, name, edit} = props
  
    return (
        <li>
            <h5>{name}</h5>
            <button onClick={handleRemove}>
                Delete
            </button>

            { edit ? 
            (
                <form onSubmit={handleUpdate}>
                    <input
                        name="name"
                        placeholder="Update Todo"
                        type="text"
                    />
                    <button type="submit">
                        Update
                    </button>
                </form>
            ) : (
                    <button onClick={handleEdit}>
                        Edit
                      </button>
            )}
        </li>
    );
  
}

export default TodosItem