import React from 'react';
import { connect } from 'react-redux';
import { makeStyles, Tooltip } from '@material-ui/core/';
import store from '../config/store';
import dark from '../images/dark.png';
import light from '../images/light.png';
import bgDark from '../images/bg-dark.png';
import bgLight from '../images/bg-light.png';

const useStyles = makeStyles(() => ({
    image: {
        height: '10vh'
    },
    button: {
        backgroundColor: 'rgba(255, 255, 255, 0)',
        border: 'none',
        marginLeft: '1vw',
        marginTop: '2vh',
        zIndex: '100'
    }
}));

const ModeButton = (props) => {
    const classes = useStyles();

    const switchMode = () => {
        const mode = store.getState().mode.mode;
        let resultCards = document.querySelectorAll('.result-card');
        let resultText = document.querySelectorAll('.result-text');

        const darkMode = () => {
            document.querySelector('body').setAttribute('style', 'background-image: url(' + `${bgDark}` + ')');
            document.querySelector('#hero-image').setAttribute('style', 'background-image: linear-gradient(to bottom, #000000, #434343, rgba(0, 0, 0, 0))');
            document.querySelector('#hero-text').setAttribute('style', 'color: rgba(255, 255, 255, .8)');
            document.querySelector('#submit-button').setAttribute('style', 'background-color: #434343; color: rgba(255, 255, 255, .8)');
            document.querySelector('#clear-button').setAttribute('style', 'background-color: #434343; color: rgba(255, 255, 255, .8)');
            document.querySelector('.search-bar').setAttribute('style', 'background-color: rgba(67, 67, 67, .3); color: rgba(255, 255, 255, .8)');
            for(let i=0; i<resultCards.length; i++) {
                resultCards[i].setAttribute('style', 'background-color: rgba(67, 67, 67, 1)')
            }
            for(let i=0; i<resultText.length; i++) {
                resultText[i].setAttribute('style', 'color: rgba(255, 255, 255, .8)')
            }
        }

        const lightMode = () => {
            document.querySelector('body').setAttribute('style', 'background-image: url(' + `${bgLight}` + ')');
            document.querySelector('#hero-image').setAttribute('style', 'linear-gradient(to bottom, #D4D3DD, #EFEFBB, rgba(0, 0, 0, 0))');
            document.querySelector('#hero-text').setAttribute('style', 'color: rgba(0,0,0,.8)');
            document.querySelector('#submit-button').setAttribute('style', 'background-color: rgba(212, 211, 221, .8); color: rgba(0,0,0,.8)');
            document.querySelector('#clear-button').setAttribute('style', 'background-color: rgba(212, 211, 221, .8); color: rgba(0,0,0,.8)');
            document.querySelector('.search-bar').setAttribute('style', 'background-color: rgba(212, 211, 221, .7); color: rgba(0,0,0,.8)');
            for(let i=0; i<resultCards.length; i++) {
                resultCards[i].setAttribute('style', 'background-color: rgba(212, 211, 221, .7)')
            }
            for(let i=0; i<resultText.length; i++) {
                resultText[i].setAttribute('style', 'color: color: rgba(0,0,0,.8)')
            }
        }

        switch (mode) {
            case 'Light':
                darkMode();
                store.dispatch({
                    type: 'SWITCH_MODE',
                    payload: {
                        ...store.getState().mode,
                        mode: 'Dark'
                    }
                });
                localStorage.setItem('mode', 'Dark')
                break;
            case 'Dark':
                lightMode();
                store.dispatch({
                    type: 'SWITCH_MODE',
                    payload: {
                        ...store.getState().mode,
                        mode: 'Light'
                    }
                });
                localStorage.setItem('mode', 'Light')
                break;
            default:
                lightMode();
                store.dispatch({
                    type: 'SWITCH_MODE',
                    payload: {
                        ...store.getState().mode,
                        mode: 'Light'
                    }
                });
                localStorage.setItem('mode', 'Light')
        }
    }
    
    return (
        <div>
            <Tooltip title={props.mode === 'Light' ? 'Dark Mode' : 'Light Mode'}>
                <button onClick={switchMode} className={classes.button}>
                    <img src={props.mode === 'Light' ? `${dark}` : `${light}`} alt={props.mode === 'Light' ? 'Dark Mode' : 'Light Mode'} className={classes.image}></img>
                </button>
            </Tooltip>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        ...state.mode
    }
};

export default connect(mapStateToProps)(ModeButton);

