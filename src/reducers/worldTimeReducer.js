import {TICK_WORLDTIME} from '../constants/actionTypes';
import initialState from './initialState';

export default function worldTimeReducer(state = initialState.worldTime, action) {

  switch(action.type) {
    case TICK_WORLDTIME:
      return state + 1;
    default:
      return state;
  }

}
