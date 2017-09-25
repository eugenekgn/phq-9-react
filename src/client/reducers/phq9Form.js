import shortid from 'shortid';
import {MARK_ANSWER} from '../actions';

const initialState = {};

export default (state = [], action = {}) => {
  switch (action.type) {
    case MARK_ANSWER:
      return [


      ];

    default:
      return state;
  }
}