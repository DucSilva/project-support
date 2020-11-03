import React, { useState, useEffect, useRef } from 'react';
import { Form, Input, Button } from 'antd';
import _get from 'lodash/get';
import { ButtonFooterWrapper } from './styles';

const PostModal = (props) => {
    const formRef = useRef(null)
    const { handleOk, onCancel, isUpdate, postDetail, isCreate } = props;
    const [form] = Form.useForm();
    const [formValues, setFormValues] = useState({});
    const titlePost = _get(formValues, 'title', '')
    const descriptionPost = _get(formValues, 'description', '');
    console.log('postDetail===>>', postDetail)
    console.log('isCreate===>>', isCreate)
    console.log('isUpdate===>>', isUpdate)
    console.log('descriptionPost===>>', descriptionPost)
    console.log('titlePost===>>', titlePost)
    useEffect(() => {
        if (isUpdate) setFormValues(postDetail)
        else setFormValues({})
    }, [isUpdate]);

    // useEffect(() => {
    //     setFormValues({})
    // }, [isCreate])

    const handleResetForm = () => {
        formRef.current.resetFields();
    }

    const handleFinish = (values) => {
        handleOk(values, handleResetForm);
    }

    const handleCancel = () => {
        onCancel();
        handleResetForm();
    }


    return (
        <Form
            onFinish={handleFinish}
            onCancel={handleCancel}
            defaultValue={isUpdate ? postDetail : {}}
            initialValues={isCreate ? {} : postDetail}
            // defaultValue={postDetail}
            form={form}
            ref={formRef}
        >
            <Form.Item
                name="title"
                label="Title"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Title Post!',
                    },
                ]}
            >
                <Input value={isUpdate ? titlePost : ''} />
            </Form.Item>

            <Form.Item
                name="description"
                label="Description"
                rules={[
                    {
                        required: true,
                        message: 'Please input description Post!',
                    },
                ]}
            >
                <Input value={isUpdate ? descriptionPost : ''} />
            </Form.Item>
            <Form.Item>
                <ButtonFooterWrapper>
                    <Button type="danger" onClick={onCancel}>
                        Cancel
                    </Button>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </ButtonFooterWrapper>
            </Form.Item>
        </Form >
    )
}

export default PostModal;