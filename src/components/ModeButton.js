import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
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

        const darkMode = () => {
            document.querySelector('body').setAttribute('style', 'background-image: url(' + `${bgDark}` + ')');
            document.querySelector('#hero-image').setAttribute('style', 'background-image: linear-gradient(to bottom, #000000, #434343, rgba(0, 0, 0, 0))');
            document.querySelector('#hero-text').setAttribute('style', 'color: rgba(255, 255, 255, .8)')
            document.querySelector('#submit-button').setAttribute('style', 'background-color: #434343; color: rgba(255, 255, 255, .8)');
            document.querySelector('#search-bar').setAttribute('style', 'background-color: rgba(67, 67, 67, .3); color: rgba(255, 255, 255, .8)')
            
        }

        const lightMode = () => {
            document.querySelector('body').setAttribute('style', 'background-image: url(' + `${bgLight}` + ')');
            document.querySelector('#hero-image').setAttribute('style', 'linear-gradient(to bottom, #D4D3DD, #EFEFBB, rgba(0, 0, 0, 0))');
            document.querySelector('#hero-text').setAttribute('style', 'color: rgba(0,0,0,.8)');
            document.querySelector('#submit-button').setAttribute('style', 'background-color: rgba(239, 239, 187, .8); color: rgba(0,0,0,.8)')
            document.querySelector('#search-bar').setAttribute('style', 'background-color: rgba(239, 239, 187, .3); color: rgba(0,0,0,.8)')

        }

        switch (mode) {
            case 'Light':
                darkMode();
                store.dispatch({
                    type: 'SWITCH_MODE',
                    payload: {
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

