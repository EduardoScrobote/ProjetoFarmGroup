// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
<<<<<<< HEAD:frontend/src/main.tsx
  <App />,
=======
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
>>>>>>> 3016e9760ebf4a14a1a0bcbf1da3a82286a5b7df:frontEnd/src/main.tsx
)
