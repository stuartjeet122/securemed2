import REACT, { useState }  from 'react';
import ReusableButton from '../../components/Button/ReusableButton';
import ReusableInput from '../../components/Input/ReusableInput';

function Pharmacy(){
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    };
    const handleClick = () => {
        alert('Button clicked!');
      };

    return (
        <div>
        <h1>Welcome to My App</h1>
        <ReusableInput
          id="email"
          type="text"
          placeholder="Enter text"
          value={inputValue}
          onChange={handleInputChange}
          label="Email Address"
          className="mt-1"
        />
        <ReusableButton title="Hover Me" onClick={handleClick} />
      </div>
    
    );
}

export default Pharmacy;