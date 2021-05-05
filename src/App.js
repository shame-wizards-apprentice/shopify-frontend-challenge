import React, {useState} from 'react'
import Grid from '@material-ui/core/Grid';
import './App.css';
import SearchBar from './components/SearchBar';
import ResultCard from './components/ResultCard';


function App() {
  const [resultState, setResultState] = useState({
    result: []
  })


  return (
    <div className="App">
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <SearchBar />
        </Grid>
      </Grid>

    </div>
  );
}

export default App;
