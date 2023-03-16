// http://img.omdbapi.com/?apikey=[yourkey]&
// Api: 66a2be86

import { useEffect, useState } from 'react'
import { useSearch } from '../hooks/useSearch'

export function searchMovies ({ Search }) {
  const { search } = useSearch()
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch(`http://img.omdbapi.com/?apikey=66a2be86&s=${search}`)
      .then(results => results.json)
      .then(data => setMovies(data.Search))
  }, [])

  const mappedMovies = movies?.map(movie => ({
    id: movie.imdbID,
    image: movie.Poster,
    year: movie.Year,
    tittle: movie.Title

  }))
  return { mappedMovies }
}
