import React from "react"
import {Tag, Checkbox, Icon, Tooltip, Modal, Input ,message} from 'antd';
import "./index.less"
const CheckboxGroup = Checkbox.Group;

//初始标签列表
let TagList = [
    {
        name: "学习总结",
        type: "#69a5d0"
    },
    {
        name: "记录问题",
        type: "#cad042"
    },
    {
        name: "解决问题",
        type: "#0ed010"
    },
    {
        name: "思考中",
        type: "#26d098"
    },
    {
        name: "稳如老狗",
        type: "#51d031"
    },
    {
        name: "666",
        type: "#d09351"
    },
    {
        name: "nice",
        type: "#d03f38"
    },
    {
        name: "困惑",
        type: "#d02a2e"
    }
];

class tags extends React.Component {
    //获取选中的标签list
    state={open:false};
    onChange(e) {
        let tag = [];
        for (let i = 0; i < e.length; i++) {
            tag.push(TagList[e[i]]);
        }
        this.props.getTags(tag)
    }
    openDialog(){
        this.setState({
            open:true
        })
    }
    handleOk(){
        if(!this.state.name){
            message.error('大佬,标签名都不输吗?');
        }else{
            let tag = [
                {
                    name:this.state.name,
                    type:this.refs.type.value
                }
            ];
            TagList = [...TagList,...tag];
            this.setState({
                open:false
            })
        }
    }
    handleCancel(){
        this.setState({
            open:false
        })
    }
    inputChange(e){
        this.setState({
            name:e.target.value
        })
    }
    render() {
        return (
            <div className="tags">
                <Tooltip placement="bottom" title="自定义标签">
                    <Icon type="edit" onClick={this.openDialog.bind(this)}/>
                </Tooltip>
                <CheckboxGroup onChange={this.onChange.bind(this)}>
                    {
                        TagList.map((item, index) => {
                            return (
                                <Checkbox key={index} value={index}>
                                    <Tag color={item.type} style={{marginBottom: "10px"}}>{item.name}</Tag>
                                </Checkbox>
                            )
                        })
                    }
                </CheckboxGroup>
                <Modal
                    title="自定义标签"
                    visible={this.state.open}
                    onOk={this.handleOk.bind(this)}
                    onCancel={this.handleCancel.bind(this)}
                >
                    <div className="color">
                        <div>
                            标签名:
                            <Input placeholder="输个标签名吧~" ref="name" onChange={this.inputChange.bind(this)}/>
                        </div>
                        <div>
                            标签颜色:
                            <input type="color" ref="type"/>
                        </div>
                    </div>
                </Modal>
            </div>
        )
    }
}

export default tags