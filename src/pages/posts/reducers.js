import { combineReducers } from 'redux';
import {
  REQUEST_POSTS,
  RECEIVE_POSTS,
} from './actions';

const initialState = {
  postsList: [],
};

const postsPage = (reduxState = initialState, action) => {
  switch (action.type) {
    case REQUEST_POSTS:
      return {
        postsList: [],
      };
    case RECEIVE_POSTS:
      return {
        postsList: action.posts,
      };
    default:
      return reduxState;
  }
};

export default combineReducers({
  postsPage,
});
