import React from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './home'
import Notes from './notes';
import SignUp from './signup';
import Login from './login';



function App() {
  return (
    <Router>
      <Routes>
        

        {/* Add a catch-all route for the root path   <Route path='*' element={<Signup />} />*/}
        <Route path='*' element={<Home/>} />
        <Route path='/notes' element={<Notes />} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/login' element={<Login/>} />
       
      </Routes>
    </Router>
  );
}
export default App;