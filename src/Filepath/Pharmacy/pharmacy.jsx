import REACT from 'react';
import ModalButton from '../../components/ModalButton/ModalButton';

function Pharmacy(){
    return (
        <div className="App">
                  <ModalButton buttonTitle="Add Customer" componentType="addCustomer" />
                  <ModalButton buttonTitle="View Customer" componentType="viewCustomer" />
        </div>
    );
  };

export default Pharmacy;