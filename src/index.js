import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Register from './Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Update from './Update';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  
  
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Register/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/update/:id' element={<Update/>}></Route>
     </Routes>
     </BrowserRouter>
  
    </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
