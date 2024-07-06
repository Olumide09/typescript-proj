import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./login-pages/Home";
import Login from "./login-pages/Login";
import Register from "./login-pages/Register";
import DefaultLayout from "./layouts/DefaultLayout";
import ProtectedLayout from "./layouts/ProtectedLayout";

function App() {
  return (
    <>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route element={<ProtectedLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
