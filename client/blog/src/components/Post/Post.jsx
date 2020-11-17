import React, { useEffect } from 'react';
import { Button, Spin, Modal, Table, Popconfirm } from 'antd';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import PostModal from '../Modal/Post';
import { TableWrapper } from './styles';
import { ButtonFooterWrapper } from '../Modal/styles';
import { DELETE_POST } from '../../actions/index';

const { Column } = Table;
const Post = (props) => {
    const { post, isFetching, createPost, token, updatePost, getAllPost } = props;
    const [isCreate, setIsCreate] = useState(false);
    const [isUpdate, setIsUpdate] = useState(false);
    const [postDetail, setPostDetail] = useState({});
    const [selectedId, setSelectedId] = useState('');

    //use Dispatch
    const dispatch = useDispatch();

    // create post function
    const handleCreate = () => {
        setIsCreate(!isCreate);
    }
    // update post function 
    const handleUpdatePost = (record) => {
        setIsUpdate(!isUpdate);
        setPostDetail(record)
        setSelectedId(record._id)
    }

    useEffect(() => {
        getAllPost(token);
    }, []);


    const onToggleModal = () => {
        if (isCreate) setIsCreate(!isCreate);
        if (isUpdate) setIsUpdate(!isUpdate);
    }

    const handleOk = (values) => {
        const { title, description } = values;
        if (isCreate) createPost({ title, description, token }, onToggleModal());
        if (isUpdate) updatePost({ selectedId, title, description, token }, onToggleModal())
    }

    const handleDelete = (id) => dispatch({ type: DELETE_POST, id, token })

    return (
        <Spin spinning={isFetching}>
            <Button type="primary" onClick={handleCreate}>
                Create Post
                    </Button>
            <TableWrapper
                dataSource={post}
                pagination={
                    {
                        pageSize: 8,
                        position: ['bottomLeft'],
                    }
                }
            >
                <Column title="Title" dataIndex="title" key="title" />
                <Column title="Description" dataIndex="description" key="description" />
                <Column
                    title="Action"
                    key="action"
                    render={(text, record) => (
                        <ButtonFooterWrapper isPost>
                            <Button type='primary' onClick={() => handleUpdatePost(record)}>Update</Button>
                            <Button type="danger">
                                <Popconfirm placement="topLeft" title={`Are you sure delete ${record.title} ?`} okText="Yes" onConfirm={() => handleDelete(record._id)} cancelText="No">
                                    Delete
                                </Popconfirm>
                            </Button>

                        </ButtonFooterWrapper>
                    )}
                />
            </TableWrapper>

            <Modal
                visible={isUpdate || isCreate}
                title={isUpdate ? 'Update Post' : "Create Post"}
                onOk={handleOk}
                onCancel={onToggleModal}
                footer={null}
                destroyOnClose={true}
            >
                <PostModal handleOk={handleOk} onCancel={onToggleModal} isUpdate={isUpdate} isCreate={isCreate} postDetail={postDetail} />
            </Modal>
        </Spin>
    )
}

export default Post;