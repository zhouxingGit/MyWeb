import React from "react"
import { Tag } from 'antd';
import "./index.less"
class index extends React.Component{
    render(){
        return(
            <div className="ant-steps-item ant-steps-item-process">
                <div className="ant-steps-item-tail"></div>
                <div className="ant-steps-item-icon">
                    <span className="ant-steps-icon">{this.props.index + 1}</span>
                </div>
                <div className="ant-steps-item-content">
                    <div className="ant-steps-item-title">
                        {this.props.info.title}
                        <span style={{marginLeft:'20px',fontSize:"13px",color:"rgb(144,144,144)"}}>{this.props.info.time}</span>
                    </div>
                    <div style={{padding:'10px 0 '}}>
                        {
                            this.props.info.tag?
                                this.props.info.tag.map((item,index) => {
                                    return(
                                        <Tag color={item.type} key={index}>{item.name}</Tag>
                                        )
                                }):''
                        }
                    </div>
                    <div className="ant-steps-item-description">
                        <div dangerouslySetInnerHTML = {{ __html: this.props.info.event }} />
                        <div className="images">
                            {
                                this.props.info.images?
                                    this.props.info.images.map((item,index)=>{
                                        return(
                                            <img src={item} key={index}/>
                                        )
                                    }):''
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default index