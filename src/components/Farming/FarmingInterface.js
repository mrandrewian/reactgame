import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as progressActions from '../../actions/progressActions';
import * as farmingActions from '../../actions/farmingActions';
import * as upgradeTreeActions from '../../actions/upgradeTreeActions';
import Button from '../common/Button';
import ThresholdButton from '../common/ThresholdButton';
import ListGroup from '../common/ListGroup';

class FarmingInterface extends Component {
  constructor(props, context) {
    super(props, context);

    this.updateProgress = this.updateProgress.bind(this);
    this.specUpgrade = this.specUpgrade.bind(this);
  }

  updateProgress() {
    event.preventDefault();
    this.props.progressActions.updateProgress(20);
  }

  specUpgrade(id, multiplier) {
    event.preventDefault();
    // this.props.progressActions.updateProgress(multiplier);
    this.props.farmingActions.specUpgrade(upgrade.id);
  }

  render() {

    return (
      <div>
        <div className="upgradeButtons">
            {this.props.upgradeTree.map(upgrade =>
              <ThresholdButton
                id={upgrade.id}
                multiplier={upgrade.multiplier}
                btnTypes="btn btn-warning btn-large"
                btnLabel={upgrade.upgrade}
                onClick={this.specUpgrade}
                preReqs={upgrade.preReqs.split(',')}
                cost={upgrade.cost}
                farmCount={this.props.farmCount}
                upgrades={this.props.upgrades}
              />
            )}
        </div>
        <Button
          btnTypes="btn btn-primary btn-large"
          btnLabel="Fight!"
          onClick={this.updateProgress}
        />
        <div className="enabled-upgrades">
          <h1>Enabled upgrades</h1>
          <ListGroup
            upgrades={this.props.upgrades}
            listGroupType="list-group-flush"
            />
        </div>
      </div>
    );
  }
}

FarmingInterface.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(FarmingInterface);
