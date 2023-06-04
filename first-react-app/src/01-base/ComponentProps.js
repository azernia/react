import React, {Component} from 'react';
import Navbar from "./Navbar";

export default class ComponentProps extends Component {
    obj = {
        title: 'aaa'
    }

    render() {
        return (
            <div>
                <Navbar title="父组件传值"/>
                {/*在对象中的属性key与组件中的属性相同时可以使用...展开*/}
                <Navbar {...this.obj}/>
            </div>
        )
    }
}