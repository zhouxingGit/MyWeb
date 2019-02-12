import React, {Component} from 'react';
import Step from "../../common/step/index"
import {Steps, Button, Modal, BackTop, Tooltip} from 'antd';
import RecordForm from "../../common/recordForm/index"
import {record} from "../../mock/mock"

let list = record();

class Index extends Component {
    state = {visible: false};

    componentWillMount() {

    }

    //接收富文本编辑器带标签的内容
    setHtml(e) {
        this.setState({
            html: e
        })
    }

    //接收选中的标签
    setTag(e) {
        this.setState({
            tags: e
        })
    }

    render() {
        return (
            <div style={{position: "relative"}}>
                <Tooltip placement="left" title="返回顶部">
                    <BackTop target={() => document.getElementById('section')} visibilityHeight={400}
                             style={{right: "50px", bottom: "70px"}}/>
                </Tooltip>
                <Steps direction="vertical">
                    {
                        list.map((item, index) => (
                            <Step key={index} info={item} index={index}/>
                        ))
                    }
                </Steps>
                <Button type="primary" icon="edit" size="large"
                        onClick={this.openDialog.bind(this)}
                        style={{position: "absolute", top: "0", right: "20px"}}>
                    记点什么吧?
                </Button>
                <div>
                    <Modal
                        width="1000px"
                        title="编辑动态"
                        ref="modal"
                        visible={this.state.visible}
                        onOk={this.handleOk.bind(this)}
                        onCancel={this.handleCancel.bind(this)}
                    >
                        <RecordForm ref="form" setTag={this.setTag.bind(this)} setHtml={this.setHtml.bind(this)}/>
                    </Modal>
                </div>
            </div>
        );
    }

    openDialog() {
        this.setState({
            visible: true
        })
    }

    //填完了,确定
    handleOk() {
        let demo = this.refs.form;
        let images = [];
        //触发校验
        demo.validateFields((err, values) => {
            if (!err) {
                //校验通过
                values.tag = this.state.tags;
                if (values.images !== undefined) {
                    for (let i = 0; i < values.images.fileList.length; i++) {
                        images.push(require("../../images/2.jpg"));
                    }
                    values.images = images;
                }
                values.event = this.state.html;
                console.log(this.state.html)

                list = [values, ...list];//触发更新
                this.setState({
                    visible: false
                });
                demo.resetFields();
            }
        })
    }

    //关闭对话框
    handleCancel() {
        let demo = this.refs.form;
        demo.resetFields();
        this.setState({
            visible: false
        });
    }
}

export default Index;
