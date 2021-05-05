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
                    nominated={false}/>
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