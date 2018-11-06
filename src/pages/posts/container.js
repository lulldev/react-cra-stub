import { connect } from 'react-redux';
import { setBackgroundColor } from './actions';
import Posts from './component';


const mapStateToProps = state => ({
  // bgColor: state.home.homePage.bgColor,
});

const mapDispatchToProps = dispatch => ({
  // setBackgroundColor: (color) => dispatch(setBackgroundColor(color)),
});

const postsPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Posts);

export default postsPage;
