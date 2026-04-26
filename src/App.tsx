import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layouts
import { MainLayout } from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";

// Pages
import Beranda from "./pages/Beranda";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import Competition from "./pages/Competition";
import Seminar from "./pages/Seminar";
import Workshop from "./pages/Workshop";
import Talkshow from "./pages/Talkshow";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Halaman dengan Header & Footer */}
        <Route path="/" element={<MainLayout children={<Beranda />} />} />
        <Route path="/competition" element={<MainLayout children={<Competition />} />} />
        <Route path="/seminar" element={<MainLayout children={<Seminar />} />} />
        <Route path="/workshop" element={<MainLayout children={<Workshop />} />} />
        <Route path="/talkshow" element={<MainLayout children={<Talkshow />} />} />

        {/* Halaman Auth (Tanpa Header Biasa) */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;