import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './login-pages/Home';
import Login from './login-pages/Login';
import Register from './login-pages/Register';


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />    
      <Route path="/login" element={<Login />} />  
      <Route path="/register" element={<Register />} />  
    </Routes>
    </>
  );
}

export default App;
