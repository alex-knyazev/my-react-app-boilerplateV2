import React from 'react';
import { hot } from 'react-hot-loader';
import './app.css';

import styles from './index.scss';

const App = () => (
  <div className={styles.app}>
    <p>React here!!</p>
  </div>
);
export default hot(module)(App);
