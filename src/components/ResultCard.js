import React, { useState } from 'react';
import {makeStyles, Card, Button, Snackbar, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import store from '../config/store';


const useStyles = makeStyles({
    root: {
        width: 345,
        height: 700
    },
    media: {
        height: 10,
    },
    cardImage: {
        objectFit: 'scale-down'
    },
    content: {
        zIndex: '200'
    }
});


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

            <Card data-key={props.id} className={classes.root}>
                <CardActionArea>
                    <img src={props.Poster} alt='movie poster' className={classes.cardImage}></img>
                    <CardMedia
                        className={classes.media}
                        title={props.Title}
                    />
                    <CardContent className={classes.content}>
                        <Typography gutterBottom variant="h5" component="h2">
                            {props.Title}
                        </Typography>
                        <Typography gutterBottom variant="caption" component="h2">
                            {props.Year}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions className={classes.content}>
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