import React, { useState } from 'react';
// import CircularProgress from '@mui/material/CircularProgress';
import PropTypes from 'prop-types';

const Context = React.createContext(undefined);

export const useAuthData = () => React.useContext(Context);

const propTypes = {
  children: PropTypes.string.node,
};

const AuthProvider = ({ children }) => {

  const [isTokenValid, setIsTokenValid] = useState(false);

  const value = React.useMemo(
    () => ({
      isTokenValid,
      setIsTokenValid,
    }),
    [isTokenValid, setIsTokenValid],
  );
  return <Context.Provider value={value}>{children}</Context.Provider>;
};
AuthProvider.propTypes = propTypes;

export { AuthProvider, Context as AuthContext };
