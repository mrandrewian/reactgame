import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as progressActions from '../../actions/progressActions';
import Button from '../common/Button';
import ListGroup from '../common/ListGroup';

class FarmingInterface extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      upgrades: []
    };

    this.updateProgress = this.updateProgress.bind(this);
    this.dualWield = this.dualWield.bind(this);
    this.triWield = this.triWield.bind(this);
  }

  updateProgress() {
    event.preventDefault();
    this.props.actions.updateProgress(20);
  }

  dualWield() {
    event.preventDefault();
    this.props.actions.startAutoIncrement(10);
    this.setState({dualWield: true});
    this.setState({upgrades: [...this.state.upgrades, 'dualWield']});
  }

  triWield() {
    event.preventDefault();
    this.props.actions.startAutoIncrement(20);
    this.setState({triWield: true});
    this.setState({upgrades: [...this.state.upgrades, 'triWield']});
  }

  render() {
    return (
      <div>
        <Button
          btnTypes="btn btn-primary btn-large"
          btnLabel="Fight!"
          onClick={this.updateProgress}
        />
        {this.props.farmCount >= 10 && !this.state.dualWield &&
          <Button
            btnTypes="btn btn-warning btn-large"
            btnLabel="Dual Wielding"
            onClick={this.dualWield}
          />
        }
        {this.props.farmCount >= 20 && !this.state.triWield &&
          <Button
            btnTypes="btn btn-danger btn-large"
            btnLabel="Tri Wielding!"
            onClick={this.triWield}
          />
        }
        <div className="enabled-upgrades">
          <h1>Enabled upgrades</h1>
          <ListGroup
            upgrades={this.state.upgrades}
            listGroupType="list-group-flush"
            />
        </div>
      </div>
    );
  }
}

FarmingInterface.propTypes = {
  farmCount: PropTypes.number,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    farmCount: state.progress.farmCount,
    dualWield: state.dualWield,
    triWield: state.triWield,
    upgrades: state.upgrades
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(progressActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FarmingInterface);
