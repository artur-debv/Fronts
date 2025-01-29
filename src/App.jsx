import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Balance from "./pages/Balance";
import Movements from "./pages/Movements";
import Products from "./pages/Products";
import Organization from "./pages/Organization";
import Login from "./pages/Login";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/saldo" element={<Balance />} />
        <Route path="/movimentos" element={<Movements />} />
        <Route path="/produtos" element={<Products />} />
        <Route path="/organizacoes" element={<Organization />} />
      </Routes>
    </Router>
  );
}
