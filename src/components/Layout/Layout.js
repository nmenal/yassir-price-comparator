import * as React from 'react';
import PropTypes from 'prop-types';
import useStyles from './styles';
import Header from '../Header/Header';

const propTypes = {
  children: PropTypes.string.node,
};

const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Header />
      <div>{children}</div>
    </div>
  );
};
Layout.propTypes = propTypes;

export default Layout;
