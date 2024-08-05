import REACT, { useState }  from 'react';
import ReusableButton from '../../components/Button/ReusableButton';
import ReusableInput from '../../components/Input/ReusableInput';
import ReusableTable from '../../components/Table/ReusableTable';
import ReusableDropdown from '../../components/DropDown/ReusableDropDown';

function Pharmacy(){
    const [selectedOccupation, setSelectedOccupation] = useState('');

    const handleDropdownChange = (event) => {
      setSelectedOccupation(event.target.value);
    };
  
    const occupations = [
      { value: '', label: 'All' },
      { value: 'Developer', label: 'Developer' },
      { value: 'Designer', label: 'Designer' },
      { value: 'Manager', label: 'Manager' },
    ];
  
    return (
      <div className="p-6">
        <h1>Welcome to My App</h1>
        <ReusableDropdown
          id="occupation"
          options={occupations}
          selectedValue={selectedOccupation}
          onChange={handleDropdownChange}
          className="mb-4"
        />
      </div>
    );
  };

export default Pharmacy;