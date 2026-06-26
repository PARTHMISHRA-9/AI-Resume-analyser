import React, { useState } from 'react';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';
import Spinner from './Spinner';

const HistoryTable = ({
  data = [],
  columns = [],
  loading = false,
  onRowClick,
  onDelete,
  sortable = true,
  striped = true,
}) => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

  const handleSort = (key) => {
    if (!sortable) return;

    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const sortedData = [...data].sort((a, b) => {
    if (!sortConfig.key) return 0;

    const aVal = a[sortConfig.key];
    const bVal = b[sortConfig.key];

    if (aVal < bVal) return sortConfig.direction === 'asc' ? -1 : 1;
    if (aVal > bVal) return sortConfig.direction === 'asc' ? 1 : -1;
    return 0;
  });

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <Spinner size="lg" />
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className="text-center py-12 text-gray-600 dark:text-gray-400">
        <p>No data available</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-gray-50 dark:bg-dark-800 border-b border-gray-200 dark:border-gray-700">
            {columns.map((col) => (
              <th
                key={col.key}
                onClick={() => handleSort(col.key)}
                className={`px-6 py-4 text-left font-semibold text-gray-900 dark:text-white ${
                  sortable && col.sortable !== false ? 'cursor-pointer hover:bg-gray-100 dark:hover:bg-dark-700' : ''
                }`}
              >
                <div className="flex items-center gap-2">
                  <span>{col.label}</span>
                  {sortable && col.sortable !== false && (
                    <div className="text-gray-400 dark:text-gray-600">
                      {sortConfig.key === col.key &&
                        (sortConfig.direction === 'asc' ? <FiChevronUp size={16} /> : <FiChevronDown size={16} />)}
                    </div>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedData.map((row, idx) => (
            <tr
              key={row.id || idx}
              className={`border-b border-gray-200 dark:border-gray-700 transition-colors ${
                striped && idx % 2 === 0 ? 'bg-gray-50 dark:bg-dark-800' : 'bg-white dark:bg-dark-900'
              } hover:bg-gray-100 dark:hover:bg-dark-700`}
              onClick={() => onRowClick?.(row)}
            >
              {columns.map((col) => (
                <td
                  key={`${row.id}-${col.key}`}
                  className="px-6 py-4 text-gray-900 dark:text-gray-100"
                >
                  {col.render ? col.render(row[col.key], row) : row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HistoryTable;
