import * as types from '../constants/actionTypes';
import fetch from 'cross-fetch';

export function receiveUpgradeTree(upgrades) {
  return {
    type: types.RECEIVE_UPGRADE_TREE,
    upgradeTree: upgrades.upgradeTree
  };
}

export function getUpgradeTree() {
  return function (dispatch) {
    return fetch('../api/upgradeTree.json')
      .then(
        response => response.json(),
        error => console.log('An error occurred', error)
      )
      .then(
        json => dispatch(receiveUpgradeTree(json))
      );
  };
}
