import React, {Component} from 'react';
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default class ComponentPropsByFunction extends Component {
    render() {
        return (
            <div>
                <Navbar title="函数式传值"/>
                <Sidebar bg="yellow"/>
            </div>
        )
    }
}