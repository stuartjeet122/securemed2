
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ReusableButton = ({ title, onClick, className }) => {
  const defaultClasses = "bg-violet-950 text-violet-400 border border-violet-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group";
  const combinedClasses = classNames(defaultClasses, className);

  return (
    <button onClick={onClick} className={combinedClasses}>
      <span className="bg-violet-400 shadow-violet-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
      {title}
    </button>
  );
};

ReusableButton.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string, // New prop type for additional class names
};

ReusableButton.defaultProps = {
  className: '', // Default value for className prop
};

export default ReusableButton;
