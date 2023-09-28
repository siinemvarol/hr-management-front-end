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
import DetailedStatisticsCard from "./DetailedStatisticsCard";
import HolidaysTable from "./HolidaysTable";

// Argon Dashboard 2 MUI base styles
import typography from "assets/theme/base/typography";

// Dashboard layout components
import Slider from "layouts/dashboard/components/Slider";

// Data
import jwt_decode from "jwt-decode";
import holidaysTableData from "./data/holidaysTableData";

//info cards
import EmployeeInfo from "./components/EmployeeInfo";
import CompanyInfo from "./components/CompanyInfo";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URLS } from "config/apiUrls";

function Default() {
  const { size } = typography;
  const [waitingComments, setWaitingComments] = useState("");
  const [allComments, setAllComments] = useState("");
  const [allEmployeesCompany, setAllEmployeesCompany] = useState("");
  const [allEmployeesPlatform, setAllEmployeesPlatform] = useState("");
  const storedToken = localStorage.getItem("Authorization");

  useEffect(() => {
    if (storedToken) {
      const decodedToken = jwt_decode(storedToken);
      const authid = decodedToken.id;

      axios
        .get(`${API_URLS.user.localhost}/get-all-employees-in-company/${authid}`)
        .then((response) => {
          setAllEmployeesCompany(response.data);
        });

      axios
        .get(`${API_URLS.comment.localhost}/get-total-comments-by-company/${authid}`)
        .then((response) => {
          setAllComments(response.data);
        });

      axios
        .get(`${API_URLS.comment.localhost}/get-total-comments-by-employee/${authid}`)
        .then((response) => {
          setWaitingComments(response.data);
        });
    }

    axios.get(`${API_URLS.user.localhost}/get-number-of-employees`).then((response) => {
      setAllEmployeesPlatform(response.data);
    });
  }, []);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ArgonBox py={3}>
        <Grid container spacing={3} mb={3}>
          <Grid item xs={12} md={6} lg={3}>
            <DetailedStatisticsCard
              title="my pending comments"
              count={waitingComments}
              icon={{ color: "info", component: <i className="ni ni-paper-diploma" /> }}
              // percentage={{ color: "success", count: "+5%", text: "since last month" }}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <DetailedStatisticsCard
              title="all comments of my company"
              count={allComments}
              icon={{ color: "error", component: <i className="ni ni-folder-17" /> }}
              // percentage={{ color: "success", count: "+3%", text: "since last year" }}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <DetailedStatisticsCard
              title="all employees in my company"
              count={allEmployeesCompany}
              icon={{ color: "success", component: <i className="ni ni-building" /> }}
              // percentage={{ color: "success", count: "+10%", text: "since last year" }}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <DetailedStatisticsCard
              title="all employees in platform"
              count={allEmployeesPlatform}
              icon={{ color: "warning", component: <i className="ni ni-world-2" /> }}
              // percentage={{ color: "success", count: "+5%", text: "than last year" }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3} mb={3}>
          <Grid item xs={12} lg={7}>
            {/* <GradientLineChart
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
            /> */}
            <EmployeeInfo />
          </Grid>
          <Grid item xs={12} lg={5}>
            <Slider />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <HolidaysTable title="Public Holidays" rows={holidaysTableData} />
          </Grid>
          <Grid item xs={12} md={4}>
            <CompanyInfo />
          </Grid>
        </Grid>
      </ArgonBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Default;
