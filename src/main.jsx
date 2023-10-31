import React from 'react'
import ReactDOM from 'react-dom/client'
import { SimpsonsApp } from './SimpsonsApp.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SimpsonsApp />
  </React.StrictMode>,
)
