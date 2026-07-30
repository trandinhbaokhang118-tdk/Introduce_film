import React from "react";
import { Routes, Route } from "react-router-dom";
import SignupPage from "./pages/SignupPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import AboutPage from "./pages/AboutPage";

import "./App.css";

export default function App() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movie/:id" element={<DetailPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/dang-ky" element={<SignupPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}