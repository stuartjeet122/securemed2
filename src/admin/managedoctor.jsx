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
              <Input type="text" label="Liscense Number" required={true} />
              <Input type="text" label="first Name" required={true} />
              <Input type="text" label="last Name" required={true} />
              <Input type="dropdown" label="Specialization" required={true} />
              <Input type="number" label="Years Of Experience" defaultValue="0" />
              <Button title='Add New Doctor' type='submit' />
          </form>
      </div>
  )
}

function manageDoctor(){
return (
<div className='mt-8 container px-4 mx-auto'>
  <div className='flex justify-end'>
 <Modal buttonTitle="ADD DOCTOR" ModalContent={GenerateModal} alwaysShow={true}/>
 </div>
 <div className="container mx-auto">
  <Table title='List Of Doctors' data={data} />
 </div>
</div>
)
}

export default manageDoctor;