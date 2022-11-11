import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    padding: '30px',
    position: 'absolute',
    left: '50%',
    top: '50%',
    textAlign: 'center',
    transform: 'translate(-50%, -50%)',
  },
  button: {
    padding: '12px',
    width: '100%',
    background: '#fe7d00',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    fontSize: '18px;',
    marginTop: '10px',
    cursor: 'pointer',
  },
  disabledButton: {
    // backgroundColor: theme.palette.background.paper, // '#cbcbcb',
    padding: '12px',
    width: '100%',
    border: 'none',
    borderRadius: '10px',
    fontSize: '18px;',
    marginTop: '10px',
    backgroundColor: '#cbcbcb',
    color: '#8c8c8c',
  },
  card: {
    display: 'block',
    flexGrow: 1,
    boxShadow: '0 3px 8px 0 rgba(0, 0, 0, 0.16)',
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '8px',
    flex: '1',
    margin: '0px',
    width: '310px',
    textAlign: 'left',
    [theme.breakpoints.down('xs')]: {
      width: '250px',
    },
  },
  formControl: {
    display: 'inline-block',
    verticalAlign: 'middle',
    marginLeft: '12px',
    marginRight: '16px',
    '& .MuiIconButton-root': {
      padding: '0',
      paddingRight: '6px',
    },
  },
  bgHeader: {
    background: '#F7F7F7',
    width: '100%',
  },
  container: {
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    alignContent: 'stretch',
    alignItems: 'flex-start',
    height: '50px',
  },
  item: {
    alignSelf: 'center',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    '& > *': {
      margin: '0 20px',
    },
    [theme.breakpoints.down("xs")]: {
      '& > *': {
        margin: '6px',
      },
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
  innerWrapper: {
    width: `calc(100% - 40px)`,
    background: theme.palette.background.paper,
  },
  loader: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
  },
  textSecondary: {
    margin: '16px 0',
    color: theme.palette.text.secondary,
  },
  accept: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: '10px 0',
    // margin: ${props => props.margin},
    // & .border {
    //     border-right: 3px solid gray,
    //     margin-left: 14px,
    //     flex: 1,
    //     margin-right: 20px,
    // },
    // width: ${props => props.width},
  },
}));
