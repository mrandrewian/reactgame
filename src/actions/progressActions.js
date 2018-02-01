import * as types from '../constants/actionTypes';

export function checkHeroLimit(heroTotal, farmCount) {
  return (heroTotal >= farmCount * 100);
}

export function checkCurrentLimit(current) {
  return current >= 100;
}

export function updateProgress(progressIncrementAmount) {
  return function(dispatch, getState){
    const hero1 = getState().progress.hero1;
    const hero2 = getState().progress.hero2;
    const hero3 = getState().progress.hero3;
    const hero4 = getState().progress.hero4;
    const heroTotal = hero1 + hero1 + hero3 + hero4;
    const farmCount = getState().progress.farmCount;
    const current = getState().progress.farmCount;
    if(checkHeroLimit(heroTotal, farmCount) || checkCurrentLimit(current)) {
      dispatch(resetProgress());
      dispatch(incrementFarmCount());
    } else {
      dispatch(incrementProgress(progressIncrementAmount));
    }
  }
}

export function tickProgress(progress, farmCount) {
  return {
    type: types.TICK_PROGRESS,
    progress: progress,
    farmCount
  };
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

export function incrementProgress(progress, farmCount) {
  return function(dispatch, getState){
    dispatch(incrementHero1Progress(7));
    dispatch(incrementHero2Progress(12));
    dispatch(incrementHero3Progress(8));
    dispatch(incrementHero4Progress(11));
  }
}

export function incrementHero1Progress(progress, farmCount) {
  return {
    type: types.INCREMENT_HERO1_PROGRESS,
    progress,
    farmCount
  };
}

export function incrementHero2Progress(progress, farmCount) {
  return {
    type: types.INCREMENT_HERO2_PROGRESS,
    progress,
    farmCount
  };
}

export function incrementHero3Progress(progress, farmCount) {
  return {
    type: types.INCREMENT_HERO3_PROGRESS,
    progress,
    farmCount
  };
}

export function incrementHero4Progress(progress, farmCount) {
  return {
    type: types.INCREMENT_HERO4_PROGRESS,
    progress,
    farmCount
  };
}

let timer = null;
let updatedIncrementValue = 0;
export function updateAutoIncrement(autoIncrementValue) {
  return function (dispatch) {
    updatedIncrementValue += autoIncrementValue;
    clearInterval(timer);
    timer = setInterval(() =>
    dispatch(tickProgress(updatedIncrementValue)), 1000);
  };
}
