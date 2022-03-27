import React from 'react'

function MovieCard({movie : {imdbID, Year, Poster, Title, Type}}) {
  return (
    <div className='movie' key={imdbID}>
        <div>
          <p>{Year}</p>
        </div>
        <div>
          <img src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"}  alt ='title'/>
        </div>
        <div>
          <span>{Type}</span>
          <h3>{Title}</h3>
        </div>
      </div>
  )
}

export default MovieCard