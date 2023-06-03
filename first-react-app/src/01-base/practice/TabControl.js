import React, {Component} from 'react';
import '../../assets/css/tabControl.css';
import Film from './Film';
import Cinema from './Cinema';
import UserCenter from './UserCenter';

export default class TabControl extends Component {
    state = {
        footers: [
            {id: 1, title: '电影'},
            {id: 2, title: '影院'},
            {id: 3, title: '我的'},
        ],
        current: 0
    }

    handleFooterClick(index) {
        this.setState({
            current: index
        })
    }

    render() {
        return (
            <div>
                <div>
                    {
                        this.state.current === 0 ? <Film/> : (this.state.current === 1 ? <Cinema/> : <UserCenter/>)
                    }
                </div>
                <ul className="footer-container">
                    {
                        this.state.footers.map((item, index) => {
                            return (
                                <li
                                    key={item.id}
                                    className={this.state.current === index ? 'active' : ''}
                                    onClick={() => this.handleFooterClick(index)}
                                >{item.title}</li>
                            );
                        })
                    }
                </ul>
            </div>
        )
    }
}