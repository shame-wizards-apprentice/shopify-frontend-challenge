import React, { useEffect } from 'react'
import Grid from '@material-ui/core/Grid';
import './App.css';
import store from './config/store'
import SearchBar from './components/SearchBar';
import ResultsContainer from './components/ResultsContainer';


function App() {
  useEffect(() => {
    if(localStorage.getItem('searchResults')) {
      store.dispatch({
        type: 'SEARCH_MOVIES',
        payload: {
            results: JSON.parse(localStorage.getItem('searchResults'))
        }
    });
    }
  })

  return (
    <div className="App">
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <SearchBar />
          <ResultsContainer />
        </Grid>
      </Grid>

    </div>
  );
}

export default App;
