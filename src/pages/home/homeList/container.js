import { connect } from 'react-redux';
import {  
  openHomeList,
  closeHomeList,
} from './actions';
import HomeList from './component';


const mapStateToProps = state => ({
  isOpen: state.home.homeList.isOpen,
});

const mapDispatchToProps = dispatch => ({
  openHomeList: () => dispatch(openHomeList()),
  closeHomeList: () => dispatch(closeHomeList()),
});

const homeList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeList);

export default homeList;
