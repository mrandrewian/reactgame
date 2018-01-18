import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as progressActions from '../../actions/progressActions';

class ProgressDisplay extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const {progress} = this.props;

    return (
      <div className="progress">
        <div className="progress-bar" role="progressbar" style={{width: progress+'%'}} aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100" />
      </div>
    );
  }
}

ProgressDisplay.propTypes = {
  progress: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    progress: state.progress
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(progressActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProgressDisplay);
