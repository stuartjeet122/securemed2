import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useTable, useSortBy, useGlobalFilter } from 'react-table';
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
  const columns = useMemo(
    () => Object.keys(data[0]).map((key) => ({ Header: key.charAt(0).toUpperCase() + key.slice(1), accessor: key })),
    [data]
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable({ columns, data }, useGlobalFilter, useSortBy);

  const { globalFilter } = state;

  return (
    <div className="overflow-x-auto p-6 bg-white-50">
      <h2 className="text-2xl font-bold mb-6 text-[#4070f4]">{title}</h2>
      <ReusableInput
        id="search"
        type="text"
        placeholder="Search..."
        value={globalFilter || ''}
        onChange={(e) => setGlobalFilter(e.target.value)}
        label="Search"
        className="mb-4"
      />
      {rows.length === 0 ? (
        <p>No data available</p>
      ) : (
        <table {...getTableProps()} className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()} className="bg-[#4070f4] text-white">
                {headerGroup.headers.map(column => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    className="text-left py-3 px-4 cursor-pointer"
                  >
                    {column.render('Header')}
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? ' 🔽'
                          : ' 🔼'
                        : ''}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map(row => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} className={`border-b border-gray-200 ${row.index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}>
                  {row.cells.map(cell => (
                    <td {...cell.getCellProps()} className="py-3 px-4 text-gray-700">
                      {cell.render('Cell')}
                    </td>
                  ))}
                </tr>
              );
            })}
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
