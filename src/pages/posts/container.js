import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  fetchPosts,
} from './actions';
import Posts from './component';


const mapStateToProps = state => ({
  postsList: state.posts.postsPage.postsList,
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: bindActionCreators(fetchPosts, dispatch),
});

const postsPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Posts);

export default postsPage;
