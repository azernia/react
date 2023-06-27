import React, {Component} from 'react';

class Navbar extends Component {
    render() {
        return (
            <div style={{background: "red"}}>
                <button onClick={() => {
                    this.props.event();
                }}>click
                </button>
                <span>navbar</span>
            </div>
        )
    }
}

class Sidebar extends Component {
    render() {
        return (
            <div style={{background: "yellow", width: "200px"}}>
                <ul>
                    <li>11111111</li>
                    <li>11111111</li>
                    <li>11111111</li>
                    <li>11111111</li>
                    <li>11111111</li>
                    <li>11111111</li>
                    <li>11111111</li>
                    <li>11111111</li>
                </ul>
            </div>
        )
    }
}

export default class ChildToParent extends Component {

    /*
        子传父就是给子组件传递一个函数，子组件调用这个函数，即回调函数
     */

    state = {
        isShow: false
    }

    handleEvent = () => {
        this.setState({
            isShow: !this.state.isShow
        })
    }

    render() {
        return (
            <div>
                <Navbar event={this.handleEvent}/>
                {this.state.isShow && <Sidebar/>}
            </div>
        )
    }
}