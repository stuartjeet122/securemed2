import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ReusableInput = ({ type, placeholder, value, onChange, label, className, ...props }) => {
  const defaultClasses = "peer w-full bg-transparent outline-none px-4 text-base rounded-xl bg-white border border-[#4070f4] focus:shadow-md";
  const combinedClasses = classNames(defaultClasses, className);

  return (
    <div className="w-60 h-12 relative flex rounded-xl mb-4">
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

const ReusableTable = ({ title, data }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(data);
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');

  const handleSearchChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = data.filter(row => {
      return Object.values(row).some(
        value => value.toString().toLowerCase().includes(query)
      );
    });

    setFilteredData(filtered);
  };

  const handleSort = (header) => {
    const isAsc = sortBy === header && sortOrder === 'asc';
    setSortBy(header);
    setSortOrder(isAsc ? 'desc' : 'asc');

    const sortedData = [...filteredData].sort((a, b) => {
      if (a[header] < b[header]) return isAsc ? -1 : 1;
      if (a[header] > b[header]) return isAsc ? 1 : -1;
      return 0;
    });

    setFilteredData(sortedData);
  };

  const headers = filteredData.length > 0 ? Object.keys(filteredData[0]) : Object.keys(data[0]);

  return (
    <div className="overflow-x-auto p-6 bg-white-50">
      <h2 className="text-2xl font-bold mb-6 text-[#4070f4]">{title}</h2>
      <div className="flex mb-4">
        <ReusableInput
          id="search"
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
          label="Search"
          className="mr-4"
        />
        <div className="relative">
          <select
            className="peer w-full bg-transparent outline-none px-4 text-base rounded-xl bg-white border border-[#4070f4] focus:shadow-md"
            onChange={(e) => handleSort(e.target.value)}
          >
            <option value="">Sort by...</option>
            {headers.map(header => (
              <option key={header} value={header}>
                {header.charAt(0).toUpperCase() + header.slice(1)}
              </option>
            ))}
          </select>
          <span className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" clipRule="evenodd" d="M7.293 11.293a1 1 0 0 1 1.414 1.414l-3 3a1 1 0 1 1-1.414-1.414l3-3zM12.707 8.707a1 1 0 0 0-1.414-1.414l3-3a1 1 0 1 0-1.414-1.414l-3 3a1 1 0 0 0 1.414 1.414zM8 8h4a1 1 0 0 0 0-2H8a1 1 0 0 0 0 2z" />
            </svg>
          </span>
        </div>
      </div>
      {filteredData.length === 0 ? (
        <p>No data available</p>
      ) : (
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
          <thead>
            <tr className="bg-[#4070f4] text-white">
              {headers.map((header) => (
                <th key={header} className="text-left py-3 px-4 cursor-pointer"
                  onClick={() => handleSort(header)}>
                  {header.charAt(0).toUpperCase() + header.slice(1)}
                  {sortBy === header && (
                    <svg className="h-4 w-4 inline-block ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" clipRule="evenodd" d="M7.293 11.293a1 1 0 0 1 1.414 1.414l-3 3a1 1 0 1 1-1.414-1.414l3-3zM12.707 8.707a1 1 0 0 0-1.414-1.414l3-3a1 1 0 1 0-1.414-1.414l-3 3a1 1 0 0 0 1.414 1.414zM8 8h4a1 1 0 0 0 0-2H8a1 1 0 0 0 0 2z" />
                    </svg>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row, rowIndex) => (
              <tr key={rowIndex} className={`border-b border-gray-200 ${rowIndex % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}>
                {headers.map((header) => (
                  <td key={header} className="py-3 px-4 text-gray-700">
                    {row[header]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

ReusableTable.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ReusableTable;
