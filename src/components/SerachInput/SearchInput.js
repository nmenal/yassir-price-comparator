import React, { useEffect } from 'react';
import { FormControl, InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import useStyles from './styles';
import { useSubmit } from '../../hooks/useSubmit';
import { useProducts } from '../../contexts/productsContext';

const SearchInput = () => {
  const classes = useStyles();

  const { setProducts, setZoom } = useProducts();

  const [searchedItem, setSearchedItem] = React.useState('');

  React.useEffect(() => {
    console.log({ searchedItem });
  }, [searchedItem]);

  const {
    isSuccess: successSearchProduct,
    data: searchProductData,
    mutate: mutateSearchProduct,
  } = useSubmit({
    path: `/product/search?input=${searchedItem}`,
    method: 'get',
  });

  useEffect(() => {
    if (successSearchProduct) {
      setProducts(searchProductData?.data?.products);
      setZoom(15);
    }
  }, [successSearchProduct]);

  const location = {
    lat: 36.45663,
    lng: 5.44533,
  };

  return (
    <FormControl style={{ width: '100%' }}>
      <TextField
        className={classes.searchInput}
        style={{ width: '100%' }}
        size="medium"
        variant="outlined"
        fullWidth
        onChange={(e) => {
          setSearchedItem(e.target.value);
        }}
        InputProps={{
          style: { backgroundColor: 'white' },
          endAdornment: (
            <InputAdornment
              position="end"
              className={classes.SearchButton}
              onClick={() => mutateSearchProduct({ location })}
              style={{ cursor: 'pointer' }}
            >
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </FormControl>
  );
};
export default SearchInput;
