import React, {Component, createRef} from 'react';

export default class UnControlledComponent extends Component {
    username = createRef();

    render() {
        /*
            在 React 中编写一个非受控组件，
            就是在原生的 HTML 标签上添加 ref 属性，
            然后通过 ref 属性获取到 DOM 元素，
            再通过 DOM 元素获取到用户输入的值。
            通过 ref 从 DOM 结点上获取表单数据就是非受控组件。
        */
        return (
            <div>
                <h1>Login Page</h1>
                <div>
                    <input type="text" ref={this.username} defaultValue="admin"/>
                    <button onClick={() => {
                        console.log(this.username.current.value)
                    }}>Login
                    </button>
                    <button onClick={() => {
                        this.username.current.value = ''
                    }}>Reset
                    </button>
                </div>
            </div>
        )
    }
}