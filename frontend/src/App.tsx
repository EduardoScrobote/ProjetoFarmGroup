import { Routes, Route, BrowserRouter } from 'react-router-dom';
import InitialPage from './pages/InitialPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

import './App.css';

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InitialPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/login/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
