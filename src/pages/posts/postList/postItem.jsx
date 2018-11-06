import React from 'react';
import {
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
} from 'reactstrap';


const PostItem = (props) => {
  const {
    title,
    description,
  } = props;
  return (
    <ListGroupItem>
      <ListGroupItemHeading>{title}</ListGroupItemHeading>
      <ListGroupItemText>{description}</ListGroupItemText>
    </ListGroupItem>
  );
}

export default PostItem;