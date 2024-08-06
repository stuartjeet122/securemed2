import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ReusableInput = ({ type, placeholder, value, onChange, label, className, required, options, ...props }) => {
  const defaultClasses = "peer w-full bg-transparent outline-none px-4 text-base rounded-xl bg-white border border-[#4070f4] focus:shadow-md";
  const combinedClasses = classNames(defaultClasses, className);

  return (
    <div className="w-60 h-12 relative flex rounded-xl">
      {type === 'dropdown' ? (
        <select
          value={value}
          onChange={onChange}
          className={combinedClasses}
          required={required}
          id={props.id}
          {...props}
        >
          {options.map(option => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          value={value}
          onChange={onChange}
          className={combinedClasses}
          required={required}
          id={props.id}
          {...props}
        />
      )}
      <label
        className="absolute top-1/2 translate-y-[-50%] bg-white left-4 px-2 peer-focus:top-0 peer-focus:left-3 font-light text-base peer-focus:text-sm peer-focus:text-[#4070f4] peer-valid:-top-0 peer-valid:left-3 peer-valid:text-sm peer-valid:text-[#4070f4] duration-150"
        htmlFor={props.id}
      >
        {label}
      </label>
    </div>
  );
};

ReusableInput.propTypes = {
  type: PropTypes.oneOf(['text', 'number', 'password', 'dropdown', 'date', 'time']), // Updated to include 'date' and 'time'
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  required: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.any.isRequired,
    label: PropTypes.string.isRequired,
  })),  // Added for dropdown options
};

ReusableInput.defaultProps = {
  type: 'text',
  value: '',
  className: '',
  required: false,
  options: [],  // Added for dropdown options
};

export default ReusableInput;
