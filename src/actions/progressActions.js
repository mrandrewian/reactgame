import * as types from '../constants/actionTypes';

export function incrementProgress(progress) {
  return {
    type: types.INCREMENT_PROGRESS,
    progress: progress
  };
}

let timer = null;
export function updateProgress() {
  return function (dispatch) {
    clearInterval(timer);
    timer = setInterval(() => dispatch(incrementProgress(15)), 1000);
  };
}
