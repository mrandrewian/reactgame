import { INCREMENT_PROGRESS} from '../constants/actionTypes';
import initialState from './initialState';

export default function progressReducer(state = initialState.progress, action) {

  switch(action.type) {
    case INCREMENT_PROGRESS:
      if(state >= 100) {
        return state = 0;
      } else {
        return state + action.progress;
      }
    default:
      return state;
  }

}
