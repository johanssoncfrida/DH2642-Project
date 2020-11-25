import React, { Component } from 'react'

class SignUp extends Component {
    state = {
        email: '',
        password: '',
        username: '',
        favoriteActor: '',
        gender: ''
    }
    handleChange = (e) => {
        this.setState( {
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }
    render() {
        return (
            <div className="container">
                <form onSubmit = {this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Sign Up</h5>
                    <div className="input-field">
                        <input type="email" id="email" onChange={this.handleChange}/>
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="favoriteActor">Favorite Actor</label>
                        <input type="text" id="favoriteActor" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="gender">Gender</label>
                        <input type="text" id="gender" onChange={this.handleChange}/>
                    </div>

                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Sign up</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignUp