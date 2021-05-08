import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Tooltip } from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
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
        fontWeight: 'bold',
        color: 'rgba(0,0,0,.8)'
    },
    button: {
        margin: theme.spacing(-1),
        fontSize: '.9em',
        height: '2vh',
        color: 'rgba(0,0,0,.8)'
    }
}));

const NominationCard = (props) => {
    const classes = useStyles();

    const removeMe = () => {
        const noms = store.getState().nomination.nominations
        const newNominations = noms.filter(nom => nom.id !== props.id)
        console.log(newNominations)
        store.dispatch({
            type: 'CHANGE_NOMINATIONS',
            payload: {
                nominations: newNominations
            }
        });
        localStorage.setItem('nominations', JSON.stringify(newNominations))
    }

    return (
        <Card data-key={props.id} className={`${classes.root} result-card`}>
                <CardActionArea>
                    <Tooltip title={props.longTitle}>
                        <CardMedia
                            className={classes.media}
                            image={props.Poster}
                            title={props.Title}
                        />
                    </Tooltip>
                    <CardContent className={classes.content}>
                        <Typography className={`${classes.text} result-text`}>
                            {props.Title}
                        </Typography>
                        <Typography className={`${classes.text} result-text`}>
                            {props.Year}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                        <Button size="small" color="primary" onClick={removeMe} className={`${classes.button} result-text`}>
                            Remove
                        </Button> 
                </CardActions>
            </Card>
    )
}

export default NominationCard;