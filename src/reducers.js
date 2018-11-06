import { combineReducers } from 'redux';
import home from './pages/home/reducers';
import posts from './pages/posts/reducers';


export default combineReducers({
  home,
  posts,
});
