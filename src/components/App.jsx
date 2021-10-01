import React from 'react'
import Header from './Header/Header'
import Cases from './Cases/Cases'

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Cases />
      </div>
    </div>
  )
}

export default App
