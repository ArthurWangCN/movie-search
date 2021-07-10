import React, { Component } from 'react';
import './App.css';
import MovieSearch from './components/Search';
import MovieList from './components/MovieList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movieList: []
    }
  }

  setMovieList = (arr) => {
    this.setState({
      movieList: arr
    })
  }

  render() {
    return (
      <div className="App">
        <MovieSearch setMovieList={this.setMovieList} />
        <MovieList movieList={this.state.movieList} />
      </div>
    );
  }
}

export default App;
