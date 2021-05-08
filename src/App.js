import React, { useEffect } from 'react'
import Grid from '@material-ui/core/Grid';
import './App.css';
import store from './config/store'
import SearchBar from './components/SearchBar';
import ResultsContainer from './components/ResultsContainer';
import NominationContainer from './components/NominationContainer';
import Hero from './components/Hero';


function App() {
  useEffect(() => {
    if (localStorage.getItem('searchResults')) {
      store.dispatch({
        type: 'SEARCH_MOVIES',
        payload: {
          ...store.getState().result,
          results: JSON.parse(localStorage.getItem('searchResults'))
        }
      });
    }

    if (localStorage.getItem('nominations')) {
      store.dispatch({
        type: 'CHANGE_NOMINATIONS',
        payload: {
          ...store.getState().nomination,
          nominations: JSON.parse(localStorage.getItem('nominations'))
        }
      });
    }

    if (localStorage.getItem('mode')) {
      store.dispatch({
        type: 'SWITCH_MODE',
        payload: {
          ...store.getState().mode,
          mode: localStorage.getItem('mode')
        }
      });
    }
  });

  return (
    <div className="App">
      <Grid container spacing={3}>
        <Hero />
      </Grid>
      <Grid container spacing={3}>
      <NominationContainer />
      </Grid>
      <Grid container spacing={3}>
        <SearchBar />
      </Grid>
      <Grid container spacing={3}>
        <ResultsContainer />
      </Grid>
    </div>
  );
}

export default App;
