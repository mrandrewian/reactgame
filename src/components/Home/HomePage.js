import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as heroesActions from '../../actions/heroesActions';
// import heroes from '../../api/heroesDb';
import BootyDisplay from '../Booty/BootyDisplay';
import HeroesDisplay from '../Heroes/HeroesDisplay';
import ProgressDisplay from '../Progress/ProgressDisplay';
import FarmingInterface from '../Farming/FarmingInterface';

class HomePage extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const {heroes} = this.props;

    return (
      <div className="container">
        <h1>Booty</h1>
        <BootyDisplay />
        <h1>Heroes</h1>
        <HeroesDisplay heroes={heroes} />
        <h1>Progress</h1>
        <ProgressDisplay />
        <h1>Farming Interface</h1>
        <div className="buttons">
          <FarmingInterface />
        </div>
      </div>
    );
  }
}

HomePage.propTypes = {
  heroes: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    heroes: state.heroes
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(heroesActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
