import React from 'react';
import { connect } from 'react-redux';
import noImg from '../images/no-img.png';
import NominationCard from './NominationCard';

const NominationContainer = (props) => {
    return (
        <div>
            <h1>Here's all your nominations, fool</h1>
            {props.nominations.map(nomination => (
                <NominationCard
                    Title={nomination.Title}
                    Year={nomination.Year} 
                    Poster={nomination.Poster === 'N/A' ? `${noImg}` : nomination.Poster}
                    key={nomination.id}
                    id={nomination.id}/>
            ))}
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        ...state.nomination
    }
};

export default connect(mapStateToProps)(NominationContainer);