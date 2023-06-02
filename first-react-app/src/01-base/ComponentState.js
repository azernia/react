import React, {Component} from 'react';

export default class ComponentState extends Component {
    state = {
        collected: false
    }

    handleClick() {
        console.log()
        this.setState({
            collected: !this.state.collected
        })
        if (!this.state.collected) {
            console.log('收藏逻辑')
        } else {
            console.log('取消收藏逻辑')
        }
    }

    render() {
        return (
            <div>
                <h3>Component State</h3>
                <button onClick={() => this.handleClick()}>{this.state.collected ? '已收藏' : '收藏'}</button>
            </div>
        )
    }
}