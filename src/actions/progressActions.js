import * as types from '../constants/actionTypes';

export function incrementProgress(progress, farmCount) {
  return {
    type: types.INCREMENT_PROGRESS,
    progress: progress,
    farmCount
  };
}

export function updateProgress(progressIncrementAmount) {
  return function(dispatch, getState){
    if((getState().progress.current*4)>= 100) {
      dispatch(resetProgress());
      dispatch(incrementFarmCount());
    } else {
      dispatch(incrementProgress(progressIncrementAmount));
    }
  }
}

export function resetProgress(progress) {
  return {
    type: types.RESET_PROGRESS,
    progress
  };
}

export function incrementFarmCount(farmCount) {
  return {
    type: types.INCREMENT_FARMCOUNT,
    farmCount
  };
}

//TODO: Update progress to indicate for each hero

// export function incrementProgress(progress) {
//   incrementHero1Progress(7);
//   incrementHero1Progress(12);
//   incrementHero1Progress(8);
//   incrementHero1Progress(11);
// }

export function incrementHero1Progress(progress) {
  return {
    type: types.INCREMENT_HERO1_PROGRESS,
    hero1Progress: progress
  };
}

export function incrementHero2Progress(progress) {
  return {
    type: types.INCREMENT_HERO2_PROGRESS,
    hero2Progress: progress
  };
}

export function incrementHero3Progress(progress) {
  return {
    type: types.INCREMENT_HERO3_PROGRESS,
    hero3Progress: progress
  };
}

export function incrementHero4Progress(progress) {
  return {
    type: types.INCREMENT_HERO4_PROGRESS,
    hero4Progress: progress
  };
}

let timer = null;
let updatedIncrementValue = 0;
export function updateAutoIncrement(autoIncrementValue) {
  return function (dispatch) {
    updatedIncrementValue += autoIncrementValue;
    clearInterval(timer);
    timer = setInterval(() =>
    dispatch(updateProgress(updatedIncrementValue)), 1000);
  };
}
