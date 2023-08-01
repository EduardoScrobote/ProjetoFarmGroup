import {Routes, Route} from 'react-router-dom'

import InitialPage from './pages/InitialPage/InitialPage'

import './App.css';
function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<InitialPage />}/>
    </Routes>
    </>
  )
}

export default App
