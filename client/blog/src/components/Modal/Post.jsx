import React, { useState, useEffect, useRef } from 'react';
import { Form, Input, Button, Spin } from 'antd';
import _get from 'lodash/get';
import { ButtonFooterWrapper } from './styles';
import postSelector from '../../selector/postSelector';
import { connect } from 'react-redux';

const PostModal = (props) => {
    const formRef = useRef(null)
    const { handleOk, onCancel, isUpdate, postDetail, isCreate, isCreating, isUpdating } = props;
    const [form] = Form.useForm();
    const [formValues, setFormValues] = useState({});
    const titlePost = _get(formValues, 'title', '');
    const descriptionPost = _get(formValues, 'description', '');
    useEffect(() => {
        if (isUpdate) setFormValues(postDetail)
        else setFormValues({})
    }, [isUpdate, postDetail]);

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
        <Spin spinning={isCreating || isUpdating}>
            <Form
                onFinish={handleFinish}
                onCancel={handleCancel}
                initialValues={isCreate ? {} : postDetail}
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
            </Form>
        </Spin>
    )
}

const mapStateToProps = (state) => {
    const isCreating = postSelector.getIsCreating(state);
    const isUpdating = postSelector.getIsUpdating(state);
    return {
        isCreating,
        isUpdating
    }
}
export default connect(mapStateToProps, null)(PostModal);