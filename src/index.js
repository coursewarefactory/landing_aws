import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
    createBrowserRouter,
    RouterProvider,
    createRoutesFromElements,
    Route
} from "react-router-dom";
import Main from "./pages/Main/Main";
import Conf from "./pages/Conf/Conf";

const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path="*" element={<Main />}/>
        <Route path="/" element={<Main />}/>
        <Route path="/conf" element={<Conf />} />
    </>
))
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
