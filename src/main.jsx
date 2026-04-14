import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import GHL from './pages/ghl/page'
import Privacy from './pages/Privacy.jsx'
import Terms from './pages/Terms.jsx'
import BookSalesRocket from './pages/BookSalesRocket.jsx'

const path = window.location.pathname;

const Component =
  path === '/ghl'              ? GHL             :
  path === '/privacy'          ? Privacy         :
  path === '/terms'            ? Terms           :
  App;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Component />
  </StrictMode>,
)
