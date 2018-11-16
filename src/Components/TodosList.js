import React, { Component } from 'react'
import Todos from './Todos'

class TodosList extends Component {

	state = {
		todos: []
	}

	// Load data
	componentWillMount() {
		const url = `https://5be333fdd53daf0013250f39.mockapi.io/api/v1/todos/`

		fetch(url)
			.then(res => res.json())
			.then(todos => {
				this.setState({
					todos // You can use the same in the response ex: todos
				})
			})
			.catch(error => console.log(error))
	}

	// Handle add
	handleAdd = e => {
		e.preventDefault() // Prevent form from submitting

		// Simple validation
		if (this.refs.todo.value === '') {

			alert('Add Todo Task')

		} else {

			// API endpoint
			const url = `https://5be333fdd53daf0013250f39.mockapi.io/api/v1/todos/`

			// Input ref todo name
			const newTodo = { name: this.refs.todo.value }

			// Request method options
			const options = {
				method: 'post',
				body: JSON.stringify(newTodo),
				headers: new Headers({
					"Content-type": "application/json"
				})
			}

			// API call
			fetch(url, options)
				.then(res => res.json())
				.then(newTodo => {
					this.setState({
						todos: [...this.state.todos, newTodo] // Creating a copy of todos array using spread operator then adding new todo
					})
				})
				.catch(error => console.log(error))

			e.target.reset()
		}
		
	}

	// Handle remove
	handleRemove = (id) => {

		// Filter all todos except the one to be removed
		const removeTodo = this.state.todos.filter(todo => {
			return todo.id !== id;
		})

		// API endpoint
		const url = `https://5be333fdd53daf0013250f39.mockapi.io/api/v1/todos/${id}`

		// Request method options
		const options = {
			method: 'delete'
		}

		// API call
		fetch(url, options)
			.then(res => res.json())
			.then(todos => {
				// Update state with filter
				this.setState({
					todos: removeTodo
				})
			})
			.catch(error => console.log(error));
	}


	// Handle update
	handleUpdate = (e, index, id) => {
		e.preventDefault() // Prevent form from submitting
		console.log(e.target.name.value)

		// Input ref todo object
		const updateTodo = { 
			name: e.target.name.value, 
			edit: false 
		}

		// API endpoint
		const url = `https://5be333fdd53daf0013250f39.mockapi.io/api/v1/todos/${id}`

		// API call
		const options = {
			method: "put",
			body: JSON.stringify(updateTodo),
			headers: new Headers({
				"Content-type": "application/json"
			})
		}

		const todos = [...this.state.todos] // Creating a copy of todo array using spread operator

		todos[index] = { ...todos[index] } // Selectiong index todo and creating a copy of todo using spread operator

		todos[index].edit = false // Assign new value to index todo

		todos[index].name = e.target.name.value // Assign new value to index todo

		fetch(url, options)
			.then(res => res.json())
			.then(res => {

				this.setState({
					todos
				})
			})
			.catch(error => console.log(error))

	}

	// Handle edit
	handleEdit = index => {
		const todos = [...this.state.todos] // Creating a copy of todo array using spread operator

		todos[index] = { ...todos[index] } // Selectiong index todo and creating a copy of todo using spread operator

		todos[index].edit = true // Assign new value to index todo

		this.setState({
			todos
		})

		console.log(todos)
	}

	render() {

		return (
			<div className="container">

				<h1>Todo List</h1>

				<form onSubmit={this.handleAdd}>

					<input ref="todo" name="todo" placeholder="Enter Todo" type="text" />
					<button>
						Add Todo
                    </button>

				</form>

				<Todos 
					  todos={this.state.todos}
					  handleRemove={this.handleRemove}
					  handleUpdate={this.handleUpdate}
					  handleEdit={this.handleEdit} />

			</div>
		)
	}
}

export default TodosList