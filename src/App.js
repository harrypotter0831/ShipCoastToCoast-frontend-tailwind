import React from 'react';
import './App.scss';
import Routes from "./config/routers.js";
import { BrowserRouter } from 'react-router-dom';
import 'normalize.css'

function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
