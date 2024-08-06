import React from 'react';
import Modal from '../components/ModalButton/ModalButton';
import Input from '../components/Input/ReusableInput';
import Button from '../components/Button/ReusableButton';
import Table from '../components/Table/ReusableTable';

const data = [{
  data: 'test', data2: 'test2'
}];

function GenerateModal(){
  return (
      <div className='flex justify-center'>
          <form action="" className='flex flex-col space-y-3'>
              <Input type="text" label="Specialization Name" required={true} />
              <Button title='Add New Specialization' type='submit' />
          </form>
      </div>
  )
}

function manageSpecialization(){
return (
  <div className='mt-8 container px-4 mx-auto'>
  <div className='flex justify-end'>
 <Modal buttonTitle="ADD SPECIALIZATION" ModalContent={GenerateModal} />
 </div>
 <div className="container mx-auto">
  <Table title='List Of Specialization' data={data} />
 </div>
</div>
)
}

export default manageSpecialization;