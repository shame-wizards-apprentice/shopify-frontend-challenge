import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core';
import ResultCard from './ResultCard';
import noImg from '../images/no-img.png';

const useStyles = makeStyles({
    results: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});

const ResultsContainer = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.results}>
            {props.results.map(result => (
                <ResultCard
                    Title={result.Title}
                    Year={result.Year}
                    Poster={result.Poster === 'N/A' ? `${noImg}` : result.Poster}
                    key={result.imdbID}
                    id={result.imdbID} />
            ))}
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        ...state.result
    }
};

export default connect(mapStateToProps)(ResultsContainer);