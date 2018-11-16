import React, { Component } from 'react'
import { API_CONFIG } from '../Api'

class Single extends Component {
  state = {
		movie: {}
  }

  componentWillMount(){
    let id = this.props.match.params.id
    const url = `${API_CONFIG.domain_url}/movie/${id}?api_key=${API_CONFIG.api_key}`;

		fetch(url)
		.then(res => res.json())
		.then(data => {
			this.setState({
				movie: data
			});
		})
	}
  
  render() {
    return (
    <div className="container">
      <div className="row">
        <div className="col s12 m6"> 
          <img src={`https://image.tmdb.org/t/p/w500${this.state.movie.poster_path}`} alt=""/>
        </div>
        <div className="col s12 m6">
          <h3 className="card-title">{ this.state.movie.original_title }</h3>
          <p>{this.state.movie.overview}</p>
          <p>Popularity: { this.state.movie.popularity }</p>
          <p>Release Date : { this.state.movie.release_date}</p>
        </div>
      </div>
    </div>
    )
  }
}

export default Single
