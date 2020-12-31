
import React from 'react';
import axios from 'axios';
import './movie-list.scss';
import MovieDetail from './movie-details/movie-detail'
const API_URL = "https://api.tvmaze.com/search/shows?q=walking"
const API_BASE = "https://api.tvmaze.com/search/shows?q="

class MovieList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            list: []
        };
        this.myInputRef = React.createRef();
    }

    componentDidMount(){
        axios.get(API_URL).then(response => {
            console.log("Post request ex", response.data);
            this.setState({list: response.data});            
        });
    }

    onSearchBtnClick () {
        let value = this.myInputRef.current.value;
        console.log(value);
        if(value && value.length > 5) {
            axios.get(API_BASE + value).then(response => {
                console.log("Post request ex", response.data);
                this.setState({list: response.data});            
            });
        }
    }

    render() {
        return (
            <div className="container-fluid">
                <nav class="navbar navbar-expand-lg navbar-light bg-dark">
                    <form class="form-inline">
                        <div class="form-group">
                            <label>Enter a movie keyword: &nbsp;<input className="" ref={this.myInputRef} /> </label> 
                           
                        </div>
                        <div class="form-group">
                            <button type="button" className="btn btn-primary btn-sm" onClick={()=> this.onSearchBtnClick()}>Search</button>
                        </div>
                    </form>
                </nav>
               
                <ul className="list-group">
                { this.state.list && this.state.list.map((item, index)=>{ 
                    return ( <MovieDetail key={index} {...item}></MovieDetail>
                   )
                    }) }
                </ul>
            </div>
            
          );
    }
}

export default MovieList;