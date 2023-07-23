import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// route
import {BrowserRouter as Router} from 'react-router-dom'

// stayle
import "./index.scss"
import "bootstrap/dist/css/bootstrap.min.css"
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from "react-toastify"

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <App />
    <ToastContainer theme="colored" />
  </Router>
)
