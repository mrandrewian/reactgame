import {UPDATE_BOOTY} from '../constants/actionTypes';
import initialState from './initialState';

export default function heroesReducer(state = initialState.booty, action) {

  switch(action.type) {
    case UPDATE_BOOTY:
      return state + action.booty;
    default:
      return state;
  }

}
