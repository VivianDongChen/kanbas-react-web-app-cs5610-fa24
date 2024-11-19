import React from "react";
/* eslint-disable @typescript-eslint/no-unused-vars */
import logo from "./logo.svg";
import "./App.css";
import Labs from "./Labs";
import Kanbas from "./Kanbas";
import { HashRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Kanbas/store";

function App() {
  return (
    <HashRouter>
      <Provider store={store}>
        <div>
          <Routes>
            <Route path="/" element={<Navigate to="/Kanbas" />} />
            <Route path="/labs/*" element={<Labs />} />
            <Route path="/Kanbas/*" element={<Kanbas />} />
          </Routes>
        </div>
      </Provider>
    </HashRouter>
  );
}

export default App;
