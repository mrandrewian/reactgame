import * as types from '../constants/actionTypes';
import faker from 'faker';

export function updateBooty(booty) {
  return {
    type: types.UPDATE_BOOTY,
    booty
  };
}

let randNum = faker.random.number();
export function getBooty() {
  return function (dispatch) {
    dispatch(updateBooty(randNum));
  };
}
