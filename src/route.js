// routefile.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Admin from './Filepath/Admin/admin';
import Doctor from './Filepath/Doctor/doctor';
import Home from './Filepath/Home/home.js';
import Nurse from './Filepath/Nurse/nurse';
import Patient from './Filepath/Patient/patient';
import Pharmacy from './Filepath/Pharmacy/pharmacy';
import Home2 from './components/Home.jsx';

function RouteFile() {
  return (
    <Routes>
      <Route path="/" element={<Home2 />} />
      <Route path="/Filepath/Admin/admin" element={<Admin />} />
      <Route path="/Filepath/Doctor/doctor" element={<Doctor />} />
      <Route path="/Filepath/Nurse/nurse" element={<Nurse />} />
      <Route path="/Filepath/Patient/patient" element={<Patient />} />
      <Route path="/Filepath/Pharmacy/pharmacy" element={<Pharmacy />} />
    </Routes>
  );
}

export default RouteFile;
