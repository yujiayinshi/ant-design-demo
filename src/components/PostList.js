/**
 * Created by HuangKai on 2016/12/24.
 */
import React, {PropTypes} from 'react';
import {Table, Popconfirm, Button} from 'antd';

const PostList = ({onDelete, posts}) => {
  const columns = [{
    title: 'Name',
    dataIndex: 'name'
  }, {
    title: 'Actions',
    render: (text, record) => {
      return (
        <Popconfirm title="Delete?" onConfirm={() => onDelete(record.id)}>
          <Button>Delete</Button>
        </Popconfirm>
      )
    }
  }];
  return (
    <Table
      dataSource={posts}
      columns={columns}/>
  )
};

PostList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired
};

export default PostList;
