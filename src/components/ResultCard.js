import React, { useState } from 'react';
import { makeStyles, Card, Button, Snackbar, CardActionArea, CardActions, CardContent, CardMedia, Typography, Tooltip } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import store from '../config/store';


const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: '10vw',
        minHeight: '30vh',
        maxWidth: '30vw',
        maxHeight: '30vh',
        boxShadow: '0 8px 16px 0',
        backgroundColor: 'rgba(212, 211, 221, .7)'
    },
    content: {
        minWidth: '100%',
        minHeight: '100%',
        maxWidth: '50px',
        maxHeight: '50px',
        paddingTop: '5px',
    },
    media: {
        maxWidth: '100%',
        minHeight: '150px',
        maxHeight: '150px',
        minWidth: '100%',
        marginRight: theme.spacing(-1)
    },
    text: {
        fontSize: '.9em',
        margin: '0px',
        fontWeight: 'bold'
    },
    button: {
        margin: theme.spacing(-1),
        fontSize: '.9em',
        height: '2vh',
        color: 'black',
        backgroundColor: 'rgba(212, 211, 221, .8)'
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

            <Card data-key={props.id} className={classes.root}>
                <CardActionArea>
                    <Tooltip title={props.longTitle}>
                        <CardMedia
                            className={classes.media}
                            image={props.Poster}
                            title={props.Title}
                        />
                    </Tooltip>
                    <CardContent className={classes.content}>
                        <Typography className={classes.text}>
                            {props.Title}
                        </Typography>
                        <Typography className={classes.text}>
                            {props.Year}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    {store.getState().nomination.nominations.indexOf(props) === -1 ?
                        <Button size="small" color="primary" onClick={nominateMe} className={classes.button}>
                            Nominate
                        </Button> :
                        <Button variant="contained" disabled className={classes.button}>
                            Already nominated
                        </Button>}
                </CardActions>
            </Card>
        </div>
    )
}

export default ResultCard;