import React from 'react';
/* eslint-disable @typescript-eslint/no-unused-vars */
import logo from './logo.svg';
import './App.css';
import Labs from './Labs';
import Kanbas from './Kanbas';
import { HashRouter, Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
    <div>
      <Link to="/Labs">Labs</Link> <Link to="/Kanbas">Kanbas</Link>
      <Routes>
        <Route path="/labs" element={<Labs />} />
        <Route path="/Kanbas" element={<Kanbas />} />
      </Routes>
    </div> 
    </HashRouter>
  );
}

export default App;
