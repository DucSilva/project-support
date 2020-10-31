import React, { useEffect } from 'react';
import { Button, Spin, Table, Modal } from 'antd';
import { useState } from 'react';
import PostModal from '../Modal/Post';

const Post = (props) => {
    const { post, isFetching, createPost, token } = props;
    const { getAllPost } = props;
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    const columns = [
        {
            title: 'Title',
            dataIndex: 'title',
        },
        {
            title: 'Description',
            dataIndex: 'description',
        },
        {
            title: 'Action',
            dataIndex: 'action',
            render() {
                return (
                    <>
                        ABC
                    </>
                )
            },
        },
    ];

    const hasSelected = selectedRowKeys.length > 0;

    const onSelectChange = selectedRowKeys => {
        setSelectedRowKeys(selectedRowKeys)
    };

    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };

    useEffect(() => {
        getAllPost(token);
    }, []);

    const onToggleModal = () => {
        setIsOpen(!isOpen)
    }

    const handleOk = (values) => {
        const { title, description } = values;
        createPost({ title, description, token })
    }

    return (
        <Spin spinning={isFetching}>
            <div style={{ marginBottom: 16 }}>
                <Button type="primary" onClick={onToggleModal}>
                    Create Post
                </Button>
                <span style={{ marginLeft: 8 }}>
                    {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
                </span>
            </div>
            <Table
                rowSelection={rowSelection}
                columns={columns}
                dataSource={post}
                rowKey="_id"
            />

            <Modal
                visible={isOpen}
                title="Title"
                onOk={handleOk}
                onCancel={onToggleModal}
                footer={null}
            >
                <PostModal handleOk={handleOk} onCancel={onToggleModal} />
            </Modal>
        </Spin>
    )
}

export default Post;