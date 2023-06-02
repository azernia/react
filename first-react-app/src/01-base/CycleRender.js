import React, {Component} from 'react';

export default class CycleRender extends Component {
    state = {
        arr: [1, 2, 3]
    }

    render() {
        return (
            <div>
                <ul>
                    {/*如果不涉及列表的增加，删除和重排，将 key 设置为索引没有问题*/}
                    {this.state.arr.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
            </div>
        )
    }
}