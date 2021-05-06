import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
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

const ResultCard = (props) => {
    const classes = useStyles();

    const nominateMe = () => {
        const existingNominations = store.getState().nomination.nominations
        for(let i=0; i>existingNominations.length; i++) {
            if(existingNominations[i].id ===props.imdbID) {
                console.log('oops, already nominated')
            }
        }
        if(existingNominations.length>=5) {
            console.log('oops, no nomination for you')
        }else {
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
                <Button size="small" color="primary" onClick={nominateMe}>
                    Nominate
                </Button>
            </CardActions>
        </Card>
    )
}

export default ResultCard;