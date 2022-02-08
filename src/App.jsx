import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
class App extends Component {
    constructor() {
        super()
        this.state = {
            fullName: '',
            username: '',
            email: '',
            password: ''
        }
        this.changeFullName = this.changeFullName.bind(this)
        this.changeUsername = this.changeUsername.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changePassword = this.changePassword.bind(this)
    }

    changeFullName(event){
        this.setState({
            fullName:event.target.value
        })
    }
    changeUsername(event){
        this.setState({
            username:event.target.value
        })
    }
    changeEmail(event){
        this.setState({
            email:event.target.value
        })
    }
    changePassword(event){
        this.setState({
            changePassword:event.target.value
        })
    }
    render() {
        return (
            <div>
                <div className='container'>
                    <div className='form-div'>
                        <form>
                            <input type='text'
                                placeholder="Full Name"
                                onChange={this.changeFullName}
                                value={this.state.fullName}
                                className='form-control form-group'
                            />
                            <input type='text'
                                placeholder="Username"
                                onChange={this.changeUsername}
                                value={this.state.username}
                                className='form-control form-group'
                            />
                            <input type='text'
                                placeholder="email"
                                onChange={this.changeEmail}
                                value={this.state.email}
                                className='form-control form-group'
                            />
                            <input type='password'
                                placeholder="Password"
                                onChange={this.changePassword}
                                value={this.state.password}
                                className='form-control form-group'
                            />
                            <input type='submit' className="btn btn-danger btn-block" value='submit' />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;