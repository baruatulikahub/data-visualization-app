import React, { useEffect, useState } from 'react';
import DataTable from './components/DataTable';
import BarChart from './components/BarChart';
import { fetchData } from './services/api';

const App = () => {
  const [data, setData] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchDataAsync = async () => {
      const result = await fetchData();
      setData(result);
      setSelectedRows(result.slice(0, 5));
    };

    fetchDataAsync();
  }, []);

  const handleCheckboxChange = (row) => {
    const isRowSelected = selectedRows.some((selectedRow) => selectedRow.id === row.id);

    if (isRowSelected) {

      const updatedRows = selectedRows.filter((selectedRow) => selectedRow.id !== row.id);
      setSelectedRows(updatedRows);
    } else {

      setSelectedRows([...selectedRows, row]);
    }
  };

  return (
    <div>
      <h1>Data Visualization App</h1>
      <DataTable data={data} onCheckboxChange={handleCheckboxChange} selectedRows={selectedRows} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <BarChart data={data} selectedRows={selectedRows} />
    </div>
  );
};

export default App;
