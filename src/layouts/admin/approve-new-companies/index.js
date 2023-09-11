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

// Argon Dashboard 2 MUI components
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Billing page components
import BaseLayout from "layouts/admin/components/BaseLayout";
import NewCompaniesApproval from "layouts/admin/components/NewCompaniesApproval";

function ApproveNewCompanies() {
  return (
    <BaseLayout stickyNavbar>
      <ArgonBox mt={4}>
        <ArgonBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={8}>
              <Grid container spacing={3}>
                <Grid item xs={12} xl={6}></Grid>
                <Grid item xs={12} md={6} xl={3}>
                  <DefaultInfoCard
                    icon="create_new_folder_outlined"
                    title="Applications"
                    description="Waiting for Approval"
                    value="3"
                  />
                </Grid>
                <Grid item xs={12} md={6} xl={3}>
                  <DefaultInfoCard
                    icon="business_outlined"
                    title="Total"
                    description="Total Companies in the System"
                    value="15"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </ArgonBox>
        {/* below is code for new company requests */}
        <ArgonBox mb={3} sx={{ width: "173%"}}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={7}>
              <NewCompaniesApproval />
            </Grid>
          </Grid>
        </ArgonBox>
      </ArgonBox>
    </BaseLayout>
  );
}

export default ApproveNewCompanies;
