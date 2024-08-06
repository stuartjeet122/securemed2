import React, { useState } from 'react';
import Modal from '../components/ModalButton/ModalButton';
import Input from '../components/Input/ReusableInput';
import Button from '../components/Button/ReusableButton';
import Table from '../components/Table/ReusableTable';

const data = [{
  data: 'test', data2: 'test2'
}];

function GenerateModal() {
  const [specializationName, setSpecializationName] = useState('');

  const handleSpecializationChange = (event) => {
    setSpecializationName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    console.log("Specialization Name:", specializationName);
  };

  return (
    <div className='flex justify-center'>
      <form action="" className='flex flex-col space-y-3' onSubmit={handleSubmit}>
        <Input 
          type="text" 
          label="Specialization Name" 
          value={specializationName} 
          onChange={handleSpecializationChange} 
          required={true} 
        />
        <Button title='Add New Specialization' type='submit' />
      </form>
    </div>
  );
}

function ManageSpecialization() {
  return (
    <div className='mt-8 container px-4 mx-auto'>
      <div className='flex justify-end'>
        <Modal buttonTitle="ADD SPECIALIZATION" ModalContent={GenerateModal} />
      </div>
      <div className="container mx-auto">
        <Table title='List Of Specializations' data={data} />
      </div>
    </div>
  );
}

export default ManageSpecialization;
