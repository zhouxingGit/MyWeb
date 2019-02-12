import React from "react"
import {Tag} from "antd"
import echarts from "echarts"
import "./index.less"
let tags = [
    {
        type:"rgb(54, 208, 16)",
        name:"html5"
    },
    {
        type:"rgb(54, 208, 16)",
        name:"css3"
    },
    {
        type:"rgb(54, 208, 16)",
        name:"js"
    },
    {
        type:"rgb(54, 208, 16)",
        name:"vue"
    },
    {
        type:"rgb(54, 208, 16)",
        name:"react"
    },
    {
        type:"rgb(54, 208, 16)",
        name:"小程序"
    },
    {
        type:"rgb(54, 208, 16)",
        name:"ES6"
    },
    {
        type:"rgb(54, 208, 16)",
        name:"TypeScript"
    },
    {
        type:"rgb(54, 208, 16)",
        name:"axios"
    },
    {
        type:"rgb(54, 208, 16)",
        name:"fetch"
    },
    {
        type:"rgb(54, 208, 16)",
        name:"ajax"
    },

    {
        type:"rgb(54, 208, 16)",
        name:"jquery"
    },
    {
        type:"rgb(54, 208, 16)",
        name:"bootstrap"
    },
    {
        type:"rgb(54, 208, 16)",
        name:"vuex"
    },
    {
        type:"rgb(54, 208, 16)",
        name:"http/https"
    },
    {
        type:"rgb(54, 208, 16)",
        name:"less/scss"
    },
    {
        type:"rgb(54, 208, 16)",
        name:"echarts"
    },
    {
        type:"rgb(54, 208, 16)",
        name:"百度地图"
    },
];

let tool = [
    {
        type:"#666",
        name:"SVN"
    },
    {
        type:"#666",
        name:"GIT"
    },
    {
        type:"#666",
        name:"webpack"
    },
    {
        type:"#666",
        name:"npm"
    }
];

class Index extends React.Component {
    render() {
        return (
            <div className="about">
                <div>
                    <div className="aboutTitle">
                        <div>关于作者</div>
                    </div>
                    <div className="author">
                        <div className="head">
                            <img src={require("./user.jpg")} alt="用户头像"/>
                        </div>
                        <div className="introduce">
                            <div className="basic">
                                <div>姓名:周星</div>
                                <div>学历:本科</div>
                                <div>从事工作:前端开发工程师</div>
                            </div>
                            <p>
                                个人介绍:
                            </p>
                            <div>
                                <div className="tag">技术标签:</div>
                                <div>
                                    {
                                        tags.map((item,index)=>{
                                            return(
                                                <Tag color={item.type} key={index} style={{marginBottom:"10px"}}>{item.name}</Tag>
                                            )
                                        })
                                    }
                                </div>
                                <div className="tag">工具标签:</div>
                                <div>
                                    {
                                        tool.map((item,index)=>{
                                            return(
                                                <Tag color={item.type} key={index}>{item.name}</Tag>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="aboutTitle">
                        <div>关于本博客</div>
                    </div>
                    <div id="test">
                        <p>本博客主要用于个人react练手,欢迎交流学习,本人github和码云上发布了webpack打包后的代码,如需源码,可与本人沟通</p>
                        <p>
                            时间过得贼快,不经意间从事前端开发工作已经4年,4年内技术更新的飞快,但眼看着也趋于稳定,
                            框架将稳定于三巨头vue, react, angular,前端构建工具将稳定于webpack,js方面倾向于typescript,
                            css预处理倾向于less,sass.
                        </p>
                        <p>
                            随着vue2.0的发布,ES6的Class的模块化写法变得..额..怎么说,走上了react相近的路,不得不说这也是一种
                            趋势,这种写法更容易结合typescript,因此vue2.0的学习也变得紧迫,写法和react几乎相同.
                        </p>
                        <p>
                            工作中,vue项目做了很多,react只停留在理论上,并没有实际的项目支撑,急需找个地方练练手,所以才有了该博客.
                        </p>
                        <p>
                            本博客使用react框架开发,(create-react-app脚手架 + antd + less),用到react-router4.0,
                            没有与服务器后台有任何交互,所以里面的数据全是测试数据,没有文件的读写操作,因此刷新后就还原了,
                            因为本人也不是搞设计的,布局方面也显得比较随意
                        </p>
                        <p>

                        </p>
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount(){

    }
}

export default Index
