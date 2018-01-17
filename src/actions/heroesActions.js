import * as types from '../constants/actionTypes';
import fetch from 'cross-fetch';
import {getFormattedDateTime} from '../utils/dates';

export function receiveHeroes(heroes) {
  return {
    type: types.RECEIVE_HEROES,
    dateModified: getFormattedDateTime(),
    heroes: heroes.heroes
  };
}

export function getHeroes() {
  return function (dispatch) {
    return fetch('../api/heroesDb.json')
      .then(
        response => response.json(),
        error => console.log('An error occurred', error)
      )
      .then(
        json => dispatch(receiveHeroes(json))
      );
  };
}
