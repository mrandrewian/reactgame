import {
  INCREMENT_PROGRESS,
  RESET_PROGRESS,
  INCREMENT_FARMCOUNT,
  INCREMENT_HERO1_PROGRESS,
  INCREMENT_HERO2_PROGRESS,
  INCREMENT_HERO3_PROGRESS,
  INCREMENT_HERO4_PROGRESS,
  TICK_PROGRESS
} from '../constants/actionTypes';
import initialState from './initialState';

export default function progressReducer(state = initialState.progress, action) {

  switch(action.type) {
    case TICK_PROGRESS:
      return {
        ...state,
        current: state.current + action.progress
      };
    case RESET_PROGRESS:
      return {
        ...state,
        current: 0,
        hero1: 0,
        hero2: 0,
        hero3: 0,
        hero4: 0
      };
    case INCREMENT_FARMCOUNT:
      return {
        ...state,
        farmCount: state.farmCount + 1
      };
    case INCREMENT_HERO1_PROGRESS:
      return {
        ...state,
        hero1: state.hero1 + action.progress
      };
    case INCREMENT_HERO2_PROGRESS:
      return {
        ...state,
        hero2: state.hero2 + action.progress
      };
    case INCREMENT_HERO3_PROGRESS:
      return {
        ...state,
        hero3: state.hero3 + action.progress
      };
    case INCREMENT_HERO4_PROGRESS:
      return {
        ...state,
        hero4: state.hero4 + action.progress
      };
    default:
      return state;
  }

}
