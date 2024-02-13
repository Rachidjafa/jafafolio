import React from "react";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Hom from "./Hom";
import Header from "./Nav";

export default function App() {
  return (
    <HashRouter>
      <div className="nav1">
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<Hom />} />
      </Routes>
    </HashRouter>
  );
}
