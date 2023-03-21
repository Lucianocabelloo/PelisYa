import React, { useRef } from 'react'
import { useSearch } from '../hooks/useSearch'
import Movies from './Movies'

const Form = () => {
  const { setSearch, search, error, validate } = useSearch()

  const inputRef = useRef()

  const handleSubmit = (event) => {
    if (search.length === 1) return
    event.preventDefault()
    const newSearch = inputRef.current.value
    setSearch(newSearch)
  }
  const handleRefresh = () => {
    window.location.reload()
  }

  return (

    <main>
        <form onSubmit={handleSubmit} className='form'>
            <input aria-invalid={validate} ref={inputRef} className='Form-Input' type="text" placeholder='Star Wars, Rambo, Rocky' />
            <div className='Form-Buttons'>
            <button>Search</button>
            <button onClick={handleRefresh}>Refrescar</button>
            </div>
        </form>
        { error && <strong>{ error }</strong> }
        {search && <Movies itsSearch={search}/>}
    </main>
  )
}

export default Form
