import * as types from '../constants/actionTypes';
// import {getFormattedDateTime} from '../utils/dates';

export function tickWorldTime(worldTime) {
 return {
   type: types.TICK_WORLDTIME,
   worldTime
 };
}

let timer = null;
export function startWorldTime() {
  return function (dispatch) {
    clearInterval(timer);
    timer = setInterval(() => dispatch(tickWorldTime()), 1000);
  };
}
