import * as types from '../constants/actionTypes';
import fetch from 'cross-fetch';

export function getCurrentUpgrades(upgrades) {
  return {
    type: types.GET_CURRENT_UPGRADES,
    upgrades
  }
}

export function specUpgrade(upgrade) {
  return {
    type: types.SPEC_UPGRADE,
    upgrade
  };
}
