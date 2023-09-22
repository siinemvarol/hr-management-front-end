import { useState, useEffect } from "react";
import axios from "axios"; // Axios kütüphanesini içe aktarın
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import ArgonBox from "components/ArgonBox";
import Typography from "@mui/material/Typography";
import ArgonAvatar from "components/ArgonAvatar";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import breakpoints from "assets/theme/base/breakpoints";
import burceMars from "assets/images/bruce-mars.jpg";
import PropTypes from "prop-types";

function Header({fullName}) {
  const [tabsOrientation, setTabsOrientation] = useState("horizontal");
  const [tabValue, setTabValue] = useState(0);

  return (
    <ArgonBox position="relative">
      <DashboardNavbar absolute light />
      <ArgonBox height="220px" />
      <Card
        sx={{
          py: 2,
          px: 2,
          boxShadow: ({ boxShadows: { md } }) => md,
        }}
      >
        <Grid container spacing={3} alignItems="center">
          <Grid item>
            <ArgonAvatar
              src={burceMars}
              alt="profile-image"
              variant="rounded"
              size="xl"
              shadow="sm"
            />
          </Grid>
          <Grid item>
            <ArgonBox height="100%" mt={0.5} lineHeight={1}>
              <Typography variant="h5" fontWeight="medium" sx={{ display: "inline" }}>
                {fullName}
              </Typography>
            </ArgonBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4} sx={{ ml: "auto" }}>
            {/* Tab Menüsü Burada Olabilir */}
          </Grid>
        </Grid>
      </Card>
    </ArgonBox>
  );
}
Header.propTypes = {
  fullName: PropTypes.string.isRequired, // fullName prop'unun bir dize olduğunu ve zorunlu olduğunu belirtiyoruz.
};

export default Header;
