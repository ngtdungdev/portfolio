// Node modules
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// CSS link
import './index.css'
// Components
import App from './App.tsx'
import 'lenis/dist/lenis.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
