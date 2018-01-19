import {
  INCREMENT_PROGRESS,
  RESET_PROGRESS,
  INCREMENT_FARMCOUNT,
  INCREMENT_HERO1_PROGRESS,
  INCREMENT_HERO2_PROGRESS,
  INCREMENT_HERO3_PROGRESS,
  INCREMENT_HERO4_PROGRESS
} from '../constants/actionTypes';
import initialState from './initialState';

export default function progressReducer(state = initialState.progress, action) {

  switch(action.type) {
    case INCREMENT_PROGRESS:
      if((state.current * 4) >= 100) {
        return {
          ...state,
          current: 0,
          farmCount: state.farmCount + 1
        };
      } else {
        return {
          ...state,
          current: state.current + action.progress
        };
      }
    case RESET_PROGRESS:
      return {
        ...state,
        current: 0
      };
    case INCREMENT_FARMCOUNT:
      return {
        ...state,
        farmCount: state.farmCount + 1
      };
    case INCREMENT_HERO1_PROGRESS:
      if(state >= 100) {
        return state = 0;
      } else {
        return state + action.hero1Progress;
      }
    case INCREMENT_HERO2_PROGRESS:
      if(state >= 100) {
        return state = 0;
      } else {
        return state + action.hero2Progress;
      }
    case INCREMENT_HERO3_PROGRESS:
      if(state >= 100) {
        return state = 0;
      } else {
        return state + action.hero3Progress;
      }
    case INCREMENT_HERO4_PROGRESS:
      if(state >= 100) {
        return state = 0;
      } else {
        return state + action.hero4Progress;
      }
    default:
      return state;
  }

}
