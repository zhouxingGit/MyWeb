import React from "react"
import {HashRouter as Router, NavLink} from "react-router-dom";
import {Icon} from 'antd';

require("./header.less");

class Header extends React.Component {
    state = {
        show: false,
        show1:false
    };

    showImg() {
        let show = !this.state.show;
        this.setState({show});
        setTimeout(() => {
            if (this.state.show) {
                this.setState({
                    show: false
                })
            }
        }, 3000)
    }

    showImg1() {
        let show1 = !this.state.show1;
        this.setState({show1});
        setTimeout(() => {
            if (this.state.show1) {
                this.setState({
                    show1: false
                })
            }
        }, 3000)
    }

    render() {
        return (
            <Router>
                <div className="header">
                    <nav>
                        <NavLink to="/" activeClassName="NavActive" replace exact>
                            <Icon type="home"/>
                            首页
                        </NavLink>
                        <NavLink to="/web" activeClassName="NavActive" replace exact>
                            <Icon type="desktop"/>
                            Web前端
                        </NavLink>
                        <NavLink to="/record" activeClassName="NavActive" replace exact>
                            <Icon type="edit"/>
                            手记
                        </NavLink>
                        <NavLink to="/about" activeClassName="NavActive" replace exact>
                            <Icon type="question-circle"/>
                            博客介绍
                        </NavLink>
                        <div className="icons">
                            <span onClick={this.showImg.bind(this)}>
                                <Icon type="wechat"/>
                                {
                                    this.state.show && <img src={require("../../images/wechart.png")}/>
                                }
                            </span>
                            <span onClick={this.showImg1.bind(this)}>
                                <Icon type="qq"/>
                                {
                                    this.state.show1 && <img src={require("../../images/wechart.png")}/>
                                }
                            </span>
                            <a href="https://github.com/zhouxingGit" target="_blank"><Icon type="github"/></a>
                            <a href="https://gitee.com/zhouxing910917/myboke" target="_blank"><img
                                src={require("../../images/my.png")}/></a>
                        </div>
                    </nav>
                    {/*<input type="file" id="file" onChange={this.onInputFileChange.bind(this)} ref="file"/>*/}
                    <audio className="audio"
                           src="http://sc1.111ttt.cn:8282/2018/1/03m/13/396131213056.m4a?tflag=1519095601&pin=6cd414115fdb9a950d827487b16b5f97#.mp3"
                           controls autoPlay={false} loop>
                        浏览器不支持音频播放
                    </audio>
                </div>
            </Router>
        )
    }
}

export default Header
