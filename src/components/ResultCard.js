import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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

const ResultCard = (props) => {
    const classes = useStyles();

    return (
        <Card data-nominated={props.nominated}>
            <CardActionArea>
                <img className={classes.cardImage} src={props.Poster}></img>
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
                <Button size="small" color="primary">
                    Nominate
                </Button>
            </CardActions>
        </Card>
    )
}

export default ResultCard;