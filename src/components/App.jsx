import React from 'react'
import Header from './Header/Header'
import Content from './Content/Content'
import styles from './App.module.sass'

const App = () => {
  return (
    <div className={[styles.app].join(" ")}>
      <Header />
      <Content />
    </div>
  )
}

export default App
