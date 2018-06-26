import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import AvengersC from 'com-s/Avengers';

import avengersActions from '@/actionCreators/avengers';

class Avengers extends Component {
  componentDidMount = () => {
    this.props.fetchAvengers();
  };

  render() {
    const { avengers } = this.props;
    const { data, isWaiting, isError } = avengers;
    return <AvengersC data={data} isWaiting={isWaiting} isError={isError} />;
  }
}

Avengers.propTypes = {
  avengers: PropTypes.shape({
    isError: PropTypes.bool.isRequired,
    isWaiting: PropTypes.bool.isRequired,
    data: PropTypes.arrayOf(PropTypes.string)
  }).isRequired,
  fetchAvengers: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  avengers: state.avengers
});

const mapDispatchToProps = {
  fetchAvengers: avengersActions.fetchAvengers
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Avengers);
