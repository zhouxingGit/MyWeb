import React from "react"
import {web} from "../../mock/mock";
import Comment from "../comment"
import Next from "../../common/link"
import "./index.less"

let list = web();

class test extends React.Component {
    state = {
        showData: {}
    };

    render() {
        let showData = this.state.showData;
        return (
            <div style={{background:'#fff',padding:"0 10px"}}>
                <div className="Article">
                    <h2 className="title">{showData.title}</h2>
                    <div className="timeorau">
                        <span>发布时间:{showData.time}</span>
                        <span>作者:{showData.author}</span>
                        <span className="pv">浏览量:
                            <span style={{color:'red'}}>
                                {showData.pv}
                                {
                                    showData.pv>100&&<i className="hot">hot</i>
                                }
                            </span>
                        </span>
                    </div>
                    <div className="outline">
                        简介:{showData.outline}
                    </div>
                    <p className="content">{showData.content}</p>
                </div>
                <Next id={this.props.match.params.id}/>
                <Comment/>
            </div>
        )
    }

    componentDidMount() {
        let id = this.props.match.params.id;
        for (let i = 0; i < list.length; i++) {
            if (list[i].id == id) {
                this.setState({
                    showData: list[i]
                });

                break;
            }
        }
    }
    componentWillReceiveProps(nextProp){
        let id = nextProp.match.params.id;
        for (let i = 0; i < list.length; i++) {
            if (list[i].id == id) {
                this.setState({
                    showData: list[i]
                });
                break;
            }
        }
    }
}

export default test
