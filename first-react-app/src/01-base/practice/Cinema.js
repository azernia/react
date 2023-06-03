import React, {Component} from 'react';
import axios from "axios";

export default class Cinema extends Component {
    state = {
        cinemas: []
    }

    componentDidMount() {
        this.getCinemas();
    }

    getCinemas() {
        const url = 'https://m.maizuo.com/gateway?cityId=440300&ticketFlag=1&k=6245292';
        const headers = {
            'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16857959836448077351157761"}',
            'X-Host': 'mall.film-ticket.cinema.list'
        }
        axios({
            url,
            headers
        }).then(resp => {
            if (resp.status === 200) {
                // setState是异步的,所以不能立即获取到state中的数据
                this.setState({
                    cinemas: resp.data.data.cinemas
                }, () => {
                    // 回调函数，等待setState执行完毕后再执行
                    console.log(this.state.cinemas)
                })
            }
        });
    }

    handleInput(event) {
        const cinemaName = event.target.value;
        if (cinemaName) {
            this.setState({
                cinemas: this.state.cinemas.filter(item => item.name.toUpperCase().includes(cinemaName))
            })
        } else {
            this.getCinemas();
        }
    }

    render() {
        return (
            <div>
                <div>
                    <input type="text" className="input-container" placeholder="请输入影院名称"
                           onInput={(event) => this.handleInput(event)}/>
                </div>
                <div>
                    {
                        this.state.cinemas.map(item => {
                            return (
                                <dl key={item.cinemaId} className="cinema-item">
                                    <dt className="name">{item.name}</dt>
                                    <dd className="address">{item.address}</dd>
                                </dl>
                            );
                        })
                    }
                </div>
            </div>
        )
    }
}