import {Routes, Route} from 'react-router-dom'

import InitialPage from './pages/InitialPage/InitialPage'
import LoginPage from './pages/LogingPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';

import './App.css';

function App() {

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

export default App
