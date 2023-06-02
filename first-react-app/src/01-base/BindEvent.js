import React, {Component} from "react";

export default class BindEvent extends Component {

    handleClick1() {
        console.log('clicked1')
    }

    handleClick2 = (event) => {
        console.log('clicked2', event)
    }

    handleClick3(event) {
        console.log('clicked3', event)
    }

    render() {
        return (
            <div>
                <input type="text"/>
                {/*不推荐，因为这里的this指向的是undefined*/}
                <button onClick={this.handleClick1.bind(this)}>Add1 - 不推荐 - 需要修正 this</button>
                <button onClick={this.handleClick2}>Add2 - 推荐</button>
                {/*推荐，因为这里的this指向的是当前组件的实例对象*/}
                <button onClick={(event) => {
                    this.handleClick3(event) // 推荐，因为这里的this指向的是当前组件的实例对象， 传参时好用
                }}>Add3
                </button>
                <button onClick={() => {
                    console.log('clicked4')
                }}>Add4
                </button>
            </div>
        )
    }
}