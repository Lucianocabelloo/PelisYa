import React from 'react'
import Results from '../mocks/Results.json'
// http://img.omdbapi.com/?apikey=[yourkey]&
// Api: 66a2be86

const Movies = () => {
  const movies = Results.Search
  const hasMovies = movies?.length > 0
  const noMovies = () => {
    return (<p>No se encontraron Peliculas</p>)
  }

  const mappedMovies = movies?.map(movie => ({
    id: movie.imdbID,
    image: movie.Poster,
    year: movie.Year,
    tittle: movie.Title

  }))
  return (
    <div>
        {
            hasMovies
              ? <ul className='movies'>
                {mappedMovies.map(movie => (
                    <li className='movie' key={movie.id}>
                        <h2>{movie.tittle}</h2>
                        <img src={movie.image} alt={movie.tittle} />
                        <h3>Año de estreno: {movie.year}</h3>
                    </li>
                ))}
            </ul>
              : noMovies
        }
    </div>
  )
}

export default Movies
