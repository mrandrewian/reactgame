import {RECEIVE_HEROES} from '../constants/actionTypes';
import initialState from './initialState';

export default function heroesReducer(state = initialState.heroes, action) {

  switch(action.type) {
    case RECEIVE_HEROES:
      return action.heroes;
    default:
      return state;
  }

}
