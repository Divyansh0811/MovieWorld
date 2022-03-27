import './App.css';
import { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import SearchIcon from "./search.svg";
function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState('');
  const API_URL = 'http://www.omdbapi.com?apikey=26b23244'

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search)
  }
  useEffect(() => {
    searchMovies("Avengers");
  }, [])
  
  return ( 
    <div className="App">
      <h1>MovieWorld</h1>

      <div className="search">
        <input 
          value = {searchTerm}
          placeholder='Type movie name and click on search...'
          onChange={(e) => setSearchTerm(e.target.value) }
        />
        <img
          src={SearchIcon}
          alt = "search"
          onClick = {() => searchMovies(searchTerm)}
        />
      </div>
      
      {movies?.length > 0 ? (
        <div className='container'>
          {movies.map((movie) => (
            <MovieCard movie={movie}/>
          ))}  
        </div>
      ) : (
        <div className='empty'>
          <h2>No movies found...</h2>  
        </div>
      )}
    </div>
  );
}

export default App;
