import React from 'react';
import { Line } from 'react-chartjs-2';
import { Card } from 'react-bootstrap';

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
  datasets: [
    {
      label: 'Sales',
      data: [5000, 10000, 7500, 15000, 20000],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1,
    }
  ]
};

function ChartCard() {
  return (
    <Card className="p-3">
      <Line data={data} />
    </Card>
  );
}

export default ChartCard;
