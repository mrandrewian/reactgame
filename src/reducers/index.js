import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import heroesReducer from './heroesReducer';
import progressReducer from './progressReducer';
import worldTimeReducer from './worldTimeReducer';
import farmingReducer from './farmingReducer';
import bootyReducer from './bootyReducer';
import upgradeTreeReducer from './upgradeTreeReducer';

const rootReducer = combineReducers({
  heroes: heroesReducer,
  progress: progressReducer,
  upgradeTree: upgradeTreeReducer,
  worldTime: worldTimeReducer,
  booty: bootyReducer,
  farming: farmingReducer,
  routing: routerReducer
});

export default rootReducer;
