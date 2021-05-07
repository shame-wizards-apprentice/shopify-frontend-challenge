import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { InputBase } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import API from '../utils/API';
import store from '../config/store';

const Alert = (props) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    form: {
        marginBottom: '5vh',
        marginLeft: '5vw',
    },
    searchBar: {
        width: '90vw',
        border: '1px solid black',
        borderRadius: '5px',
        padding: '5px',
        backgroundColor: 'rgba(212, 211, 221, .3)',
        marginBottom: '2vh'
    },
    button: {
        width: '5vw',
        backgroundColor: 'rgba(212, 211, 221, .8)',
        color: 'rgba(0,0,0,.8)',
        height: '20px'
    }
}));

const SearchBar = (props) => {
    const classes = useStyles();

    const [searchState, setSearchState] = useState({
        search: ''
    });
    const [openState, setOpenState] = useState(false)

    const handleInputChange = e => {
        const { name, value } = e.target;
        setSearchState({
            ...searchState,
            [name]: value
        });
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenState(false);
    };

    const handleSubmit = e => {
        e.preventDefault();
        API.searchByTitle(searchState.search).then(res => {
            if (res.data.Response === 'False') {
                setOpenState(true)
            } else {
                store.dispatch({
                    type: 'SEARCH_MOVIES',
                    payload: {
                        results: res.data.Search
                    }
                });
                localStorage.setItem('searchResults', JSON.stringify(res.data.Search))
            }
        });
    }

    return (
        <form noValidate autoComplete="off" onSubmit={handleSubmit} className={classes.form}>
            <Snackbar open={openState} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error">
                    Oops! The Galactic Council has denied your request. Please try again later.
                </Alert>
            </Snackbar>
            <h1>Search for a movie</h1>
            <InputBase id="outlined-basic" placeholder="Search" variant="outlined" name="search" onChange={handleInputChange} className={classes.searchBar} id='search-bar'/>
            <br />
            <Button variant="contained" onClick={handleSubmit} className={classes.button} id='submit-button'>Submit</Button>
        </form>
        
    )
}

export default SearchBar;