import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"; // Updated import
import Login from "./components/Login";
import CreateConfig from "./components/CreateConfig";
import DeleteConfig from "./components/DeleteConfig";
import EditConfig from "./components/EditConfig";
import ConfigList from "./components/ConfigList";
import CreateConfigVal from "./components/CreateConfigVal";
import DeleteConfigVal from "./components/DeleteConfigVal";
import EditConfigVal from "./components/EditConfigVal";
import ConfigValList from "./components/ConfigValList";

const App = () => (
  <BrowserRouter>
    <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/configlist" element={<ConfigList />} />
            <Route path="/createconfig" element={<CreateConfig />} />
            <Route path="/deleteconfig" element={<DeleteConfig />} />
            <Route path="/editconfig" element={<EditConfig />} />
            <Route path="/configvallist" element={<ConfigValList />} />
            <Route path="/createconfigval" element={<CreateConfigVal />} />
            <Route path="/deleteconfigval" element={<DeleteConfigVal />} />
            <Route path="/editconfigval" element={<EditConfigVal />} />
    </Routes>
  </BrowserRouter>
);

export default App;
