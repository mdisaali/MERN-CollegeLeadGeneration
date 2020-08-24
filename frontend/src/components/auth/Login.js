import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			username: '',
			password: ''
		};


		this.displayLogin = this.displayLogin.bind(this);
	}

	update=(e)=> {
		let name = e.target.name;
		let value = e.target.value;
		this.setState({
			[name]: value
		});
	}

	async displayLogin(e) {
		const response = await axios.post(
            'http://localhost:5555/auth/login',
            {
                username: this.state.username,
                password: this.state.password
            },
        );
        console.log(response);
	}

	render() {
		return (
			 <form onSubmit={this.displayLogin}>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Usename</label>
                    <input 
                        type="text" 
                        name="username"
                        className="form-control" 
                        placeholder="Enter username" 
                        onChange={this.update}
                        value={this.state.username}
                        />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input 
                        type="password" 
                        name="password"
                        className="form-control" 
                        placeholder="Enter password"
                        onChange={this.update} 
                        value={this.state.password}
                        />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label 
                            className="custom-control-label" 
                            htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button 
                    type="submit" 
                    className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
		);
	}
}

export default Login;