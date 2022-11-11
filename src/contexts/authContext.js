import React, { useState } from 'react';
// import CircularProgress from '@mui/material/CircularProgress';
import PropTypes from 'prop-types';

const Context = React.createContext(undefined);

export const useAuthData = () => React.useContext(Context);

const propTypes = {
  children: PropTypes.string.node,
};

const AuthProvider = ({ children }) => {
  // const data = useAuth({
  //   token: `${localStorage.getItem('token')}`,
  // });

  const [isTokenValid, setIsTokenValid] = useState(false);

  // useEffect(() => {
  //   setIsTokenValid(data);
  // }, [data]);

  const value = React.useMemo(
    () => ({
      isTokenValid,
      setIsTokenValid,
    }),
    [isTokenValid, setIsTokenValid],
  );
  // if (isFetching) {
  //   return (
  //     <div
  //       style={{
  //         display: 'flex',
  //         alignItems: 'center',
  //         justifyContent: 'center',
  //       }}
  //     >
  //       <CircularProgress
  //         size={45}
  //         style={{
  //           color: '#FF7D00',
  //         }}
  //       />
  //     </div>
  //   );
  // }
  return <Context.Provider value={value}>{children}</Context.Provider>;
};
AuthProvider.propTypes = propTypes;

export { AuthProvider, Context as AuthContext };
