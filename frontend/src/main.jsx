import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { CartProvider } from './context/CartContext'
import { ToastProvider } from './context/ToastContext'
import ScrollToTop from './components/ScrollToTop'
import './styles/index.css'
createRoot(document.getElementById('root')).render(<React.StrictMode><BrowserRouter><ScrollToTop /><ToastProvider><CartProvider><App /></CartProvider></ToastProvider></BrowserRouter></React.StrictMode>)
