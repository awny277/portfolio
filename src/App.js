import React from 'react'
import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/index'
import Home from './components/Home'
import About from './components/About/About'
import { Helmet, HelmetProvider } from 'react-helmet-async'

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Hello World</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/about" element={<About />} />
      </Routes>
    </HelmetProvider>
  )
}

export default App
