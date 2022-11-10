import React from 'react';
import './App.scss';
import Routes from "./config/routers.js";


import Home from "./pages/Home";

function App() {
  return (
    <div className='App'>
      <Routes />
    </div>
  );
}

export default App;
