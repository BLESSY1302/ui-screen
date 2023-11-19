import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"; // Updated import
import Login from "./components/Login";
import CreateConfig from "./components/CreateConfig";
import Delete from "./components/Delete";
import EditConfig from "./components/EditConfig";


const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/createconfig" element={<CreateConfig />} />
      <Route path="/Delete" element={<Delete />} />
      <Route path="/editconfig" element={<EditConfig />} />
    </Routes>
  </BrowserRouter>
);

export default App;
