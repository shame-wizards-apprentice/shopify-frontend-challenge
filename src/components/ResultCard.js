import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import store from '../config/store';

const useStyles = makeStyles((theme) => ({
    media: {
        height: '50vh',
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: '50vh',
        boxShadow: '5px 10px 10px',
        marginTop: '5vh'
    },
}));

const Alert = (props) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const ResultCard = (props) => {
    const classes = useStyles();
    const [openState, setOpenState] = useState(false)

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenState(false);
    };

    const nominateMe = () => {
        const existingNominations = store.getState().nomination.nominations
        if (existingNominations.length >= 5) {
            setOpenState(true)
        } else if (existingNominations.indexOf(props) === -1) {
            const newNominations = existingNominations.concat(props)
            console.log(newNominations)
            store.dispatch({
                type: 'CHANGE_NOMINATIONS',
                payload: {
                    ...store.getState().nomination,
                    nominations: newNominations
                }
            });
            localStorage.setItem('nominations', JSON.stringify(newNominations))
        }

    }

    return (
        <div>
            <Snackbar open={openState} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error">
                    You can only nominate 5, dumbass
                </Alert>
            </Snackbar>
            <Card data-key={props.id}>
                <CardActionArea>
                    <img className={classes.cardImage} src={props.Poster} alt=''></img>
                    <CardMedia
                        className={classes.media}
                        title={props.Title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {props.Title}
                        </Typography>
                        <Typography gutterBottom variant="caption" component="h2">
                            {props.Year}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    {store.getState().nomination.nominations.indexOf(props) === -1 ?
                        <Button size="small" color="primary" onClick={nominateMe}>
                            Nominate
                        </Button> :
                        <Button variant="contained" disabled>
                            Already nominated
                        </Button>}
                </CardActions>
            </Card>
        </div>
    )
}

export default ResultCard;