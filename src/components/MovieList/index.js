import React, { Component } from 'react';
import './MovieList.css';

class MovieList extends Component {
    render() {
        console.log(this.props.movieList,"???");
        let { movieList } = this.props;
        return (
            <div className="list-wrapper">
                {
                    movieList.map(movie => {
                        return (
                            <div className="movie-item-wrapper" key={movie.id}>
                                <div className="movie-item">
                                    <img src={'https://images.weserv.nl?url=' + movie.img.replace('https://', '')} />
                                    <p>{movie.title}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default MovieList;