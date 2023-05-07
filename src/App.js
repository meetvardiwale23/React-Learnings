
import './App.css';
import Landings from './pages/Landing/components/Landing';
import { Register } from './pages/Authentication/Register/components/Register';
import { Login } from './pages/Authentication/Login/components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import { ProtectedComponents } from './components/ProtectedComponents';

function App() {
  return (
    <div className="App">
           <div className="App">
          <BrowserRouter>
          <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path='/landing' element={<Landings />} />
          <Route path="*" element={<ProtectedComponents />} />
          </Routes>
          </BrowserRouter>
    </div>
       
    </div>
  );
}

export default App;
