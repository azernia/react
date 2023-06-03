import React, {Component} from 'react';
import Navbar from "./Navbar";

export default class ComponentProps extends Component {
    render() {
        return (
            <div>
                <Navbar title="父组件传值"/>
            </div>
        )
    }
}