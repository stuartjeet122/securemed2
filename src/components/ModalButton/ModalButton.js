import React, { useState } from 'react';

// Example components to render inside the modal
const AddCustomer = () => (
  <div>
    <form className="space-y-4">
      <div>
        <label htmlFor="customerName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Customer Name
        </label>
        <input
          type="text"
          name="customerName"
          id="customerName"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          placeholder="Enter customer name"
          required
        />
      </div>
      <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Add Customer
      </button>
    </form>
  </div>
);

const ViewCustomer = () => (
  <div>
    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">View Customer Details</h3>
    {/* Add customer detail content here */}
  </div>
);

const componentMap = {
  addCustomer: AddCustomer,
  viewCustomer: ViewCustomer,
};

const ModalButton = ({ buttonTitle, componentType }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const ModalContent = componentMap[componentType] || (() => <div>Default Content</div>);

  return (
    <>
      <button
        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
        onClick={handleShow}
      >
        {buttonTitle}
      </button>

      {show && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="fixed inset-0 w-full h-full bg-black opacity-50" onClick={handleClose}></div>
          <div className="flex items-center min-h-screen px-4 py-8">
            <div className="relative w-full max-w-md p-4 mx-auto bg-white rounded-lg shadow-lg dark:bg-gray-700">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{buttonTitle}</h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={handleClose}
                >
                  <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="p-4 md:p-5">
                <ModalContent />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalButton;
