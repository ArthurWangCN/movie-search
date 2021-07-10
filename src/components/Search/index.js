import React, { Component } from 'react';
import axios from 'axios';
import './Search.css';

import { Input } from 'antd';
const { Search } = Input;

class MovieSearch extends Component {

    constructor() {
        super();
        this.state = {
            isLoading: false,
        }
    }

    handleSearch = (value, event) => {
        // this.setState({
        //     isLoading: true
        // })
        console.log(value);
        axios.get(`http://localhost:3000/api/j/subject_suggest?q=${value}`)
            .then(res => {
                if (res) {
                    this.props.setMovieList(res.data);
                }
            })
    }

    render() {
        return (
            <div className="search-wrapper">
                <h2>豆瓣电影搜索</h2>
                <Search onSearch={this.handleSearch} placeholder="输入电影名" enterButton="搜索" size="large" loading={this.state.isLoading} />
            </div>
        );
    }
}

export default MovieSearch;