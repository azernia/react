import React, {Component} from 'react';

class Field extends Component {
    render() {
        return (
            <div>
                <label>{this.props.label}</label>
                <input type={this.props.type} onChange={(event) => {
                    this.props.onchangeHandler(event.target.value)
                }}/>
            </div>
        )
    }
}

export default class FormComponent extends Component {

    state = {
        username: '',
        password: ''
    }

    doLogin = () => {
        console.log(this.state.username, this.state.password)
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <Field label="username" type="text" onchangeHandler={(value) => {
                    this.setState({
                        username: value
                    })
                }}/>
                <Field label="password" type="password" onchangeHandler={(value) => {
                    this.setState({
                        password: value
                    })
                }}/>
                <div>
                    <button onClick={this.doLogin}>Submit</button>
                    <button>Cancel</button>
                </div>
            </div>
        )
    }
}