import React, { useState, useRef } from 'react';
import { useHistory, withRouter } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Alert } from '@material-ui/lab'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import AuthService from '../services/AuthService';
import { PersonOutlineRounded } from '@material-ui/icons';

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
        margin: theme.spacing(4, 4),
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

function RegisterPage() {
    const classes = useStyles();
    const [helpers, setHelpers] = useState([false, false, false, false, false])

    const email = useRef("")
    const password = useRef("")
    const confirmPassword = useRef("")
    const firstName = useRef("")
    const lastName = useRef("")

    const [isConflict, setIsConflict] = useState(false);
    const history = useHistory()

    const onEmailInputChange = (e) => email.current = e.target.value

    const onPasswordInputChange = (e) => password.current = e.target.value

    const onConfirmPasswordInputChange = (e) => confirmPassword.current = e.target.value

    const onFirstNameInputChange = (e) => firstName.current = e.target.value

    const onLastNameInputChange = (e) => lastName.current = e.target.value

    const onSubmitClick = async (e) => {
        e.preventDefault()

        const fields = [firstName, lastName, email, password, confirmPassword]

        // Iterate all input fileds and check if they are empty
        const invalidFields = fields.map(item => item.current.trim().length === 0 ? true : false)

        setHelpers(invalidFields)

        if (!invalidFields.includes(true)) {

            let hasMatchingPasswords = confirmPassword.current === password.current;

            if (hasMatchingPasswords) {
                let userBody = {
                    email: email.current,
                    password: password.current,
                    firstName: firstName.current,
                    lastName: lastName.current,
                    role:"ROLE_ADMIN"
                }

                let registeredUser;
                
                await AuthService.register(userBody)
                    .then((response) => registeredUser = response)
                    .catch((e) => console.log(e))

                if (registeredUser === undefined) {
                    setIsConflict(true)
                }
                else {
                    history.push("./login")
                }
            }else{
                setHelpers([false,false,false,true,true])
            }
        }
    }

    return (
        <Grid container component="main" className={classes.root}>

            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <PersonOutlineRounded />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Регистрация
                    </Typography>

                    {isConflict ?
                        <Alert variant="outlined" severity="error">
                            Потребител с този имейл вече съществува
                        </Alert> : ""}

                    <form className={classes.form} noValidate>

                        <TextField
                            margin="normal"
                            error={helpers[0]}
                            helperText="Полето е задължително"
                            onChange={onFirstNameInputChange}
                            required
                            fullWidth
                            name="cpassword"
                            label="Име"
                            type="text"
                            id="password"
                            autoComplete="current-password"
                        />

                        <TextField
                            margin="normal"
                            error={helpers[1]}
                            helperText="Полето е задължително"
                            onChange={onLastNameInputChange}
                            required
                            fullWidth
                            name="cpassword"
                            label="Фамилия"
                            type="text"
                            id="password"
                            autoComplete="current-password"
                        />

                        <TextField
                            margin="normal"
                            error={helpers[2]}
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
                            error={helpers[3]}
                            helperText="Полето е задължително и/или паролите на съвпадат"
                            onChange={onPasswordInputChange}
                            required
                            fullWidth
                            name="password"
                            label="Парола"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />

                        <TextField
                            margin="normal"
                            error={helpers[4]}
                            helperText="Полето е задължително и/или паролите на съвпадат"
                            onChange={onConfirmPasswordInputChange}
                            required
                            fullWidth
                            name="password"
                            label="Потвърди парола"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />

                        <Button
                            fullWidth
                            variant="contained"
                            color="secondary"
                            className={classes.button}
                            onClick={onSubmitClick}
                        >
                            Създай профил
                        </Button>
                    </form>
                </div>
            </Grid>
        </Grid>
    );
}

export default withRouter(RegisterPage)