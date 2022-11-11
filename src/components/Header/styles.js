import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  container: {
    padding: `${theme.spacing(2)} ${theme.spacing(10)}`,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    alignContent: 'stretch',
    alignItems: 'flex-start',
    height: '60px',
  },
  item: {
    alignSelf: 'center',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    '& > *': {
      marginLeft: '0 20px',
    },
    [theme.breakpoints.down('xs')]: {
      '& > *': {
        margin: '6px',
      },
    },
    width: '100%',
  },
  lastDiv: {
    '& > *': {
      marginLeft: 'auto',
    },
  },
  logo: {
    width: '150px',
    [theme.breakpoints.down('xs')]: {
      width: '150px',
      height: 'auto',
    },
  },
  link: {
    color: '#545454',
    textDecoration: 'none',
    opacity: '0.64',
    transition: '.2s',
    '&:hover': {
      opacity: '1',
    },
  },
  bgHeader: {
    background: 'rgba(255,169,8,.7)',
    width: '100%',
  },
}));
