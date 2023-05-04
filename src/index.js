import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Landings from './pages/Landing/components/Landing';
import TransacForm from './pages/Transaction Form/components/TransacForm';
import Dashboard from './pages/Dashboard/components/Dashboard';
import { RenderTable } from './pages/Dashboard2/components/RenderTable';
import { Register } from './pages/Authentication/Register/components/Register';
import { Login } from './pages/Authentication/Login/components/Login';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<App />} />
    <Route path="Landings" element={<Landings />} />
    <Route path='Transcform' element={<TransacForm />} />
    <Route path="dashboard" element={<Dashboard/>}></Route>
    <Route path="version2" element={<RenderTable/>}></Route>
    <Route path="register" element={<Register/>}></Route>
    <Route path="login" element={<Login/>}></Route>
    </>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();
