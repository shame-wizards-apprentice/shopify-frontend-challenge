import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ModeButton from './ModeButton';

const useStyles = makeStyles({
    heroImage: {
        backgroundImage: 'linear-gradient(to bottom, #D4D3DD, #EFEFBB, rgba(0, 0, 0, 0))',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position: 'relative',
        height: '40vh',
        width: '110vw'
    }, 
    heroText: {
        textAlign: 'center',
        position: 'absolute',
        top: '50%',
        left: '50%',
        color: 'rgba(0,0,0,.8)',
        transform: 'translate(-50%, -75%)',
    }
})

const Hero = () => {
    const classes = useStyles();

    return (
        <div className={classes.heroImage} id='hero-image'>
            <ModeButton />
            <div className={classes.heroText} id='hero-text'>
                <h1>Welcome to your movie dashboard!</h1>
                <h3>Browse movies and nominate your favorites for awards!</h3>
            </div>
        </div>
    )
}

export default Hero;