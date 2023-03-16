import React, { useRef } from 'react'
import { useSearch } from '../hooks/useSearch'

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

  return (

    <div>
        <form onSubmit={handleSubmit} className='form'>
            <input aria-invalid={validate} onChange={handleChange} ref={inputRef} value={search} className='Form-Input' type="text" placeholder='Star Wars, Rambo, Rocky' />
            <button className='Form-Button'>Search</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  )
}

export default Form
