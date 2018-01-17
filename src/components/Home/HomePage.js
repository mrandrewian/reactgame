import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as heroesActions from '../../actions/heroesActions';
// import heroes from '../../api/heroesDb';
import HeroesDisplay from '../Heroes/HeroesDisplay';

class HomePage extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const {heroes} = this.props;

    return (
      <div>
        <h1>Heroes</h1>
          <HeroesDisplay heroes={heroes} />
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
