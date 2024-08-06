import React, { useState } from 'react';
import Modal from '../components/ModalButton/ModalButton';
import Input from '../components/Input/ReusableInput';
import Button from '../components/Button/ReusableButton';
import Table from '../components/Table/ReusableTable';

const data = [{
  data: 'test', data2: 'test2'
}];

function GenerateModal() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [licenseNumber, setLicenseNumber] = useState('');
  const [yearsOfExperience, setYearsOfExperience] = useState('');

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    licenseNumber: '',
    yearsOfExperience: ''
  });

  const handleFirstNameChange = (event) => {
    const value = event.target.value;
    if (/^[a-zA-Z\-]*$/.test(value)) {
      setFirstName(value);
      setErrors((prevErrors) => ({ ...prevErrors, firstName: '' }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, firstName: 'First name should contain only letters and hyphens' }));
    }
  };

  const handleLastNameChange = (event) => {
    const value = event.target.value;
    if (/^[a-zA-Z\-]*$/.test(value)) {
      setLastName(value);
      setErrors((prevErrors) => ({ ...prevErrors, lastName: '' }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, lastName: 'Last name should contain only letters and hyphens' }));
    }
  };

  const handleLicenseNumberChange = (event) => {
    setLicenseNumber(event.target.value);
    setErrors((prevErrors) => ({ ...prevErrors, licenseNumber: '' }));
  };

  const handleYearsOfExperienceChange = (event) => {
    const value = event.target.value;
    if (/^\d*$/.test(value) && parseInt(value, 10) >= 0) {
      setYearsOfExperience(value);
      setErrors((prevErrors) => ({ ...prevErrors, yearsOfExperience: '' }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, yearsOfExperience: 'Years of experience must be 0 or more' }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Basic validation before submission
    let isValid = true;
    const newErrors = { ...errors };

    if (firstName === '' || !/^[a-zA-Z\-]*$/.test(firstName)) {
      newErrors.firstName = 'First name should contain only letters and hyphens';
      isValid = false;
    }
    if (lastName === '' || !/^[a-zA-Z\-]*$/.test(lastName)) {
      newErrors.lastName = 'Last name should contain only letters and hyphens';
      isValid = false;
    }
    if (licenseNumber === '') {
      newErrors.licenseNumber = 'License number is required';
      isValid = false;
    }
    if (yearsOfExperience === '' || parseInt(yearsOfExperience, 10) < 0) {
      newErrors.yearsOfExperience = 'Years of experience must be 0 or more';
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      // Handle form submission here, e.g., send state values to the server
      console.log("First Name:", firstName);
      console.log("Last Name:", lastName);
      console.log("License Number:", licenseNumber);
      console.log("Years Of Experience:", yearsOfExperience);
      // Clear inputs after submission (optional)
      setFirstName('');
      setLastName('');
      setLicenseNumber('');
      setYearsOfExperience('');
    }
  };

  return (
    <div className='flex justify-center'>
      <form action="" className='flex flex-col space-y-3' onSubmit={handleSubmit}>
        <Input
          type="text"
          label='First Name'
          value={firstName}
          onChange={handleFirstNameChange}
          required={true}
        />
        {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}

        <Input
          type="text"
          label='Last Name'
          value={lastName}
          onChange={handleLastNameChange}
          required={true}
        />
        {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}

        <Input
          type="text"
          label='License Number'
          value={licenseNumber}
          onChange={handleLicenseNumberChange}
          required={true}
        />
        {errors.licenseNumber && <p className="text-red-500 text-sm">{errors.licenseNumber}</p>}

        <Input
          type="number"
          label='Years of Experience'
          value={yearsOfExperience}
          onChange={handleYearsOfExperienceChange}
          required={true}
        />
        {errors.yearsOfExperience && <p className="text-red-500 text-sm">{errors.yearsOfExperience}</p>}

        <Button title='Add New Pharmacist' type='submit' />
      </form>
    </div>
  );
}

function ManagePharmacist() {
  return (
    <div className='mt-8 container px-4 mx-auto'>
      <div className='flex justify-end'>
        <Modal buttonTitle="ADD PHARMACIST" ModalContent={GenerateModal} alwaysShow={true} />
      </div>
      <div className="container mx-auto">
        <Table title='List Of Pharmacists' data={data} />
      </div>
    </div>
  );
}

export default ManagePharmacist;
