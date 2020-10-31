import React from 'react';
import { Form, Input, Button } from 'antd';
import { ButtonFooterWrapper } from './styles';

const PostModal = (props) => {
    const { handleOk, onCancel } = props;

    return (
        <Form
            onFinish={handleOk}
            onCancel={onCancel}
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
                <Input />
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
                <Input />
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