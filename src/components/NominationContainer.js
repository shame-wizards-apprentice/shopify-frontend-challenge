import React from 'react';
import { connect } from 'react-redux';
import { makeStyles, Grid, Button } from '@material-ui/core';
import noImg from '../images/no-img.png';
import NominationCard from './NominationCard';
import store from '../config/store';

const useStyles = makeStyles({
    nominations: {
        marginLeft: '25vw'
    },
    text: {
        color: 'rgba(0,0,0,.8)',
        textAlign: 'center'
    },
    button: {
        backgroundColor: 'rgba(212, 211, 221, .8)',
        color: 'rgba(0,0,0,.8)',
        height: '30px',
        marginTop: '2vh',
        marginLeft: '2vw'
    }
});

const NominationContainer = (props) => {
    const classes = useStyles();

    const deleteMe = () => {
        store.dispatch({
            type: 'CHANGE_NOMINATIONS',
            payload: {
                ...store.getState().nomination,
                nominations: []
            }
        });
        localStorage.setItem('nominations', JSON.stringify([]))
    }

    return (
        <div className={classes.nominations}>
            <h1 className={`${classes.text} result-text`}>{props.nominations.length ? 'You have nominated the following movies for awards!' : 'You have not nominated any movies for awards yet!'}</h1>
            <Grid container spacing={2} justify='space-evenly'>
                { props.nominations.map(nomination => (
                    <Grid item xs={2}>
                        <NominationCard
                            longTitle={nomination.Title}
                            Title={nomination.Title.length > 20 ? `${nomination.Title.slice(0, 20)}...` : nomination.Title}
                            Year={nomination.Year}
                            Poster={nomination.Poster === 'N/A' ? `${noImg}` : nomination.Poster}
                            key={nomination.imdbID}
                            id={nomination.imdbID} />
                    </Grid>
                ))}
            </Grid>
            
            {props.nominations.length ? <Button variant="contained" onClick={deleteMe} className={classes.button} id='clear-button'>Clear All Nominations</Button> : <div id='clear-button'/>}
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        ...state.nomination
    }
};

export default connect(mapStateToProps)(NominationContainer);