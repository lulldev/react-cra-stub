import React from 'react';
import Menu from '../../components/menu';

export default class Posts extends React.Component {
  render() {
    const {
      bgColor,
      setBackgroundColor,
    } = this.props;
    return (
      <div>
        <Menu />
        <h1>Posts</h1>
        {/* <PostList> */}
      </div>
    );
  }
}
