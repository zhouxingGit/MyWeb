import React from "react"
import {Link} from "react-router-dom"
import {web} from "../../mock/mock"
import "./index.less"

let data = web();

class test extends React.Component {
    state = {
        prev: -1,
        next: -1
    };
    setNext(id){
        for (let i = 0; i < data.length; i++) {
            if (data[i].id == id) {
                let prev = i-1;
                let next = i+1;
                this.setState({
                    prev,
                    next
                });

                if (i === 0) {//第一条
                    this.setState({
                        prev: null
                    })
                }
                if (i === data.length) {//最后一条
                    this.setState({
                        next: null
                    })
                }
                break;
            }
        }
    }
    render() {
        return (
            <div className="toInfo">
                <div>
                    上一篇 :
                    {
                        data[this.state.prev]?
                            <Link to={`/info/${data[this.state.prev].id}`}>
                                <span>{data[this.state.prev].title}</span>
                            </Link>:
                            <span style={{color:"#a79f9f"}}>没有上一篇啦!</span>
                    }
                </div>
                <div>
                    下一篇 :
                    {
                        data[this.state.next]?
                            <Link to={`/info/${data[this.state.next].id}`}>
                                <span>{data[this.state.next].title}</span>
                            </Link>:
                            <span style={{color:"#a79f9f"}}>没有下一篇啦!</span>
                    }
                </div>
            </div>
        )
    }

    componentDidMount() {
        this.setNext(this.props.id);
    }
    componentWillReceiveProps(nextProp){
        this.setNext(nextProp.id);
    }
}

export default test
