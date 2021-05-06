import React from 'react';
import { connect } from 'react-redux'
import ResultCard from './ResultCard';
import noImg from '../images/no-img.png';

const ResultsContainer = (props) => {
    return (
        <div>
            {props.results.map(result => (
                <ResultCard
                    Title={result.Title}
                    Year={result.Year} 
                    Poster={result.Poster === 'N/A' ? `${noImg}` : result.Poster}
                    key={result.imdbID}
                    id={result.imdbID}/>
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