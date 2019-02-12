import React from "react"
import {Form, Input,Upload,Icon,Modal} from 'antd';
import Tags from './tags'
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import "./index.less"
const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
    state = {
        editorState: EditorState.createEmpty(),
        previewVisible: false,
        previewImage: '',
        fileList: [],
        editorHtml:""
    };
    onEditorStateChange= (editorState) => {
        this.setState({
            editorState
        });
        this.props.setHtml(draftToHtml(convertToRaw(editorState.getCurrentContent())));
    };
    handleCancel = () => this.setState({ previewVisible: false });

    handlePreview = (file) => {
        this.setState({
            previewImage: file.url || file.thumbUrl,
            previewVisible: true,
        });
    };

    handleChange = ({ fileList }) => this.setState({ fileList });
    render() {
        const { editorState } = this.state;
        const {getFieldDecorator} = this.props.form;
        const { previewVisible, previewImage, fileList } = this.state;
        const uploadButton = (
            <div>
                <Icon type="plus" />
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        return (
            <Form ref="myForm">
                <FormItem label="标题:">
                    {getFieldDecorator('title', {
                        rules: [{required: true, message: '少侠,先写个标题吧!'}],
                    })(
                        <Input placeholder="输入个标题吧~"/>
                    )}
                </FormItem>
                <FormItem label="内容:">
                    {getFieldDecorator('event', {
                        rules: [{required: true, message: '少侠,写点什么吧'}],
                    })(
                        <Editor
                            localization={{ locale: 'zh' }}
                            editorState={editorState}
                            wrapperClassName="wrapperClassName"
                            onEditorStateChange={this.onEditorStateChange}/>
                    )}
                </FormItem>
                <FormItem label="标签:">
                    <Tags getTags = {this.getTags.bind(this)}/>
                </FormItem>
                <FormItem label="图片:(因为是纯前端,没有后台,所以此处只是模拟了上传到后台,用默认图片代替)">
                    <div style={{height:"120px"}}>
                        {getFieldDecorator('images', {})(
                            <Upload
                                action="//jsonplaceholder.typicode.com/posts/"
                                listType="picture-card"
                                fileList={fileList}
                                onPreview={this.handlePreview}
                                onChange={this.handleChange}
                            >
                                {fileList.length >= 3 ? null : uploadButton}
                            </Upload>
                        )}
                        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                            <img alt="example" style={{ width: '100%' }} src={previewImage} />
                        </Modal>
                    </div>
                </FormItem>
            </Form>
        );
    }
    getTags(e){
       this.props.setTag(e)
    }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);
export default WrappedNormalLoginForm