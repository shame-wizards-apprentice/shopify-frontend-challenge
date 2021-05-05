import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid';
import './App.css';
import SearchBar from './components/SearchBar';
import ResultsContainer from './components/ResultsContainer';


function App() {

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
