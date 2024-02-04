import React, { useState } from 'react';

const DataTable = ({ data, onCheckboxChange, selectedRows }) => {

    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 10;

    const indexOfLastRow = currentPage * rowsPerPage;

    const totalPages = Math.ceil(data.length / rowsPerPage);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    }
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Checkbox</th>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {data.slice(indexOfLastRow - rowsPerPage, indexOfLastRow).map((row) => (
                        <tr key={row.id}>
                            <td>
                                <input
                                    type="checkbox"
                                    checked={selectedRows.some((selectedRow) => selectedRow.id === row.id)}
                                    onChange={() => onCheckboxChange(row)}
                                />
                            </td>
                            <td>{row.id}</td>
                            <td>{row.title}</td>
                            <td>{row.body}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div>
                <span>Page {currentPage} of {totalPages}</span>
                {Array.from({ length: totalPages }, (_, index) => (
                    <button key={index + 1} onClick={() => handlePageChange(index + 1)}>
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default DataTable;
