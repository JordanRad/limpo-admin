import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
    "& .Mui-checked": {
      color: theme.palette.primary.dark,
    },
    "& .MuiFormLabel-root.Mui-focused": {
      color: theme.palette.primary.dark
    },
    "& .MuiInput-underline:after": {
      borderColor: theme.palette.primary.dark,
    }
  },
  image: {
    backgroundImage: "url('./login.jpg')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.dark,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    backgroundColor: theme.palette.primary.dark,
    margin: theme.spacing(3, 0, 2),
    color: 'white'
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '2em',
  },

  button: {
    backgroundColor: theme.palette.primary.dark,
    color: "white",
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.dark
    },
    margin: "10px",
    marginLeft: "auto"
  }
}));

export default function SignInSide() {

  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Вход
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Имейл адрес"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Парола"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              className={classes.input}
              color={classes.input}
              control={<Checkbox value="remember" color="primary" />}
              label="Запомни"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              Продължи
            </Button>
            <Box mt={5}>
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}