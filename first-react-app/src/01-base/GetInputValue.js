import React, {Component, createRef} from "react";

export default class GetInputValue extends Component {
    username = createRef();

    getInputValue1() {
        // 绑定在元素上ref会获取到真实的DOM元素
        // 绑定在组件上获取的是该组件
        console.log(this.refs.myText.value)
    }

    getInputValue2() {
        console.log(this.username.current.value)
    }

    render() {
        return (
            <div>
                <div>
                    <label htmlFor="">Method 1: </label>
                    <input type="text" placeholder="method1" ref="myText"/>
                    <button onClick={() => this.getInputValue1()}>Get Input Element Value</button>
                </div>
                <div>
                    <label htmlFor="">Method 2: </label>
                    <input type="text" placeholder="username" ref={this.username}/>
                    <button onClick={() => this.getInputValue2()}>Get Input Element Value</button>
                </div>
            </div>
        );
    }
}