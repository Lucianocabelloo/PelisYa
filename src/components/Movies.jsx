import React, { useEffect, useState } from 'react'

// eslint-disable-next-line react/prop-types
function Movies ({ itsSearch }) {
  const [movies, setMovies] = useState([])
  if (itsSearch === '') {
    return
  } else {
    useEffect(() => {
      fetch(`https://omdbapi.com/?apikey=66a2be86&s=${itsSearch}`)
        .then(results => results.json())
        .then(data => setMovies(data.Search))
    }, [itsSearch])
  }

  const hasMovies = movies?.length > 0
  const mappedMovies = movies?.map(movie => ({
    id: movie.imdbID,
    image: movie.Poster,
    year: movie.Year,
    title: movie.Title
  }))
  const noMovies = () => {
    return (<p>No se encontraron Peliculas</p>)
  }
  return (
    <div>
      {hasMovies
        ? <ul className='movies'>
          {mappedMovies.map(movie => (
            <li className='movie' key={movie.id}>
              <h2>{movie.title}</h2>
              <img src={movie.image} alt={movie.title} />
              <h3>Año de estreno: {movie.year}</h3>
            </li>
          ))}
        </ul>
        : noMovies}
    </div>
  )
}

export default Movies
