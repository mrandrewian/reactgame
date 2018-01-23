/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import Header from './common/Header';
import HomePage from './Home/HomePage';
import StatsPage from './Stats/StatsPage';
import UpgradeTreePage from './UpgradeTree/UpgradeTreePage';
import PatternLibraryPage from './PatternLibrary/PatternLibraryPage';

class App extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/stats" component={StatsPage} />
          <Route path="/upgrade-tree" component={UpgradeTreePage} />
          <Route path="/pattern-library" component={PatternLibraryPage} />
        </Switch>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
