// import React from 'react';
import {Routes, Route} from 'react-router-dom';
import InitialPage from './pages/InitialPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

import './App.css';

function App () {

  return (
    <>
    <Routes>
      <Route path='/' element={<InitialPage />}/>
      <Route path='/login' element={<LoginPage />}/>
      <Route path='/login/register' element={<RegisterPage />} />
    </Routes>
    </>
  )
}

export default App;
