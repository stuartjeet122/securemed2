// routefile.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Admin from './Filepath/Admin/admin';
import Doctor from './Filepath/Doctor/doctor';
import Home from './Filepath/Home/home.js';
import Nurse from './Filepath/Nurse/nurse';
import Appointment from './Filepath/Nurse/Appointment';
import Patient from './Filepath/Patient/patient';
import Pharmacy from './Filepath/Pharmacy/pharmacy';
import Home2 from './components/Home.jsx';
import ManageDepartments from './admin/managedepartment';
import ManageSpecialization from './admin/managespecialization';
import ManageDoctor from './admin/managedoctor';
import ManagePatient from './admin/managepatient';
import ManagePharmacist from './admin/managepharmacist.jsx';
import ManageNurse from './admin/managenurse';

function RouteFile() {
  return (
    <Routes>
      <Route path="/" element={<Home2 />} />
      <Route path="/Filepath/Admin/admin" element={<Admin />} />
      <Route path="/Filepath/Doctor/doctor" element={<Doctor />} />
      <Route path="/Filepath/Nurse/nurse" element={<Nurse />} />
      <Route path="/Filepath/Nurse/Appointment" element={<Appointment />} />
      <Route path="/Filepath/Patient/patient" element={<Patient />} />
      <Route path="/Filepath/Pharmacy/pharmacy" element={<Pharmacy />} />
      <Route path="/admin/managedepartment" element={<ManageDepartments />} />
      <Route path="/admin/managespecialization" element={<ManageSpecialization />} />
      <Route path="/admin/managedoctor" element={<ManageDoctor />} />
      <Route path="/admin/managepatient" element={<ManagePatient />} />
      <Route path="/admin/managepharmacist" element={<ManagePharmacist />} />
      <Route path="/admin/managenurse" element={<ManageNurse />} />
    </Routes>
  );
}

export default RouteFile;
