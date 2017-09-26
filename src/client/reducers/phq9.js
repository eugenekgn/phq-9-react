import {MARK_ANSWER} from '../actions/types';


export default (state = [], action = {}) => {
  console.log('reducer', action);
  switch (action.type) {
    case MARK_ANSWER:
      return Object.assign({}, state, action.answer);

    default:
      return state;
  }
}