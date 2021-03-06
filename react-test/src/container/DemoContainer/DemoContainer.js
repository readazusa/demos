import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { Card } from 'antd';



const DemoCard = ({url,title,txt}) => {
    console.log('card')
    return (
        <Card title={title} extra={<Link to={url}>查看</Link>} style={{ width: 300 }}>
            <p>{txt}</p>
        </Card>
    )
}

export default class Demo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [
                {title:'ToDo',txt:'一个TodoList...',url:'/demoDetail/ToDo'},
                {title:'PureCom',txt:'PureComponent测试...',url:'/demoDetail/PureCom'},
                {title:'生命周期',txt:'生命周期...',url:'/demoDetail/LifeCycle'},
            ]
        }
        // this.handleEdit=this.handleEdit.bind(this)
    }
    render() {
        console.log('demo')
        return (
            <div className="wrapper">
            {
                this.state.list.map((val,index)=>{
                    return(
                        <DemoCard url={val.url} title={val.title} txt={val.txt} key={index} />
                    )
                })
            }
            </div>
        )
    }
}



