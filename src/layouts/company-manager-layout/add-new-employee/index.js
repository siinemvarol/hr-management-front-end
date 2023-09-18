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
import Card from "@mui/material/Card";

// react-router-dom components
import { Link } from "react-router-dom";

// calendar
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

// time-picker / clock
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonInput from "components/ArgonInput";
import ArgonButton from "components/ArgonButton";

// Argon Dashboard 2 MUI examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Table from "examples/Tables/Table";

function AddNewEmployee() {
  // const { columns, rows } = authorsTableData;
  // const { columns: prCols, rows: prRows } = projectsTableData;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ArgonBox py={3}>
        <ArgonBox mb={3}>
          <Card sx={{ width: "500px", margin: "0 auto" }} textAlign="center">
            <ArgonBox p={3} mb={1} textAlign="center">
              <ArgonTypography variant="h5" fontWeight="medium">
                New Employee
              </ArgonTypography>
            </ArgonBox>

            <ArgonBox pt={2} pb={3} px={3}>
              <ArgonBox
                component="form"
                role="form"
                onSubmit={() => {
                  handleSubmit;
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  {/* First Column */}
                  <div style={{ flex: 1, marginRight: "16px" }}>
                    <ArgonBox mb={2}>
                      <ArgonInput placeholder="Name" name="name" />
                    </ArgonBox>
                    <ArgonBox mb={2}>
                      <ArgonInput type="email" placeholder="Personal Email" name="personal-email" />
                    </ArgonBox>
                    <ArgonBox mb={2}>
                      <ArgonInput type="email" placeholder="Company Email" name="company-email" />
                    </ArgonBox>
                    <ArgonBox mb={2}>
                      <ArgonInput type="number" placeholder="Salary" name="salary" />
                    </ArgonBox>
                  </div>

                  {/* Second Column */}
                  <div style={{ flex: 1 }}>
                    <ArgonBox mb={2}>
                      <ArgonInput placeholder="Surname" name="surname" />
                    </ArgonBox>
                    <ArgonBox mb={2}>
                      <ArgonInput placeholder="Phone Number" name="phone" />
                    </ArgonBox>

                    <ArgonBox mb={2}>
                      <ArgonInput type="password" placeholder="Password" name="password" />
                    </ArgonBox>
                  </div>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <div style={{ flex: 1 }}>
                    <ArgonBox mb={2}>
                      <ArgonTypography color="text" fontWeight="bold" fontSize="0.7em">
                        Start of Work Days
                      </ArgonTypography>
                    </ArgonBox>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <ArgonBox mb={2}>
                        <Calendar onChange={() => {}} />
                      </ArgonBox>
                    </div>

                    <ArgonBox mb={2}>
                      <ArgonTypography color="text" fontWeight="bold" fontSize="0.7em">
                        End of Work Days
                      </ArgonTypography>
                    </ArgonBox>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <ArgonBox mb={2}>
                        <Calendar onChange={() => {}} />
                      </ArgonBox>
                    </div>

                    <ArgonBox mb={2}>
                      <ArgonTypography color="text" fontWeight="bold" fontSize="0.7em">
                        Start of Break Hour
                      </ArgonTypography>
                    </ArgonBox>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <ArgonBox mb={2}>
                      <TimePicker onChange={() => {}} />
                      </ArgonBox>
                    </div>

                    <ArgonBox mb={2}>
                      <ArgonTypography color="text" fontWeight="bold" fontSize="0.7em">
                        End of Break Hour
                      </ArgonTypography>
                    </ArgonBox>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <ArgonBox mb={2}>
                        <TimePicker onChange={() => {}} />
                      </ArgonBox>
                    </div>
                  </div>
                </div>

                <ArgonBox mt={4} mb={1}>
                  <ArgonButton variant="gradient" color="dark" fullWidth type="submit">
                    Add
                  </ArgonButton>
                </ArgonBox>
                <ArgonBox mt={2}>
                  <ArgonTypography color="text" fontWeight="ligth" fontSize="0.7em">
                    A link will be sent to employee&apos;s personal email address for verification.
                  </ArgonTypography>
                </ArgonBox>
              </ArgonBox>
            </ArgonBox>
          </Card>
        </ArgonBox>
      </ArgonBox>
      <Footer />
    </DashboardLayout>
  );
}

export default AddNewEmployee;
