import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as bootyActions from '../../actions/bootyActions';
// import * as progressActions from '../../actions/progressActions';

class BootyDisplay extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const bootyTotal = this.props.booty + this.props.farmCount;

    return (
      <div>
        <div className="card">
          <div className="card-body">
            <div>Booty: {this.props.booty} + {this.props.farmCount} = {bootyTotal}</div>
          </div>
        </div>
      </div>
    );
  }
}

BootyDisplay.propTypes = {
  booty: PropTypes.number,
  farmCount: PropTypes.number,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    booty: state.booty,
    farmCount: state.progress.farmCount
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(bootyActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BootyDisplay);
