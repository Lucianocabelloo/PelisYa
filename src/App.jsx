import React from 'react'

// import NotResults from './mocks/NotResults.json'

// http://img.omdbapi.com/?apikey=[yourkey]&
// Api: 66a2be86

import './App.css'
import Form from './components/Form'
import Movies from './components/Movies'

function App () {
  return (
    <>
    <div className='container'>

    <header>
      <h1>PelisYa</h1>
      <Form/>
    </header>
    <main>
      <Movies/>
    </main>
    </div>
    </>
  )
}

export default App
