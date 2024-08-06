import React, { useState, useEffect } from 'react';

const ModalButton = ({ buttonTitle, ModalContent, htmlContent, alwaysShow = false }) => {
  const [show, setShow] = useState(alwaysShow);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Effect to handle alwaysShow prop and control initial state
  useEffect(() => {
    if (alwaysShow) {
      setShow(true);
    }
  }, [alwaysShow]);

  return (
    <>
      {!alwaysShow && (
        <button
          className="text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
          type="button"
          onClick={handleShow}
        >
          {buttonTitle}
        </button>
      )}

      {show && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black bg-opacity-50">
          <div className="relative w-full max-w-md p-4 mx-2 bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{buttonTitle}</h3>
              <button
                type="button"
                className="text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white rounded-lg p-1.5"
                onClick={handleClose}
              >
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="p-4">
              {ModalContent ? <ModalContent /> : null}
              {htmlContent ? (
                <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
              ) : null}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalButton;
