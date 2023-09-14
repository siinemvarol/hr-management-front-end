import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import DetailedStatisticsCard from './DetailedStatisticsCard'; // Eğer bu bileşeni kullanacaksanız, gerekli import

const EmployeeStatisticsPage = () => {
  const [employeeCount, setEmployeeCount] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:9090/api/v1/auth/get-employee-number')
      .then(response => {
        setEmployeeCount(response.data.count);
      })
      .catch(error => {
        console.error('Error fetching employee count:', error);
      });
  }, []);

  return (
    <Grid item xs={12} md={6} lg={3}>
      <DetailedStatisticsCard
        title="total employee"
        count={employeeCount !== null ? employeeCount : 'Loading...'}
        icon={{ color: "error", component: <i className="ni ni-world" /> }}
        percentage={{ color: "success", count: "+3%", text: "since last year" }}
      />
    </Grid>
  );
};

export default EmployeeStatisticsPage;