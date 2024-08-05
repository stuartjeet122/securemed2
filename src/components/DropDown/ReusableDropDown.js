
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ReusableDropdown = ({ options, selectedValue, onChange, className, ...props }) => {
  const defaultSelectClasses = "appearance-none hover:placeholder-shown:bg-emerald-500 relative text-pink-400 bg-transparent ring-0 outline-none border border-none text-neutral-900 placeholder-violet-700 text-sm font-bold rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5";
  const combinedSelectClasses = classNames(defaultSelectClasses, className);

  return (
    <div>
    <div className="relative group rounded-lg w-64 h-11 bg-gray-50 overflow-hidden before:absolute before:w-12 before:h-12 before:content-[''] before:right-0 before:bg-violet-500 before:rounded-full before:blur-lg before:[box-shadow:-60px_10px_10px_10px_#F9B0B9]">
      <svg
        y="0"
        xmlns="http://www.w3.org/2000/svg"
        x="0"
        width="100"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid meet"
        height="100"
        className="w-8 h-8 absolute right-0 -rotate-45 stroke-pink-300 top-1.5 group-hover:rotate-0 duration-300 "
      >
        <path
          strokeWidth="4"
          strokeLinejoin="round"
          strokeLinecap="round"
          fill="none"
          d="M60.7,53.6,50,64.3m0,0L39.3,53.6M50,64.3V35.7m0,46.4A32.1,32.1,0,1,1,82.1,50,32.1,32.1,0,0,1,50,82.1Z "
          className="svg-stroke-primary "
        ></path>
      </svg>
      <select
        value={selectedValue}
        onChange={onChange}
        className={combinedSelectClasses}
        required
        id={props.id}
        {...props}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
    </div>
  );
};

ReusableDropdown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  selectedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
};

ReusableDropdown.defaultProps = {
  selectedValue: '',
  className: '',
};

export default ReusableDropdown;
