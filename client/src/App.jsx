import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import DisplayAll from './components/DisplayAll'
import Nav from './components/Nav'
import Form from './components/CreateReview'
import EditReview from './components/EditReview'
import OneReview from './components/OneReview'

function App() {


  return (
    <div style={{backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSskbuz_M0t9SIrsgEpRJ16ZKEuzaO5EZh1w&usqp=CAU")`}}>
      <BrowserRouter>
      <Nav/>
        <Routes>
          <Route index element={ <DisplayAll/> } />
          <Route path="/createReview" element={ <Form/> }/>
          <Route path="/reviews/:id" element={ <EditReview/> } />
          <Route path="/oneReview/:id" element={ <OneReview/> } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
