import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: 300,
        height: 225,
        backgroundColor: theme.palette.primary.main,
        marginBottom:theme.spacing(3)
    },
    
    description: {
        height: 130
    },
    actions: {
        display: "flex",
        justifyContent: "space-between",
        margin: theme.spacing(1)
    },
    error: {
        backgroundColor: theme.palette.error.main,
        color: "white",
        "&:hover": {
            backgroundColor: theme.palette.error.light,
            borderColor: theme.palette.error.main,
            color: "black",
        },
        textAlign: "center",
    },
    save: {
        backgroundColor: theme.palette.primary.dark,
        color: "white",
        "&:hover": {
            borderColor: theme.palette.primary.dark,
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.dark,
        },
        textAlign: "center",
    },
}));
export default function Service(props) {
    const classes = useStyles();
    const { name, description } = props
    const [showButton, setShowButton] = useState(false)
    console.log("Desc:" + description.length)
    return (
        <Card className={classes.root}>
            <CardActionArea>
                
                
                <CardContent className={classes.description}>
                <Typography gutterBottom variant="h5" component="h1">
                    {name}
                </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {description.length > 150 ? description.substring(0, 150) + "..." : description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.actions}>
                <Button className={classes.error}>
                    Изтрий
                </Button>
                <Button className={classes.save}>
                    Виж повече
                </Button>
            </CardActions>
        </Card>
    );
}