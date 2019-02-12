import React from "react"
import {Carousel, Collapse, Tabs, Icon, message, Input, Button} from "antd"
import {Link} from "react-router-dom"
import "./index.less"
import Item from "../../common/item"
import {web, record} from "../../mock/mock"

const Panel = Collapse.Panel;
const TabPane = Tabs.TabPane;
const Search = Input.Search;

let data = web();
let recordData = record();

class Index extends React.Component {
    state = {
        showData: [],
        key: "",//搜索的值
        loading: false,
        newList: [],//最新排行
        hotList: [],//热门排行
        vueList:[],//vue文章列表
        reactList:[]//react文章列表
    };

    //搜索
    onSearch(value) {
        let showData = [];
        for (let i = 0; i < data.length; i++) {
            if (data[i].title.includes(value)) {
                showData.push(data[i]);
            }
        }
        this.setState({
            loading: true
        });
        setTimeout(() => {
            this.setState({
                showData,
                loading: false
            });
        }, 500)
    }

    quickList = [
        {
            name: "web前端",
            link: "/web"
        },
        {
            name: "手记",
            link: "/web"
        },
        {
            name: "博客介绍",
            link: "/about"
        }
    ];

    setData() {
        let showData = this.state.showData;
        let length = showData.length;
        let addData = [];
        if (length > 0) {
            addData = data.slice(length - 1, length + 3);
            if (addData.length === 0) {
                message.warning('亲,没有更多内容了');
            }
        } else {
            addData = data.slice(0, 6);
        }
        showData = [...showData, ...addData];
        this.setState({
            showData
        });
    }

    setKey(e) {//搜索关键字
        let value = e.target.value;
        this.setState({
            key: value
        })
    }

    setNewData() {//最新推荐列表
        let newList = data.slice(0, 5);//设置为最新的5条数据
        this.setState({
            newList
        })
    }

    setHotData() {//点击排行,最热文章列表 pv大于150且从中取5条
        let hotList = [];//设置为最新的5条数据
        let vueList = [];//vue相关文章列表
        let reactList = [];//react相关文章列表
        for (let i = 0; i < data.length; i++) {
            if (data[i].pv > 150) {
                hotList.push(data[i]);//最热文章
            }
            if(data[i].type.includes(2)){//vue列表
                vueList.push(data[i])
            }
            if(data[i].type.includes(3)){//react列表
                reactList.push(data[i])
            }
        }
        hotList = hotList.slice(0,5);
        vueList = vueList.slice(0,3);
        reactList = reactList.slice(0,3);
        this.setState({
            hotList,
            vueList,
            reactList
        })
    }


    render() {
        return (
            <div style={{paddingBottom: "20px", overflow: "hidden"}}>
               {/* <div className="top">
                    <div className="left">
                        <Carousel autoplay>
                            <div><h3>1</h3></div>
                            <div><h3>2</h3></div>
                            <div><h3>3</h3></div>
                            <div><h3>4</h3></div>
                        </Carousel>
                    </div>
                    <div className="right">每日一语</div>
                </div>*/}
                <div className="bottom">
                    <div className="left">
                        <div className="tab">
                            <Tabs defaultActiveKey="1">
                                <TabPane tab="vue" key="1">
                                    <Collapse accordion defaultActiveKey={['0']}>
                                        {
                                            this.state.vueList.map((item, index) =>
                                                <Panel header={item.title} key={index}>
                                                    <p>
                                                        <Link to={`/info/${item.id}`}>
                                                            {item.outline}
                                                        </Link>
                                                    </p>
                                                </Panel>
                                            )
                                        }
                                    </Collapse>
                                </TabPane>
                                <TabPane tab="react" key="2">
                                    <Collapse accordion defaultActiveKey={['0']}>
                                        {
                                            this.state.reactList.map((item, index) =>
                                                <Panel header={item.title} key={index}>
                                                    <Link to={`/info/${item.id}`}>
                                                        {item.outline}
                                                    </Link>
                                                </Panel>
                                            )
                                        }
                                    </Collapse>
                                </TabPane>
                                <TabPane tab="手记" key="3">
                                    <Collapse accordion defaultActiveKey={["0"]}>
                                        {
                                            recordData.slice(0, 3).map((item, index) =>
                                                <Panel header={item.title} key={index}>
                                                    <Link to={`/record`}>
                                                        {item.outLine}
                                                    </Link>
                                                </Panel>
                                            )
                                        }
                                    </Collapse>
                                </TabPane>
                            </Tabs>
                        </div>
                        <div className="wzlist">
                            {
                                this.state.showData.length > 0 ?
                                    this.state.showData.map((item, index) =>
                                        <Item data={item} key={index}/>
                                    ) :
                                    <div className="noData">
                                        暂无相关内容
                                    </div>
                            }
                            {
                                this.state.loading && <div className="load"><Icon type="loading"/>加载中•••</div>
                            }
                        </div>
                    </div>
                    <div className="right">
                        <div className="search">
                            <Search
                                placeholder="站内搜索"
                                onSearch={this.onSearch.bind(this)}
                                onChange={this.setKey.bind(this)}
                                ref="key"
                                enterButton
                            />
                        </div>
                        <div className="quick" style={{paddingBottom: "10px"}}>
                            <div className="homeTitle">
                                <span>快捷入口</span>
                            </div>
                            {
                                this.quickList.map((item, index) =>
                                    <Button key={index}>
                                        <Link to={item.link}>{item.name}</Link>
                                    </Button>
                                )
                            }

                        </div>
                        <div>
                            <div className="homeTitle">
                                <span>热门排行</span>
                            </div>
                            <div className="list">
                                {
                                    this.state.hotList.length > 0 ?
                                        this.state.hotList.map((item, index) =>
                                            <Link to={`/info/${item.id}`} key={index}>{item.title}</Link>
                                        ) :
                                        <div className="noData">
                                            暂无相关内容
                                        </div>
                                }
                            </div>
                        </div>
                        <div>
                            <div className="homeTitle">
                                <span>最新推荐</span>
                            </div>
                            <div className="list">
                                {
                                    this.state.newList.length > 0 ?
                                        this.state.newList.map((item, index) =>
                                            <Link to={`/info/${item.id}`} key={index}>{item.title}</Link>
                                        ) :
                                        <div className="noData">
                                            暂无相关内容
                                        </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        this.setData();
        this.setNewData();
        this.setHotData();
    }

    componentWillReceiveProps(nextProp) {
        if (nextProp !== undefined && !this.state.key) { //拉到底部
            this.setState({
                loading: true
            });
            setTimeout(() => {
                this.setState({
                    loading: false
                });
                this.setData();
            }, 500)
        }
    }
}

export default Index
