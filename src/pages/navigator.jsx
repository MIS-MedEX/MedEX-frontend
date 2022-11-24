import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PersonalPage } from "./personal-page/personal-page";
import { HomePage } from "./PatientsList/index";

export const Navigator = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/personal" element={<PersonalPage />} />
    </Routes>
  </Router>
);
