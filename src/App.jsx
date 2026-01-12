import { useState } from 'react'
import './App.css'
import Home from './Components/Pages/Home'
import store from './store'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
     <Home />
    </Provider>
  )
}

export default App
