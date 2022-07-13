import React from 'react';
import ReactDOM from 'react-dom/client';
import {HashRouter} from "react-router-dom"
import './index.css';
import App from './Components/App';
import {BrowserRouter} from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

        <BrowserRouter>
        <App />
        </BrowserRouter>

    
);

