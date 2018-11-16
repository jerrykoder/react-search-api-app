import React, { Component} from 'react'
import { API_CONFIG } from '../Api'

class Genres extends Component{
    state = {
        movies: [],
        genres: []
    }

    componentWillMount(){
		const url = `${API_CONFIG.domain_url}/genre/movie/list?api_key=${API_CONFIG.api_key}`;

		fetch(url)
		.then(res => res.json())
		.then(data => {
			this.setState({
				genres: data.genres
			});
		})
    }
    
    handleChange = (e) => {
        let searchTerm = e.target.value
		if( searchTerm ){
			this.handleSearchTerm( searchTerm )
		} 
    }

    handleSearchTerm = (term) => {
		const url = `${API_CONFIG.domain_url}/discover/movie?api_key=${API_CONFIG.api_key}&with_genres=${term}`;

		fetch(url)
		.then(res => res.json())
		.then(data => {
			this.setState({
				movies: data.results
			});
		})
	}

  render(){

    const genresList = this.state.genres.map(genre => {
        return (
            <option key={genre.id} value={genre.id}>{genre.name}</option>
        );
    })

    const movieList = this.state.movies.map(movie => {
        return (
            <div className="col s12 m6 l4" key={ movie.id }> 
                <div className="card">
                    <div className="card-image">
                    <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt=""/>
                    </div>
                    <div className="card-content">
                        <span className="card-title">{ movie.original_title }</span>
                        <p><i className="material-icons">perm_contact_calendar</i>{movie.release_date}</p>
                        <p>{movie.overview.length < 30 ? `${movie.overview}` : `${movie.overview.substring(0, 30)}...`} </p>
                    </div>
                </div>
            </div>
        );
    })

    return (
        <div className="container">
            <div className="row">
                <div className="col s12"> 
                    <h1>Genres</h1>
                    <select className="browser-default" onChange={this.handleChange}>
                        <option value="">Choose your option</option>
                        { genresList }

                    </select>
                </div>
            </div>
            
            <div className="row">
            {movieList}
            </div>
        </div>
    )
  }
}


export default Genres
