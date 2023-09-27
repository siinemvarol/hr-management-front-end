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
import DetailedStatisticsCard from "./components/DetailedStatisticsCard";
import SalesTable from "examples/Tables/SalesTable";
import CategoriesList from "examples/Lists/CategoriesList";
import GradientLineChart from "examples/Charts/LineCharts/GradientLineChart";

// Argon Dashboard 2 MUI base styles
import typography from "assets/theme/base/typography";

// Dashboard layout components
import Slider from "layouts/guest-layout/dashboard/components/Slider";

// Data
import gradientLineChartData from "layouts/guest-layout/dashboard/data/gradientLineChartData";
import holidaysTableData from "layouts/guest-layout/dashboard/data/holidaysTableData";
import categoriesListData from "layouts/guest-layout/dashboard/data/categoriesListData";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URLS } from "config/apiUrls";

function GuestDashboard() {
  const { size } = typography;

  const [companies, setCompanies] = useState("");
  const [employees, setEmployees] = useState("");
  const [comments, setComments] = useState("");
  const [allUsers, setAllUsers] = useState("");

  useEffect(() => {
    axios.get(`${API_URLS.company.localhost}/get-number-company`).then((response) => {
      setCompanies(response.data);
      console.log("companies... ", response.data);
    });

    axios.get(`${API_URLS.user.localhost}/get-number-of-employees`).then((response) => {
      setEmployees(response.data);
    });

    axios.get(`${API_URLS.comment.localhost}/get-number-of-comments`).then((response) => {
      setComments(response.data);
    });

    axios.get(`${API_URLS.user.localhost}/get-number-of-all-users`).then((response) => {
      setAllUsers(response.data);
    });

  }, []);


  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ArgonBox py={3}>
        <Grid container spacing={3} mb={3}>
          <Grid item xs={12} md={6} lg={3}>
            <DetailedStatisticsCard
              title="number of companies"
              count={companies}
              icon={{ color: "info", component: <i className="ni ni-building" /> }}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <DetailedStatisticsCard
              title="number of employees"
              count={employees}
              icon={{ color: "error", component: <i className="ni ni-single-02" /> }}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <DetailedStatisticsCard
              title="number of comments"
              count={comments}
              icon={{ color: "success", component: <i className="ni ni-paper-diploma" /> }}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <DetailedStatisticsCard
              title="number of users in platform"
              count={allUsers}
              icon={{ color: "warning", component: <i className="ni ni-world-2" /> }}
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

export default GuestDashboard;
