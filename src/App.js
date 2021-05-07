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
          results: JSON.parse(localStorage.getItem('searchResults'))
        }
      });
    }

    if (localStorage.getItem('nominations')) {
      store.dispatch({
        type: 'CHANGE_NOMINATIONS',
        payload: {
          nominations: JSON.parse(localStorage.getItem('nominations'))
        }
      });
    }

    if (localStorage.getItem('mode')) {
      store.dispatch({
        type: 'SWITCH_MODE',
        payload: {
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
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
        <SearchBar />
        </Grid>
        <Grid item xs={4}></Grid>
      </Grid>
      {/* <ResultsContainer /> */}
      {/* <Grid item xs={6}>
          <NominationContainer />
        </Grid> */}


    </div>
  );
}

export default App;
