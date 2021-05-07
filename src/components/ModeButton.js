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
        border: 'none'
    }
}));

const ModeButton = (props) => {
    const classes = useStyles();

    const switchMode = () => {
        const mode = store.getState().mode.mode;

        switch (mode) {
            case 'Light':
                document.querySelector('body').setAttribute('style', 'background-image: url(' + `${bgDark}` + ')');
                store.dispatch({
                    type: 'SWITCH_MODE',
                    payload: {
                        mode: 'Dark'
                    }
                });
                localStorage.setItem('mode', 'Dark')
                break;
            case 'Dark':
                document.querySelector('body').setAttribute('style', 'background-image: url(' + `${bgLight}` + ')');
                store.dispatch({
                    type: 'SWITCH_MODE',
                    payload: {
                        mode: 'Light'
                    }
                });
                localStorage.setItem('mode', 'Light')
                break;
            default:
                document.querySelector('body').setAttribute('style', 'background-image: url(' + `${bgLight}` + ')');
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
            <Tooltip title={props.mode==='Light'? 'Dark Mode' : 'Light Mode'}>
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

