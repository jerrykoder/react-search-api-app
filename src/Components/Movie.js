import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Movie extends Component {
  render() {

    const { movies } = this.props
    
    const movieList = movies.map(movie => {
        return (
            <div className="col s12 m6 l4" key={ movie.id }> 
                <div className="card">
                    <div className="card-image">
                    <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt=""/>
                        <Link to={`/${movie.id}`} className="btn-floating btn-large halfway-fab waves-effect waves-light red"><i className="material-icons">local_movies</i></Link>
                    </div>
                    <div className="card-content">
                        <span className="card-title">{ movie.original_title }</span>
                        <p><i className="material-icons">perm_contact_calendar</i>{movie.release_date}</p>
                    </div>
                </div>
            </div>
        )
    })

    return (
      <div>
        { movieList }
      </div>
    )
  }
}

export default Movie
