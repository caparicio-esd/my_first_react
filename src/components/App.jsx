import React from 'react'
import Header from './Header/Header'
import Cases from './Cases/Cases'
import Counter from './Counter'

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Cases />
      </div>


      <Counter />
    </div>
  )
}

export default App
