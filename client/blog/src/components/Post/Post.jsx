import React, { useEffect } from 'react';
import { Button, Spin, Table } from 'antd';
import { useState } from 'react';

const Post = (props) => {
    const { post, isFetching, } = props;
    const { getAllPost } = props;
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [loading, setLoading] = useState(false);

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

    const start = () => {
        setLoading(true);
        setTimeout(() => {
            setSelectedRowKeys([]);
            setLoading(false)
        }, 1000)
    }

    useEffect(() => {
        clearTimeout(start)
    })

    useEffect(() => {
        getAllPost();
    }, []);

    return (
        <Spin spinning={isFetching}>
            <div style={{ marginBottom: 16 }}>
                <Button type="primary" onClick={start} disabled={!hasSelected} loading={loading}>
                    Reload
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
        </Spin>
    )
}

export default Post;