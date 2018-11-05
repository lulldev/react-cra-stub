import { connect } from 'react-redux';
import { setBackgroundColor } from './actions';
import Home from './component';


const mapStateToProps = state => ({
  bgColor: state.home.homePage.bgColor,
});

const mapDispatchToProps = dispatch => ({
  setBackgroundColor: (color) => dispatch(setBackgroundColor(color)),
});

const homePage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

export default homePage;
