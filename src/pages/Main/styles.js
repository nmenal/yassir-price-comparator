import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  Card: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '206px',
    height: '116px',
    padding: '20px',
    margin: '10px',
    '&:hover': {
      backgroundColor: 'rgb(206,206,206)',
    },
  },
  Cards: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  content: {
    marginLeft: 0,
    paddingTop: 20,
    marginTop: 56,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: '2.5rem',
    minHeight: '85vh',
  },
  innerWrapper: {
    width: `calc(100% - 40px)`,
  },
  tab: {
    minWidth: 230,
    width: 230,
    '& .MuiTab-root': {
      alignItems: 'flex-start',
    },
  },
  project: {
    backgroundColor: theme.palette.background.paper,
    paddingLeft: '10px',
  },
  title: {
    margin: '15px 0px !important',
    textAlign: 'left',
  },
  button: {
    margin: '0',
    textAlign: 'right',
  },
  EditButton: {
    cursor: 'pointer',
    '&:hover': {
      color: '#000',
    },
  },
  Grid: {
    alignItems: 'center',
  },
  container:{
    width:'100%',
  }
}));
