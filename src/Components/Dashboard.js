import React, { Component } from 'react'
import axios from 'axios';

class Dashboard extends Component {
    constructor(){
        super();
        this.state = {
            posts: null,
            search: null,
            userPost: true

        }
    }
    componentDidMount() {
        
    }
    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    getPosts = async () => {
        axios.get('/api/post').then(res =>this.setState({posts:res.data}))
    }
    resetSearch = () => {
        this.setState({userPost: false})
    }
    filterSearch = () => {
        
        
    }
    render() {
        return(
            <div>
                <div>
                    <input name='search' onChange={this.handleChange}/> 
                    <button onClick={this.filterSearch}>Search</button>
                    <button onClick={this.resetSearch}>Cancel</button>
                </div>
            </div>
        )
    }
}
export default Dashboard