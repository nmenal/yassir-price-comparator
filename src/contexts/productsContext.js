import React from 'react';
// import CircularProgress from '@mui/material/CircularProgress';
import PropTypes from 'prop-types';

const Context = React.createContext(undefined);

export const useProducts = () => React.useContext(Context);

const propTypes = {
  children: PropTypes.string.node,
};

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = React.useState([]);
  const [zoom, setZoom] = React.useState(18);

  const value = React.useMemo(
    () => ({
      products,
      zoom,
      setProducts,
      setZoom,
    }),
    [products, zoom, setProducts, setZoom],
  );
  return <Context.Provider value={value}>{children}</Context.Provider>;
};
ProductsProvider.propTypes = propTypes;

export { ProductsProvider, Context as ProductsContext };
