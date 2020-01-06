import React,{ useState,useContext } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import app from './auth.js';
import  { Redirect } from 'react-router-dom'
import { withRouter } from 'react-router'
import { AuthContext } from './authDetail.jsx';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignUp = ()=> {
  const classes = useStyles();
  const [state, setState] = useState({
    email: "",
    password: "",
    error:"",
  });
  const handleSignup = (event)=>{
    event.preventDefault();
    try{
        app
        .auth()
        .createUserWithEmailAndPassword(state.email,state.password)
        
    }catch(error){
        setState({...state,error : error.message})
    }
}
//   const handleSignup = useCallback(async event =>{
//       event.preventDefault();
//       try{
//           console.log(state.email)
//         //   await app
//         //   .auth()
//         //   .createUserWithEmailAndPassword(email.value,password.value);
//         //   history.push("/");
//       }catch(error){
//             setState({...state,error : error.message});
//       }
//   },[history]);

   const emailReg=(e)=>{
    const emailentered=e.target.value;
    setState({ ...state,email: emailentered });
  }

  const passwordReg=(e)=>{
    const passwordentered=e.target.value;   
    setState({ ...state, password: passwordentered });
  }

  const {currentUser}=useContext(AuthContext);

  if(currentUser){
    return<Redirect to="/" />;
  }
  else{
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            {/* <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid> */}
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={emailReg}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={passwordReg}
              />
            </Grid>
            <Grid item xs={12}>
                <div>{state.error}</div>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSignup}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
      </Box>
    </Container>
  );
}
}

export default withRouter(SignUp);