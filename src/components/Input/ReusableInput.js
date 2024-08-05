
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ReusableInput = ({ type, placeholder, value, onChange, label, className, ...props }) => {
  const defaultClasses = "peer w-full bg-transparent outline-none px-4 text-base rounded-xl bg-white border border-[#4070f4] focus:shadow-md";
  const combinedClasses = classNames(defaultClasses, className);

  return (
    <div className="w-60 h-12 relative flex rounded-xl">
      <input
        type={type}
        value={value}
        onChange={onChange}
        className={combinedClasses}
        required
        id={props.id}
        {...props}
      />
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
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
};

ReusableInput.defaultProps = {
  type: 'text',
  value: '',
  className: '',
};

export default ReusableInput;
