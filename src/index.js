/* eslint-disable import/default */
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import configureStore, { history } from './store/configureStore';
import Root from './components/Root';
import {getHeroes} from './actions/heroesActions';
import {getUpgradeTree} from './actions/upgradeTreeActions';
import {startWorldTime} from './actions/worldTimeActions';
import {getBooty} from './actions/bootyActions';
import {getCurrentUpgrades} from './actions/farmingActions';
import './styles/styles.scss';
import './styles/rpg-awesome.min.css'
require('./favicon.ico');

const store = configureStore();
store.dispatch(getHeroes());
store.dispatch(getUpgradeTree());
store.dispatch(startWorldTime());
store.dispatch(getBooty());
store.dispatch(getCurrentUpgrades());

render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./components/Root', () => {
    const NewRoot = require('./components/Root').default;
    render(
      <AppContainer>
        <NewRoot store={store} history={history} />
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
