import React from 'react';
import Plot from 'react-plotly.js';

const BarChart = ({ data, selectedRows }) => {

    const numericData = selectedRows.map(row => row.title, row => row.body,);

    const trace = {
        x: numericData,
        type: 'bar',
    };

    const layout = {
        title: 'Bar Chart',
        xaxis: { title: 'Title' },
        yaxis: { title: 'Value' },
    };

    return (
        <Plot
            data={[trace]}
            layout={layout}
        />
    );
};

export default BarChart;
