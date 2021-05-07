import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Paper } from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import store from '../config/store';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        maxHeight: 700
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
                ...store.getState().nomination,
                nominations: newNominations
            }
        });
        localStorage.setItem('nominations', JSON.stringify(newNominations))
    }

    return (
        <Card data-key={props.id} className={classes.root}>
            <CardActionArea>
                <img className={classes.cardImage} src={props.Poster} alt=''></img>
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
                <Button size="small" color="primary" onClick={removeMe}>
                    Remove
                </Button>
            </CardActions>
        </Card>
    )
}

export default NominationCard;