import { combineReducers } from 'redux';
import {
  SET_COLOR,
} from './actions';
import homeList from './homeList/reducers';

const initialState = {
  bgColor: '#fff',
};

const homePage = (reduxState = initialState, action) => {
  switch (action.type) {
    case SET_COLOR:
      return {
        bgColor: action.bgColor,
      };
    default:
      return reduxState;
  }
};

export default combineReducers({
  homePage,
  homeList,
});
