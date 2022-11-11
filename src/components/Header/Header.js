import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import SearchInput from '../SerachInput/SearchInput';
import useStyles from './styles';
import LogoYassir from '../../assests/images/Logo.svg';
import { useAuthData } from '../../contexts/authContext';

const Header = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { setIsTokenValid } = useAuthData();

  const handleLogout = ()=> {
    localStorage.removeItem('token');
    navigate('/login');   
    setIsTokenValid(false);
  };
  
  return (
    <div className={classes.bgHeader}>
      <div className={classes.container}>
        <div
          style={{ padding: 0, margin: 0, width: '100%' }}
          className={classes.item}
        >
          <img src={LogoYassir} alt="logo yassir" />
        </div>
        <div className={classes.item}>
          <SearchInput />
        </div>
        <div
          className={`${classes.item} ${classes.lastDiv}`}
          style={{ marginLeft: 'auto' }}
        >
          <div>
            <a href="/login" className={classes.link} onClick={() => handleLogout()}>
              Logout
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
