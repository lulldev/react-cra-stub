import {
  OPEN,
  CLOSE,
} from './actions';

const initialState = {
  isOpen: true,
};

const homeList = (reduxState = initialState, action) => {
  switch (action.type) {
    case OPEN:
      return Object.assign({}, reduxState, { isOpen: true });
    case CLOSE:
      return Object.assign({}, reduxState, { isOpen: false });
    default:
      return reduxState;
  }
};

export default homeList;
