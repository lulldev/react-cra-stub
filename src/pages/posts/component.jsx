import React from 'react';
import Menu from '../../components/menu';
import PostList from './postList/component';


export default class Posts extends React.Component {
  componentWillMount() {
    const { fetchPosts } = this.props;
    fetchPosts();
  }
  render() {
    const { postsList } = this.props;
    return (
      <div>
        <Menu />
        <h1>Posts</h1>
        <PostList list={postsList} />
      </div>
    );
  }
}
