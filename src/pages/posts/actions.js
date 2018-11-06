export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';

const mockPostsJSONData = {
  data: [
    { id: 1, title: 'Post number 1', description: 'Information'},
    { id: 2, title: 'Post number 2', description: 'Information about it'},
  ]
};

function requestPosts() {
  return {
    type: REQUEST_POSTS,
  };
}

function receivePosts(jsonData) {
  return {
    type: RECEIVE_POSTS,
    posts: jsonData.data,
    receivedAt: Date.now()
  };
}

export function fetchPosts() {
  return function(dispatch) {
    dispatch(requestPosts());
    setTimeout(() => {
      dispatch(receivePosts(mockPostsJSONData));
    }, 2000);
  };
}
