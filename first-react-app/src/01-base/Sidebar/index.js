import React from 'react';
import PropTypes from "prop-types";

const Sidebar = (props) => {
    const {bg} = props;

    return (
        <div style={{background: bg, width: "200px"}}>
            <ul>
                <li>1111111</li>
                <li>1111111</li>
                <li>1111111</li>
                <li>1111111</li>
            </ul>
        </div>
    )
}

// 在函数式组件中做属性验证和默认值只能通过该种方式添加
Sidebar.defaultProps = {
    bg: "red"
}

Sidebar.propTypes = {
    bg: PropTypes.string
}

export default Sidebar;