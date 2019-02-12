import React from "react"
import {comment} from "../../mock/mock"
import {Button,Input,Icon} from "antd"
import "./index.less"
let data = comment();
const { TextArea } = Input;
class test extends React.Component{
    state={
        info:''
    };
    exdent(e){
        let info = e.target.value;
        this.setState({
            info:info
        });
    }
    save(){
        let userName = localStorage.getItem("userName");
        let newData = [{
            userName:userName?userName:"游客",
            info:this.state.info,
            time:"刚刚"
        }];
        data = [...newData,...data];
       this.setState({
           info:""
       })
    }
    render(){
        return(
            <div>
                <div style={{height:"60px",paddingTop:"20px"}}>
                    <span className="count">共 <i>{data.length}</i>条评论</span>
                </div>
                <div>
                    {data.map((item,index)=>
                        <div key={index} className="pl">
                            <div className="userHead">
                                <Icon type="user"/>
                            </div>
                            <div className="userRight">
                                <h3 className="userName">{item.userName}</h3>
                                <div className="info">{item.info}</div>
                                <div className="time">{item.time}</div>
                            </div>
                        </div>
                    )}
                </div>
                <div className="pinlun">
                    <TextArea onChange={this.exdent.bind(this)} placeholder="说点什么呢···" value={this.state.info}/>
                    <Button type="primary" onClick={this.save.bind(this)}>发布评论</Button>
                </div>
            </div>
        )
    }
}
export default test
