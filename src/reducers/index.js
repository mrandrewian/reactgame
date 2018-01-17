import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import heroesReducer from './heroesReducer';

const rootReducer = combineReducers({
  heroes: heroesReducer,
  routing: routerReducer
});

export default rootReducer;
