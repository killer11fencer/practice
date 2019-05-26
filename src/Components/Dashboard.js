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
    getPosts = async (req,res) => {
        axios.get('/api/post').then(res =>this.setState({posts:res.data}))
    }
    resetSearch = (req,res) => {
        this.setState({userPost: false})
    }
    render() {
        return(
            <div>
                <div>
                    <input name='search' onChange={this.handleChange}/>
                </div>
            </div>
        )
    }
}