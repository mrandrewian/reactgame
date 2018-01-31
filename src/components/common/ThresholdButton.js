import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as progressActions from '../../actions/progressActions';
import * as farmingActions from '../../actions/farmingActions';
import * as upgradeTreeActions from '../../actions/upgradeTreeActions';
import Button from '../common/Button';
import ListGroup from '../common/ListGroup';

function checkPreReqs(preReqs, upgrades) {
  return preReqs.every(preReq => (upgrades.includes(preReq) || preReq == "none"));
}

function thresholdCheck(id, preReqs, cost, farmCount, upgrades) {
  // console.log("farmCount >= cost : ", farmCount >= cost);
  // console.log("!upgrades.includes(id) : ", !upgrades.includes(id));
  console.log("checkPreReqs(preReqs, upgrades) : ", checkPreReqs(preReqs, upgrades));
  return (farmCount >= cost) && !upgrades.includes(id) && checkPreReqs(preReqs, upgrades);
}

class ThresholdButton extends Component {
  constructor(props, context) {
    super(props, context);

    this.specUpgrade = this.specUpgrade.bind(this);
  }

  specUpgrade(id, multiplier) {
    event.preventDefault();
    this.props.progressActions.updateAutoIncrement(this.props.multiplier);
    this.props.farmingActions.specUpgrade(this.props.id);
  }

  render() {

    if(thresholdCheck(this.props.id, this.props.preReqs, this.props.cost, this.props.farmCount, this.props.upgrades)) {
      return (
        <button
          id={this.props.id}
          type="button"
          className={this.props.btnTypes}
          onClick={this.specUpgrade}
          value={this.props.btnLabel}
          >
          {this.props.btnLabel}
        </button>
      );
    } else {
      return null;
    }
  }
}

ThresholdButton.propTypes = {
  farmCount: PropTypes.number,
  progressActions: PropTypes.object.isRequired,
  farmingActions: PropTypes.object.isRequired,
  upgradeTree: PropTypes.array.isRequired,
  upgrades: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    farmCount: state.progress.farmCount,
    upgrades: state.farming.upgrades,
    dualWield: state.farming.upgrades.dualWield,
    triWield: state.farming.upgrades.triWield,
    upgradeTree: state.upgradeTree
  };
}

function mapDispatchToProps(dispatch) {
  return {
    progressActions: bindActionCreators(progressActions, dispatch),
    farmingActions: bindActionCreators(farmingActions, dispatch),
    upgradeTreeActions: bindActionCreators(upgradeTreeActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ThresholdButton);
