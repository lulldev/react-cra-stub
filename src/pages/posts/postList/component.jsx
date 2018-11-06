import React from 'react';
import { ListGroup } from 'reactstrap';
import PostItem from './postItem';


const PostList = (props) => {
  const { list } = props;
  return (
    <ListGroup>
      {
        list.map(listItem => (<PostItem title={listItem.title} description={listItem.description} />))
      }
    </ListGroup>
  );
}

export default PostList;