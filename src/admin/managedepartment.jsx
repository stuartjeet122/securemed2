import React, { useState } from 'react';
import Modal from '../components/ModalButton/ModalButton';
import Input from '../components/Input/ReusableInput';
import Button from '../components/Button/ReusableButton';
import Table from '../components/Table/ReusableTable';

const data = [{
    data: 'test', data2: 'test2'
}, {
    data: 'test2', data2: 'test'
}];

function GenerateModal() {
    const [departmentName, setDepartmentName] = useState('');

    const handleDepartmentChange = (event) => {
        setDepartmentName(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission here, e.g., send the departmentName to the server
        console.log("Department Name:", departmentName);
        // Clear input after submission (optional)
        setDepartmentName('');
    };

    return (
        <div className='flex justify-center'>
            <form action="" className='flex flex-col space-y-3' onSubmit={handleSubmit}>
                <Input
                    type="text"
                    label="Department Name"
                    value={departmentName}
                    onChange={handleDepartmentChange}
                    required={true}
                />
                <Button title='Add New Department' type='submit' />
            </form>
        </div>
    );
}

function ManageDepartment() {
    return (
        <div className='mt-8 container px-4 mx-auto'>
            <div className='flex justify-end'>
                <Modal buttonTitle="ADD DEPARTMENT" ModalContent={GenerateModal} />
            </div>
            <div className="container mx-auto">
                <Table title='List Of Departments' data={data} />
            </div>
        </div>
    );
}

export default ManageDepartment;