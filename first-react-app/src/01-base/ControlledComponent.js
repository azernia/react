import React, {Component} from 'react';

export default class ControlledComponent extends Component {
    state = {
        username: '',
    }

    render() {
        return (
            <div>
                <h1>Login Page</h1>
                <div>
                    <input type="text" value={this.state.username} onChange={(event) => {
                        console.log(event.target.value)
                        this.setState({
                            username: event.target.value
                        })
                    }}/>
                    <button onClick={() => {
                        console.log(this.state.username)
                    }}>Login
                    </button>
                    <button onClick={() => {
                        this.setState({
                            username: ''
                        })
                    }}>Reset
                    </button>
                </div>
            </div>
        )
    }
}