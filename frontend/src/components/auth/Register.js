import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Register extends Component {
	constructor(props) {
		super(props);

		this.state = {
			username: '',
			password: '',
			email: '',
			phone: ''
		};
	}

	update=(e)=> {
		let name = e.target.name;
		let value = e.target.value;
		this.setState({
			[name]: value
		});
	}

	register=async(event)=>{
		event.preventDefault();
		const reqBody={
			email: this.state.email,
			username: this.state.username,
			password: this.state.password,
			phone: this.state.phone
		}

		try{
		const resonseData= await axios.post('http://localhost:5555/auth/signup', reqBody);
		console.log(resonseData);
		}catch(err){
			console.log(err);
		}
	}

	render() {
		return (
			<form onSubmit={this.register}>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>Email</label>
                    <input 
                        type="text" 
                        name="email"
                        className="form-control" 
                        placeholder="Enter email" 
                        onChange={this.update}
                        value={this.state.email}
                        />
                </div>

				<div className="form-group">
                    <label>Phone</label>
                    <input 
                        type="text" 
                        name="phone"
                        className="form-control" 
                        placeholder="Enter phone" 
                        onChange={this.update}
                        value={this.state.phone}
                        />
                </div>

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
                        type="text" 
                        name="password"
                        className="form-control" 
                        placeholder="Enter password" 
                        onChange={this.update}
                        value={this.state.password}
                        />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#">sign in?</a>
                </p>
            </form>
		);
	}
}

export default Register;