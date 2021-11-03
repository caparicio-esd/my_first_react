import React from 'react'
import Header from './Header/Header'
import Content from './Content/Content'
import styles from './App.module.sass'
import GlobalContextProvider from '../contexts/GlobalContext'
import AuthContextProvider from '../contexts/AuthContext'



const App = () => {
  return (
    <AuthContextProvider>
      <GlobalContextProvider>
        <div className={[styles.app].join(" ")}>
          <Header />
          <Content />
        </div>
      </GlobalContextProvider>
    </AuthContextProvider>
  )
}

export default App
