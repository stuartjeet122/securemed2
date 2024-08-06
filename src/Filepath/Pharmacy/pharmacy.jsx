import REACT from 'react';
import ModalButton from '../../components/ModalButton/ModalButton';
import Admin from '../Admin/admin';

const htmlContent = `
  <div>
    <h2 class="text-xl font-semibold">HTML Content</h2>
    <p>This is an example of HTML content inside the modal.</p>
    <script>
      // Example JavaScript (will run after modal opens)
      console.log('Modal opened with HTML content');
    </script>
    <style>
      /* Example CSS */
      .text-xl { font-size: 1.25rem; }
    </style>
  </div>
`;
htmlContent = htmlContent+Admin;


function Pharmacy(){
    return (
        <div className="App">
                  <ModalButton 
      buttonTitle="Open HTML Modal" 
      ModalContent= {Admin}
    />
                  
        </div>
    );
  };

export default Pharmacy;