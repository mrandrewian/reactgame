import {
  RECEIVE_UPGRADE_TREE
} from '../constants/actionTypes';
import initialState from './initialState';

export default function farmingReducer(state = initialState.upgradeTree, action) {

  switch(action.type) {
    case RECEIVE_UPGRADE_TREE:
      return action.upgradeTree;
    default:
      return state;
  }

}
