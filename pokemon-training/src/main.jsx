import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HomeContainer } from './subdomains/home/HomeContainer.jsx'
import App from './App.jsx'
import './reset.css'
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>

  <App></App>

  </StrictMode>
)
