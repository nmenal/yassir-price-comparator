import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  Card: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '120px',
    height: '114px',
    padding: '20px',
    margin: '10px',
    '&:hover': {
      backgroundColor: 'rgb(206,206,206)',
    },
  },
  Cards: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    paddingLeft: theme.spacing(25),
    paddingRight: theme.spacing(25),
    },
}));
