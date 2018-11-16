import React, { Component } from 'react'
import { API_CONFIG } from '../Api'
import Movie from './Movie'
import Search from './Search'

class Home extends Component {
	state = {
		movies: [],
		show: false,
		id: null
	}

	componentWillMount(){
		this.handleSearch()
	}

	handleChange = (e) => {
		//let searchTerm = this.refs.searchTermRef.value
		let searchTerm = e.target.value
		if( searchTerm ){
			this.handleSearchTerm( searchTerm )
		} else {
			this.handleSearch()
		}
	}

	handleCheck = () => {
		this.setState({
			show: !this.state.show 
		});
	}

	handleSearch = () => {
		const url = `${API_CONFIG.domain_url}/movie/now_playing?api_key=${API_CONFIG.api_key}`;

		fetch(url)
		.then(res => res.json())
		.then(data => {
			this.setState({
				movies: data.results
			});
		}).catch(err => console.log("error" + err))
	}

	handleSearchTerm = (term) => {
		const url = `${API_CONFIG.domain_url}/search/movie?api_key=${API_CONFIG.api_key}&query=${term}`;

		fetch(url)
		.then(res => res.json())
		.then(data => {
			this.setState({
				movies: data.results
			});
		}).catch(err => console.log("error" + err))
	}

	handleClick = (id) => {
		alert(`click ${id}`)
		this.setState({
			id
		});
	}

	render() {
		
		return (
			<div className="Home">
				<div className="container">
					<div className="row">
						<div className="col s12">
							<h3>Search</h3>
							
							<label>
								<input 
									onClick={this.handleCheck} 
									id="indeterminate-checkbox" 
									type="checkbox" />
									<span>Show Search</span>
							</label>

							{
								this.state.show &&
								<Search handleChange={this.handleChange} />
							}

						</div>
					</div>

					<div className="row">
						<Movie movies={this.state.movies} handleClick={this.handleClick} />
					</div>
				</div>
			</div>
		);
	}
}

export default Home;