import {MARK_ANSWER} from '../actions/actionTypes';

export default (state = [], action = {}) => {
  switch (action.type) {
    case MARK_ANSWER:
      return Object.assign({}, state, action.answer);

    default:
      return state;
  }
}