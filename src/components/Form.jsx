import React, { useRef } from 'react'
import { useSearch } from '../hooks/useSearch'
import Movies from './Movies'

const Form = () => {
  const { setSearch, search, error, validate } = useSearch()

  const inputRef = useRef()

  const handleChange = () => {
    const newSearch = inputRef.current.value
    setSearch(newSearch)
  }
  const handleSubmit = (event) => {
    event.preventDefault()
  }
  const handleRefresh = () => {
    window.location.reload()
  }

  return (

    <main>
        <form onSubmit={handleSubmit} className='form'>
            <input aria-invalid={validate} onChange={handleChange} ref={inputRef} className='Form-Input' type="text" placeholder='Star Wars, Rambo, Rocky' />
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
