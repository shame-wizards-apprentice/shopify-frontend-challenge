import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import API from '../utils/API'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

const SearchBar = () => {
    const classes = useStyles();

    const [searchState, setSearchState] = useState({
        search: ''
    });

    const handleInputChange = e => {
        const { name, value } = e.target;
        setSearchState({
            ...searchState,
            [name]: value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        API.searchByTitle(searchState.search).then(res => {
            console.log(res)
        });
    }

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <TextField id="outlined-basic" label="Search" variant="outlined" name="search" onChange={handleInputChange} />
            <br />
            <Button variant="contained" onClick={handleSubmit} >Submit</Button>
        </form>
    )
}

export default SearchBar;