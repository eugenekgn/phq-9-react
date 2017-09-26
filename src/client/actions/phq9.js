import {MARK_ANSWER} from './actionTypes';

export const setAnswer = (answer) => {
  return {
    type: MARK_ANSWER,
    answer
  }
};