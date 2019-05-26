import React, {Component} from 'react'


class Auth extends Component {
    constructor() {
        super();
        this.state = {
            username: null,
            password: null,

        }
    }
    handleChange(e) {
        this.setState({[e.target.name]:e.target.value})
    }
    render() {
        return(
            <div>
                <h1>Hello</h1>
                <div>Username</div>
                <input name='username'onChange={this.handleChange}/>
                <div>Password</div>
                <input name='password'onChange={this.handleChange}/>
            </div>
        )
    }
}
export default Auth