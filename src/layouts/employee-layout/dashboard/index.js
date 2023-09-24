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

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";

// Argon Dashboard 2 MUI example components
import DashboardLayout from "./DashboardLayout";
import DashboardNavbar from "./DashboardNavbar";
import Footer from "examples/Footer";
import HolidaysTable from "./HolidaysTable";

// Argon Dashboard 2 MUI base styles
import typography from "assets/theme/base/typography";

// Data
import holidaysTableData from "layouts/employee-layout/dashboard/data/holidaysTableData";
import EmployeeInfo from "././components/EmployeeInfo";
import CompanyInfo from "./components/CompanyInfo";
import Slider from "./components/Slider";

function EmployeeHomePage() {
  const { size } = typography;
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ArgonBox py={10} >    
     
          <Grid item xs={12} md={8} mb={-28} style={{ justifyContent: "center" , width: '70vw'}} >
                <EmployeeInfo />
              </Grid>
          <Grid item xs={12} md={8} style={{ justifyContent: "center" , width: '73vw'}} > 
                <CompanyInfo />
              </Grid>
          <Grid item xs={12} md={8} style={{ justifyContent: "center" , width: '85vw'}} >
            <HolidaysTable title="Public Holidays" rows={holidaysTableData} />
          </Grid>
 
      </ArgonBox>
      <Footer />
    </DashboardLayout>
  );
}

export default EmployeeHomePage;
