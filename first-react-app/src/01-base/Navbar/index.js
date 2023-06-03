import React, {Component} from 'react';
import PropTypes from "prop-types";

export default class Navbar extends Component {
    // 验证传值类型
    static propTypes = {
        title: PropTypes.string.isRequired
    }

    static defaultProps = {
        title: '默认值'
    }

    render() {
        const {title} = this.props;
        return (
            <div>{title}</div>
        )
    }
}