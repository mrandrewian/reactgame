import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import heroesReducer from './heroesReducer';
import progressReducer from './progressReducer';
import worldTimeReducer from './worldTimeReducer';
import bootyReducer from './bootyReducer';

const rootReducer = combineReducers({
  heroes: heroesReducer,
  progress: progressReducer,
  worldTime: worldTimeReducer,
  booty: bootyReducer,
  routing: routerReducer
});

export default rootReducer;
