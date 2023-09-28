/* eslint-disable no-unused-vars */
/**
=========================================================
* Argon Dashboard 2 MUI - v3.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-material-ui
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

// Argon Dashboard 2 MUI example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DetailedStatisticsCard from "examples/Cards/StatisticsCards/DetailedStatisticsCard";
import SalesTable from "examples/Tables/SalesTable";
import CategoriesList from "examples/Lists/CategoriesList";
import GradientLineChart from "examples/Charts/LineCharts/GradientLineChart";

// Argon Dashboard 2 MUI base styles
import typography from "assets/theme/base/typography";

// Dashboard layout components
import Slider from "layouts/dashboard/components/Slider";

import jwt_decode from "jwt-decode";

// Data
import gradientLineChartData from "layouts/company-manager-layout/dashboard/data/gradientLineChartData";
import holidaysTableData from "layouts/company-manager-layout/dashboard/data/holidaysTableData";
import categoriesListData from "layouts/company-manager-layout/dashboard/data/categoriesListData";
import axios from "axios";
import { useEffect, useState } from "react";

function Default() {
  //Get New Employee Number Metodu
  const [employeeCount, setEmployeeCount] = useState(null);
  const fetchEmployeeCount = () => {
    const storedToken = localStorage.getItem("Authorization");
    const decodedToken = jwt_decode(storedToken);
    console.log(decodedToken);
    axios.get('http://localhost:9091/api/v1/company/get-company-employees/'+decodedToken.id)
      .then(response => {
        console.log(response.data)
        setEmployeeCount(response.data.length);
      })
      .catch(error => {
        console.error('Error fetching employee count:', error);
      });
  };
  
  useEffect(() => {
    fetchEmployeeCount(); // Sayfa yüklendiğinde hemen bir kez çalıştır
  
    const interval = setInterval(() => {
      fetchEmployeeCount(); // Her 5 saniyede bir çalıştır
    }, 5000);
  
    return () => clearInterval(interval); // Component temizlendiğinde interval'i temizle
  }, []);





    //Get USDTRY
    const apiUrl = 'https://api.exchangerate-api.com/v4/latest/USD';
    const [usdTry, setUsdTry] = useState(null);
    const fetchUsdTry = () => {
      fetch(apiUrl)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          const usdToTryExchangeRate = data.rates.TRY;
          console.log(`1 USD = ${usdToTryExchangeRate} TRY`+Date.now());
          setUsdTry(`1 USD = ${usdToTryExchangeRate} TRY`);
        })
        .catch(error => {
          console.error('There was a problem with the fetch operation:', error);
        });
    };
  
    useEffect(() => {
      fetchUsdTry(); // Sayfa yüklendiğinde hemen bir kez çalıştır
  
      const interval = setInterval(() => {
        fetchUsdTry(); // Her 5 saniyede bir çalıştır
      }, 5000);
  
      return () => clearInterval(interval); // Component temizlendiğinde interval'i temizle
    }, []);




    const storedToken = localStorage.getItem("Authorization");
    const decodedToken = jwt_decode(storedToken);
    //Get Number of All Employee Metod
    const apiUrl2 = 'http://localhost:9091/api/v1/company/get-company-employees-new/'+decodedToken.id;
    const [newEmployees, setNewEmployees] = useState(null);
    
    const fetchNewEmployees = () => {
      fetch(apiUrl2)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          console.log("haay ", data, Date.now());
          setNewEmployees(data);
        })
        .catch(error => {
          console.error('There was a problem with the fetch operation:', error);
        });
    };
    
    useEffect(() => {
      fetchNewEmployees(); // Sayfa yüklendiğinde hemen bir kez çalıştır
    
      const interval = setInterval(() => {
        fetchNewEmployees(); // Her 5 saniyede bir çalıştır
      }, 5000);
    
      return () => clearInterval(interval); // Component temizlendiğinde interval'i temizle
    }, []);

  const { size } = typography;
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ArgonBox py={3}>
        <Grid container spacing={3} mb={3}>
          <Grid item xs={12} md={6} lg={3}>
            <DetailedStatisticsCard
              title="new employee"
              count={newEmployees !== null ? newEmployees : 'Loading...'}
              icon={{ color: "info", component: <i className="ni ni-money-coins" /> }}
              percentage={{ color: "success", count: "+5%", text: "since last month" }}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <DetailedStatisticsCard
              title="total employee"
              count={employeeCount !== null ? employeeCount : 'Loading...'}
              icon={{ color: "error", component: <i className="ni ni-world" /> }}
              percentage={{ color: "success", count: "+3%", text: "since last year" }}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <DetailedStatisticsCard
              title="total salary"
              count="$2.8M"
              icon={{ color: "success", component: <i className="ni ni-paper-diploma" /> }}
              percentage={{ color: "success", count: "+10%", text: "since last year" }}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <DetailedStatisticsCard
              title="USD/TRY"
              count={usdTry !== null ? usdTry : 'Loading...'}
              icon={{ color: "warning", component: <i className="ni ni-cart" /> }}
              percentage={{ color: "success", count: "+5%", text: "than last year" }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3} mb={3}>
          <Grid item xs={12} lg={7}>
            <GradientLineChart
              title="Salary Statistics"
              description={
                <ArgonBox display="flex" alignItems="center">
                  <ArgonBox fontSize={size.lg} color="success" mb={0.3} mr={0.5} lineHeight={0}>
                    <Icon sx={{ fontWeight: "bold" }}>arrow_upward</Icon>
                  </ArgonBox>
                  <ArgonTypography variant="button" color="text" fontWeight="medium">
                    4% more{" "}
                    <ArgonTypography variant="button" color="text" fontWeight="regular">
                      in 2023
                    </ArgonTypography>
                  </ArgonTypography>
                </ArgonBox>
              }
              chart={gradientLineChartData}
            />
          </Grid>
          <Grid item xs={12} lg={5}>
            <Slider />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <SalesTable title="Public Holidays" rows={holidaysTableData} />
          </Grid>
          <Grid item xs={12} md={4}>
            <CategoriesList title="Departments" categories={categoriesListData} />
          </Grid>
        </Grid>
      </ArgonBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Default;
