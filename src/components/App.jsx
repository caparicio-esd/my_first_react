import React from 'react'
import Header from './Header/Header'
import styles from './App.module.css'
import Cases from './Cases/Cases'

const App = () => {
  return (
    <div className={styles.App}>
      <Header />
      <div className="content">
        <Cases />
      </div>
    </div>
  )
}

export default App
