import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Register from './pages/register/Register';
import LogIn from './pages/LogIn/Login';

function App() {
  return (
    <>

      <Router>
        <Link to='/'>Register</Link>
        <Link to='/login'>LogIn</Link>
        <Routes>
          <Route path='' element={<Register />}></Route>
          <Route path='/login' element={<LogIn />}></Route>

        </Routes>
      </Router>
    </>
  );
}

export default App;
