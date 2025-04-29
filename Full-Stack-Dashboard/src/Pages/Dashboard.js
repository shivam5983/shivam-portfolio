import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card } from 'react-bootstrap';
import ChartCard from '../components/ChartCard';

function Dashboard() {
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get('http://localhost:5000/api/analytics')
      .then(res => setData(res.data));
  }, []);

  return (
    <Container fluid>
      <Row>
        <Col md={4}><Card className="p-3 mb-3">Users: {data.users}</Card></Col>
        <Col md={4}><Card className="p-3 mb-3">Sales: {data.sales}</Card></Col>
        <Col md={4}><Card className="p-3 mb-3">Sessions: {data.sessions}</Card></Col>
      </Row>
      <Row>
        <Col><ChartCard /></Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
