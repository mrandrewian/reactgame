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
    const hero1adjusted = (progress.hero1 + progress.current * 7/38) / progress.farmCount;
    const hero2adjusted = (progress.hero2 + progress.current * 12/38) / progress.farmCount;
    const hero3adjusted = (progress.hero3 + progress.current * 8/38) / progress.farmCount;
    const hero4adjusted = (progress.hero4 + progress.current * 11/38) / progress.farmCount;

    return (
      <div>
        <div className="progress">
          <div className="progress-bar bg-info" role="progressbar" style={{width: hero1adjusted +'%'}} aria-valuenow={hero1adjusted} aria-valuemin="0" aria-valuemax="100" />
          <div className="progress-bar bg-success" role="progressbar" style={{width: hero2adjusted +'%'}} aria-valuenow={hero1adjusted} aria-valuemin="0" aria-valuemax="100" />
          <div className="progress-bar bg-danger" role="progressbar" style={{width: hero3adjusted +'%'}} aria-valuenow={hero1adjusted} aria-valuemin="0" aria-valuemax="100" />
          <div className="progress-bar bg-warning" role="progressbar" style={{width: hero4adjusted +'%'}} aria-valuenow={hero1adjusted} aria-valuemin="0" aria-valuemax="100" />
        </div>
        <div className="farmCount">
          <p>Farm Count: {progress.farmCount}</p>
        </div>
        <div className="hpCount">
          <p>Enemy HP: {progress.farmCount * 100}</p>
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
