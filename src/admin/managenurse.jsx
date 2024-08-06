import React, { useState } from 'react';
import Modal from '../components/ModalButton/ModalButton';
import Input from '../components/Input/ReusableInput';
import Button from '../components/Button/ReusableButton';
import Table from '../components/Table/ReusableTable';

const data = [{
  data: 'test', data2: 'test2'
}];

const options = [
  { value: 'doctor', label: 'Doctor' },
  { value: 'nurse', label: 'Nurse' },
  { value: 'pharmacist', label: 'Pharmacist' }
];

function GenerateModal() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [department, setDepartment] = useState('');
  const [licenseNumber, setLicenseNumber] = useState('');
  const [yearsOfExperience, setYearsOfExperience] = useState('0');
  const [formErrors, setFormErrors] = useState({});

  const handleFirstNameChange = (event) => {
    const value = event.target.value;
    if (/^[A-Za-z-]*$/.test(value)) {
      setFirstName(value);
      setFormErrors((prevErrors) => ({ ...prevErrors, firstName: '' }));
    } else {
      setFormErrors((prevErrors) => ({ ...prevErrors, firstName: 'First Name should contain only alphabets' }));
    }
  };

  const handleLastNameChange = (event) => {
    const value = event.target.value;
    if (/^[A-Za-z-]*$/.test(value)) {
      setLastName(value);
      setFormErrors((prevErrors) => ({ ...prevErrors, lastName: '' }));
    } else {
      setFormErrors((prevErrors) => ({ ...prevErrors, lastName: 'Last Name should contain only alphabets' }));
    }
  };

  const handleDepartmentChange = (event) => {
    setDepartment(event.target.value);
  };

  const handleLicenseNumberChange = (event) => {
    setLicenseNumber(event.target.value);
  };

  const handleYearsOfExperienceChange = (event) => {
    const value = event.target.value;
    if (value >= 0) {
      setYearsOfExperience(value);
      setFormErrors((prevErrors) => ({ ...prevErrors, yearsOfExperience: '' }));
    } else {
      setFormErrors((prevErrors) => ({ ...prevErrors, yearsOfExperience: 'Years of Experience must be 0 or more' }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (firstName === '' || !/^[A-Za-z]*$/.test(firstName)) {
      setFormErrors((prevErrors) => ({ ...prevErrors, firstName: 'First Name should contain only alphabets' }));
    }
    if (lastName === '' || !/^[A-Za-z]*$/.test(lastName)) {
      setFormErrors((prevErrors) => ({ ...prevErrors, lastName: 'Last Name should contain only alphabets' }));
    }
    if (yearsOfExperience < 0) {
      setFormErrors((prevErrors) => ({ ...prevErrors, yearsOfExperience: 'Years of Experience must be 0 or more' }));
    }
    if (Object.values(formErrors).every(error => error === '')) {
      // Handle form submission here
      console.log({
        firstName,
        lastName,
        department,
        licenseNumber,
        yearsOfExperience
      });
    }
  };

  return (
    <div className='flex justify-center'>
      <form action="" className='flex flex-col space-y-3' onSubmit={handleSubmit}>
        <Input 
          type="text" 
          label="First Name" 
          value={firstName} 
          onChange={handleFirstNameChange} 
          required={true} 
        />
        {formErrors.firstName && (
          <p className="text-red-500 text-sm">{formErrors.firstName}</p>
        )}
        <Input 
          type="text" 
          label="Last Name" 
          value={lastName} 
          onChange={handleLastNameChange} 
          required={true} 
        />
        {formErrors.lastName && (
          <p className="text-red-500 text-sm">{formErrors.lastName}</p>
        )}
        <Input 
          type="dropdown" 
          label="Department" 
          value={department} 
          onChange={handleDepartmentChange} 
          options={options} 
          required={true} 
        />
        <Input 
          type="text" 
          label="License Number" 
          value={licenseNumber} 
          onChange={handleLicenseNumberChange} 
          required={true} 
        />
        <Input 
          type="number" 
          label="Years Of Experience" 
          value={yearsOfExperience} 
          onChange={handleYearsOfExperienceChange} 
          min="0"  // Ensure value cannot be less than 0
          required={true} 
        />
        {formErrors.yearsOfExperience && (
          <p className="text-red-500 text-sm">{formErrors.yearsOfExperience}</p>
        )}
        <Button title='Add New Nurse' type='submit' />
      </form>
    </div>
  );
}

function ManageNurse() {
  return (
    <div className='mt-8 container px-4 mx-auto'>
      <div className='flex justify-end'>
        <Modal buttonTitle="ADD NURSE" ModalContent={GenerateModal} />
      </div>
      <div className="container mx-auto">
        <Table title='List Of Nurse' data={data} />
      </div>
    </div>
  );
}

export default ManageNurse;