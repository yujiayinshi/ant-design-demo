/**
 * Created by HuangKai on 2016/12/24.
 */
import React from 'react';
import {connect} from 'dva';
import PostList from '../components/PostList';

const Posts = ({dispatch, posts}) => {
  function handleDelete(id) {
    dispatch({
      type: 'posts/delete',
      playload: id
    });
  }

  return (
    <div>
      <h2>List of Posts</h2>
      <PostList onDelete={handleDelete} posts={posts}/>
    </div>
  )
};

export default connect(({posts}) => ({
  posts
}))(Posts);
