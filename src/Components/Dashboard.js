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
        this.getPosts()
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
        let filteredArray = this.state.posts.filter(elem=>{
            return elem.title === this.state.search
        })
        let displayFilter = filteredArray.map((elem,i)=>{
            return <div key={i}><h1>{elem.title}</h1>
            <div>{elem.img}</div>
            <div>{elem.username}</div>
            </div> 
        })
        
    }
    render() {
        return(
            <div>
                <div>
                    <input name='search' onChange={this.handleChange}/> 
                    <button onClick={this.filterSearch}>Search</button>
                    <button onClick={this.resetSearch}>Cancel</button>
                    <div></div>
                </div>
            </div>
        )
    }
}
export default Dashboard