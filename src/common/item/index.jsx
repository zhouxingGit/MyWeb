import React from "react"
import "./index.less"
import {Icon} from "antd"
import {HashRouter as Router, Link} from "react-router-dom";
import jsImg from "../../images/logo/js.jpg"
import vueImg from "../../images/logo/vue.png"
import reactImg from "../../images/logo/react.jpg"
import tsImg from "../../images/logo/typescript.jpg"
import es6Img from "../../images/logo/es6.jpg"

class test extends React.Component {
    state={
        like:this.props.data.like,
        active:false
    };
    ILike(){
        let like = this.state.like;
        let active = this.state.active;
        active = !active;
        if(!this.state.active){//未点赞
            like++;
        }else{//已点赞
            like--;
        }
        this.setState({
            like,
            active
        });
    }
    render() {
        let ShowData = this.props.data;
        return (
            <Router>
                <div>
                    <div className="item">
                        <Link className="itemTitle" to={`/info/${ShowData.id}`}>
                            <div className="tag">
                                {
                                    ShowData.type.includes(1) ? 'js':
                                        ShowData.type.includes(2)? 'vue':
                                            ShowData.type.includes(3)? 'react':
                                                ShowData.type.includes(4)? 'typescript':
                                                    'es6'
                                }
                            </div>
                            <span className="titlespan">{ShowData.title}</span>
                        </Link>
                        <div>
                            <div className="itemLeft">
                                {
                                    ShowData.type.includes(1) ? <img src={jsImg} alt="js"/>:
                                        ShowData.type.includes(2)? <img src={vueImg} alt="vue"/>:
                                            ShowData.type.includes(3)? <img  src={reactImg} alt="react"/>:
                                                ShowData.type.includes(4)? <img  src={tsImg} alt="typescript"/>:
                                                    <img  src={es6Img} alt="es6"/>
                                }
                            </div>
                            <div className="itemRight">
                                <div className="itemInfo">
                                    <span>{ShowData.author}</span>
                                    <span>发布时间:{ShowData.time}</span>
                                    <a href={ShowData.link}>来源:{ShowData.source}</a>
                                </div>
                                <p className="itemContent">
                                    {ShowData.content}
                                </p>
                                <div>
                                    <span>
                                        <Icon type="user"/>{ShowData.author}
                                    </span>
                                    <span>
                                        <Icon type="clock-circle"/>{ShowData.time}
                                    </span>
                                    <span>
                                        <Icon type="eye"/>{ShowData.pv}浏览
                                    </span>
                                    <span style={{ position: 'relative'}}>
                                        <Link to={`comment/${ShowData.id}`}>
                                            <Icon type="wechat"/>{ShowData.comment}评论
                                            {
                                                ShowData.comment>30&&<i className='hot'>hot</i>
                                            }
                                        </Link>
                                    </span>
                                    <span onClick={this.ILike.bind(this)} style={{cursor: 'pointer'}}>
                                        <Icon type="heart" style={{color:this.state.active?'red':'#666'}}/>{this.state.like}喜欢
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
        )
    }
}

export default test
