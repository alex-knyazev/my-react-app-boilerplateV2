import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.scss';

const Avengers = (props) => {
  const { data, isWaiting, isError } = props;
  const isEmptyList = !data.length;

  if (isError) {
    return <p>error in getting of averanges data</p>;
  }

  if (isWaiting) {
    return <p>wait for averanges data</p>;
  }

  if (isEmptyList) {
    return <p>there is no data about averanges</p>;
  }

  return (
    <div className={styles.avengers}>
      <ul>{data.map(averange => <li key={averange}>{averange}</li>)}</ul>
    </div>
  );
};

Avengers.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
  isWaiting: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
};

export default Avengers;
