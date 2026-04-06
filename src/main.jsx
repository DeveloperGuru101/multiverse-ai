import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import GHL from './pages/ghl/page'

const path = window.location.pathname;
const Component =
  path === '/ghl' ? GHL :
  App;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Component />
  </StrictMode>,
)
