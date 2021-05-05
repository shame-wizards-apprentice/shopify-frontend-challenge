import React from 'react';
import { connect } from 'react-redux'
import ResultCard from './ResultCard';

const ResultsContainer = (props) => {
    return (
        <div>
            {props.results.map(result => (
                <ResultCard
                    Title={result.Title}
                    Poster={result.Poster}
                    Year={result.Year} />
            ))}
            {/* <ResultCard
            Title='The Titanic'
            Poster='https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg'
            Year='1997'/> */}

        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        ...state.result
    }
};

export default connect(mapStateToProps)(ResultsContainer);