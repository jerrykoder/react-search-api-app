import React, { Component } from 'react'


class Search extends Component {
    render(){
        
        // Destructuring
        const { handleChange } = this.props
        return (
            <form>
                <input
                    onChange={handleChange}
                    placeholder="Search Movie"
                    type="text"
                    ref="searchTermRef"/>
            </form>
        )
    }
}

export default Search