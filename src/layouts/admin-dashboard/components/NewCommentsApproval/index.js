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

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

// New added company components
import NewComment from "layouts/admin/components/NewComment";

function NewCommentsApproval() {
  return (
    <Card 
    // id="delete-account" 
    sx={{ width: 1}}>
      <ArgonBox pt={3} px={2}>
        <ArgonTypography variant="h6" fontWeight="medium">
          New Company Comments
        </ArgonTypography>
      </ArgonBox>
      <ArgonBox pt={1} pb={2} px={2}>
        <ArgonBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <NewComment
            commentText="My company is company 1..."
            employeeName="oliver"
            employeeSurname="viking"
            employeeEmail="oliver@burrito.com"
            companyName="FRB1235476"
          />
          <NewComment
            commentText="My company is company 2..."
            employeeName="lucas"
            employeeSurname="viking"
            employeeEmail="lucas@stone-tech.com"
            companyName="FRB1235476"
          />
          <NewComment
            commentText="My company is company 3..."
            employeeName="ethan"
            employeeSurname="viking"
            employeeEmail="ethan@fiber.com"
            companyName="FRB1235476"
            noGutter
          />
        </ArgonBox>
      </ArgonBox>
    </Card>
  );
}

export default NewCommentsApproval;
