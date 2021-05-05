import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import API from '../utils/API';
import store from '../config/store';

const Alert = (props) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
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
                })
            }
        });
    }

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <Snackbar open={openState} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error">
                    Oops! The Galactic Council has denied your request. Please try again later.
                </Alert>
            </Snackbar>
            <TextField id="outlined-basic" label="Search" variant="outlined" name="search" onChange={handleInputChange} />
            <br />
            <Button variant="contained" onClick={handleSubmit} >Submit</Button>
        </form>
    )
}

export default SearchBar;