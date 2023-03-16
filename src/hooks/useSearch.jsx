import React, { useEffect, useRef, useState } from 'react'

export function useSearch () {
  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)
  const [validate, setValidate] = useState(true)
  const firstInputRef = useRef(true)

  useEffect(() => {
    if (firstInputRef.current) {
      firstInputRef.current = search === ''
      setValidate('')
      return
    }
    if (search.length > 2) {
      setValidate(false)
    }
    if (search === '') {
      setError(<p>No se puede puede buscar lineas vacias</p>)
      setValidate(true)
      return
    }
    if (search.length < 3) {
      setError(<p>No se puede buscar peliculas menores a 3 letras</p>)
      setValidate(true)
      return
    }
    setError(null)
  }, [search])

  return { search, setSearch, error, validate }
}
