import {MARK_ANSWER} from './types';

export const setAnswer = (answer) => {
  console.log('action ', answer);
  return {
    type: MARK_ANSWER,
    answer
  }
};