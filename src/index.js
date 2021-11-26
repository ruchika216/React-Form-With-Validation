import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components'



ReactDOM.render(
    <>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </>,
    document.getElementById('root')
);





