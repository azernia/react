import React, {Component, createRef} from 'react';

class Field extends Component {

    state = {
        value: ''
    }

    clear = () => {
        this.setState({value: ''})
    }

    render() {
        return (
            <div>
                <label>{this.props.label}</label>
                <input type={this.props.type} onChange={(event) => {
                    this.setState({value: event.target.value})
                }} value={this.state.value}/>
            </div>
        )
    }
}

export default class FormComponentByRef extends Component {

    username = createRef();
    password = createRef();

    render() {
        return (
            <div>
                <h1>Login</h1>
                <Field label="username" type="text" ref={this.username}/>
                <Field label="password" type="password" ref={this.password}/>
                <div>
                    <button onClick={() => {
                        console.log(this.username.current.state.value)
                        console.log(this.password.current.state.value)
                    }}>Submit
                    </button>
                    <button onClick={() => {
                        this.username.current.clear()
                        this.password.current.clear()
                    }}>Cancel
                    </button>
                </div>
            </div>
        )
    }
}