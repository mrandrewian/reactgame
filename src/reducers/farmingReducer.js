import {
  SPEC_DUAL_WIELD,
  SPEC_TRI_WIELD,
  SPEC_UPGRADE,
  GET_CURRENT_UPGRADES
} from '../constants/actionTypes';
import initialState from './initialState';

export default function farmingReducer(state = initialState.upgrades, action) {

  switch(action.type) {
    case GET_CURRENT_UPGRADES:
      return {
        // TODO: Update this to pull from cache/cookies/db
        ...state,
        upgrades: []
      };
    case SPEC_UPGRADE:
      return {
        ...state,
        upgrades: [...state.upgrades, action.upgrade]
      };
    default:
      return state;
  }

}
