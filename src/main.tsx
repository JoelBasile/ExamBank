import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProfilePage from "./ProfilePage/index.tsx";
import Navbar from "./Navbar/index.tsx";

Amplify.configure(outputs);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/ProfilePage" element={<ProfilePage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
