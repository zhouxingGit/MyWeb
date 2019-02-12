import React from "react"
import "./index.less"
import {Input, Pagination, Spin, Tooltip,Badge} from 'antd';
import {web} from "../../mock/mock"
import Item from "../../common/item"
import {Link} from "react-router-dom";

const Search = Input.Search;

let list = web();

class test extends React.Component {
    state = {
        active: null,
        total: 0,
        pageNo: 1,
        pageSize: 4,
        showList: list,
        loading: false,
        showData: []
    };

    componentDidMount() {
        this.setState({
            loading: true
        });
        this.setShowList(1);

        setTimeout(() => {
            this.setState({
                showList: list,
                total: list.length,
                loading: false
            });
        }, 500)

    }

    //设置当前页显示的条数
    setShowList(page) {
        let showData = [];
        let pageSize = this.state.pageSize;
        let showList = this.state.showList;

        for (let i = 0; i < pageSize; i++) {
            if (showList[(page - 1) * pageSize + i]) {
                showData.push(showList[(page - 1) * pageSize + i]);
            } else {
                break;
            }
        }

        this.setState({
            showData: showData
        })
    }

    pageChange(e) {//翻页
        this.setShowList(e);
        this.setState({
            pageNo: e
        });
    }

    tagType(type) {//设置类型筛选条件
        let active = this.state.active === type ? null : type;
        this.setState({
            active: active,
            loading: true
        });
        this.setList(active);
    }

    //执行筛选
    setList(active) {
        if (active) {
            let showList = [];
            for (let i = 0; i < list.length; i++) {
                if (list[i].type.includes(active)) {
                    showList.push(list[i]);
                }
            }
            setTimeout(() => {
                this.setState({
                    showList: showList,
                    total: showList.length,
                    pageNo: 1,
                    loading: false
                });
                this.setShowList(1)
            }, 500)
        } else {//取消条件
            setTimeout(() => {
                this.setState({
                    showList: list,
                    total: list.length,
                    pageNo: 1,
                    loading: false
                });
                this.setShowList(1)
            }, 500)
        }
    }

    //搜索
    onSearch(value) {
        let showList = [];
        for (let i = 0; i < list.length; i++) {
            if (list[i].title.includes(value)) {
                showList.push(list[i]);
            }
        }
        this.setState({
           loading:true
        });
        setTimeout(() => {
            this.setState({
                showList: showList,
                total: showList.length,
                pageNo: 1,
                loading: false
            });
            this.setShowList(1)
        }, 500)
    }

    render() {
        let tags = [
            {
                name: "js",
                type: 0
            },
            {
                name: "html/css",
                type: 1
            },
            {
                name: "vue",
                type: 2
            },
            {
                name: "react",
                type: 3
            },
            {
                name: "typescript",
                type: 4
            },
            {
                name: "ES6",
                type: 5
            },
        ];
        return (
            <div>
                <div className="topTool">
                    {
                        tags.map((item, index) =>
                            <span key={index} onClick={this.tagType.bind(this, index)}
                                  className={this.state.active === index ? 'active' : ''
                                  }> {item.name} </span>
                        )
                    }
                </div>
                <div className="context">
                    <div className="left">
                        <div className="items">
                            {
                                this.state.showData.length>0?
                                    this.state.showData.map((item, index) =>
                                        <Item data={item} key={index}/>
                                    ):
                                    <div className="noData">
                                        暂无相关内容
                                    </div>
                            }
                        </div>
                        <Pagination defaultCurrent={1} pageSize={this.state.pageSize}
                                    total={this.state.total} onChange={this.pageChange.bind(this)}/>
                    </div>
                    <div className="right">
                        <div className="search">
                            <Search
                                placeholder="站内搜索"
                                onSearch={this.onSearch.bind(this)}
                                enterButton
                            />
                        </div>
                        <div>
                            <div className="title">今日推荐</div>
                            <ul className="news">
                                {
                                    list.slice(0, 8).map((item, index) =>//取出其中10条展示

                                        <li key={index}>
                                            <Tooltip placement="bottom" title={item.title}>
                                                <Link to={`/info/${item.id}`}>
                                                    {
                                                        index<3?
                                                            <span>
                                                                {item.title}
                                                                <i className="new">
                                                                    new
                                                                </i>
                                                            </span>
                                                            :
                                                            item.title
                                                    }
                                                </Link>
                                            </Tooltip>
                                        </li>
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                {//是否loading
                    this.state.loading &&
                    <div className="loading">
                        <Spin spinning={this.state.loading}/>
                    </div>
                }
            </div>
        )
    }

}

export default test
