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
      <div>
        <div className="progress">
          <div className="progress-bar bg-info" role="progressbar" style={{width: progress.current +'%'}} aria-valuenow={progress.current} aria-valuemin="0" aria-valuemax="100" />
          <div className="progress-bar bg-success" role="progressbar" style={{width: progress.current +'%'}} aria-valuenow={progress.current} aria-valuemin="0" aria-valuemax="100" />
          <div className="progress-bar bg-danger" role="progressbar" style={{width: progress.current +'%'}} aria-valuenow={progress.current} aria-valuemin="0" aria-valuemax="100" />
          <div className="progress-bar bg-warning" role="progressbar" style={{width: progress.current +'%'}} aria-valuenow={progress.current} aria-valuemin="0" aria-valuemax="100" />
        </div>
        <div className="farmCount">
          <p>Farm Count: {progress.farmCount}</p>
        </div>
      </div>
    );
  }
}

ProgressDisplay.propTypes = {
  progress: PropTypes.object.isRequired,
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
