import React from 'react';
import {useState} from 'react'
import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies,setMovies]=useState([])
  const [isLoading ,setIsLoading]=useState(false)

 async function fetchMoviesHandler(){
   setIsLoading(true);
  const response=await fetch('https://swapi.dev/api/films/')
  const data=await response.json();
   
     const tranFormedData=data.results.map(x=>{
       return{
         id:x.episode_id,
         title:x.title,
         openingText:x.opening_crawl,
         releaseDate:x.release_date
       }    
     })
     setMovies(tranFormedData);
     setIsLoading(false)

 }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler} >Fetch Movies</button>
      </section>
      <section>
        {!isLoading &&<MoviesList movies={movies} /> }
        {!isLoading &&movies.length===0 && <p>NO MOVIES FOUND (CLICK ON FETCH KEY FOR UPDATE MOVIES ON SCREEN)</p> }
        {isLoading && <p>Loading.......</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
