import React, {Component} from 'react'

class Popular extends Component {
  state = {
    name: '',
    name1: '',
    name2: '',
    name3: '',
    field: ''
  }

  //  This is to make it so you can use the variable "this" inside of handlechange() function
  // constructor(props) {
  //   super(props)
  //   this.handleChange = this.handleChange.bind(this)
  // }

  // setState with callback function
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    }, () => {
      console.log(this.state)
    })
  }

  handleField = (e, index, value) => this.setState({field: e.target.value})

  render(){
    return (
      <div className="container">
          <h1>Popular</h1>
          <input type="text" name="name" placeholder="Name" onChange={this.handleChange}/>
          <input type="text" name="name1" placeholder="Name1" onChange={this.handleChange}/>
          <input type="text" name="name2" placeholder="Name2" onChange={this.handleChange}/>
          <input type="text" name="name3" placeholder="Name3" onChange={this.handleChange}/>

          <select name="field" onChange={this.handleField}>
            <option value="thing1">Thing</option>
            <option value="thing2">Thing2</option>
            <option value="thing3">Thing3</option>
          </select>

          {/* Ternary operator inside render */}
          {this.state.name ? 'Hello' : null}
      </div>
    )
  }
}


export default Popular
