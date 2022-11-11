import * as React from 'react';
import { FormControl, InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import useStyles from './styles';

const SearchInput = () => {
  const classes = useStyles();
  const [searchedItem, setSearchedItem] = React.useState('');

  React.useEffect(() => {
    console.log({ searchedItem });
  }, [searchedItem]);

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
              onClick={() => console.log('searching clicked')}
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
