import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"; // Updated import
import Login from "./components/Login";
import Create from "./components/Create";
import Delete from "./components/Delete";
import Edit from "./components/Edit";


const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Create" element={<Create />} />
      <Route path="/Delete" element={<Delete />} />
      <Route path="/Edit" element={<Edit />} />
    </Routes>
  </BrowserRouter>
);

export default App;
