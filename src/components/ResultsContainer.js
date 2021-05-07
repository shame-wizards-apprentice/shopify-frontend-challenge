import React from 'react';
import { connect } from 'react-redux';
import { makeStyles} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import ResultCard from './ResultCard';
import noImg from '../images/no-img.png';

const useStyles = makeStyles({
    results: {
        marginLeft: '5vw',
        marginRight: '5vw',
        marginTop: '5vh'
    }
});

const ResultsContainer = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.results}>
        <Grid container spacing={2}>
            {props.results.map(result => (
                <Grid item xs={2}>
                    <ResultCard
                        longTitle={result.Title}
                        Title={result.Title.length>20 ? `${result.Title.slice(0, 20)}...` : result.Title}
                        Year={result.Year}
                        Poster={result.Poster === 'N/A' ? `${noImg}` : result.Poster}
                        key={result.imdbID}
                        id={result.imdbID} />
                </Grid>
            ))}
        </Grid>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        ...state.result
    }
};

export default connect(mapStateToProps)(ResultsContainer);