import React, { useState, useRef } from 'react';
import { useHistory, withRouter } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Alert } from '@material-ui/lab'
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

function LoginPage() {

  const classes = useStyles();
  const [helpers, setHelpers] = useState([false, false])
  const wrongCredentials = useState(false)[0]
  const email = useRef("")
  const password = useRef("")

  const history = useHistory()

  const onEmailInputChange = (e) => {
    email.current = e.target.value
  }

  const onPasswordInputChange = (e) => {
    password.current = e.target.value
  }

  const onSubmitClick = (e) => {
    e.preventDefault()
    const updatedHelpers = [false, false]
    if (email.current.length === 0) {
      updatedHelpers[0] = true
    }

    if (password.current.length === 0) {
      updatedHelpers[1] = true
    }

    setHelpers(updatedHelpers)

    localStorage.setItem("user", JSON.stringify({ name: "" }))

    history.push("./dashboard")
  }
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
          {wrongCredentials ?
            <Alert variant="outlined" severity="error">
              Невалиден имейл и/или парола
            </Alert> : ""}
          <form className={classes.form} noValidate>
            <TextField
              margin="normal"
              error={helpers[0]}
              helperText="Полето е задължително"
              onChange={onEmailInputChange}
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
              error={helpers[1]}
              helperText="Полето е задължително"
              onChange={onPasswordInputChange}
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
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.button}
              onClick={onSubmitClick}
            >
              Продължи
            </Button>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}

export default withRouter(LoginPage)