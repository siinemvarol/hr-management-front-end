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
//api urls
import { API_URLS } from "../../../../../../src/config/apiUrls";

import { useEffect, useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";

// @mui material components
import Grid from "@mui/material/Grid";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";

// Argon Dashboard 2 MUI example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from 'examples/Navbars/DashboardNavbar';

// Overview page components
import Header from "./components/Header";
import CompanyInfoCard from "../../CompanyInfoCard";

const bgImage =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/profile-layout-header.jpg";

function CompanyInfo() {
  const storedToken = localStorage.getItem("Authorization");

  const [userInfo, setUserInfo] = useState(null);
  const [companyInfo, setCompanyInfo] = useState(null);

  useEffect(() => {
    if (storedToken) {
      const decodedToken = jwt_decode(storedToken);
      console.log(decodedToken);
      axios
        .get(`${API_URLS.user.localhost}/find-by-id/${decodedToken.id}`)
        .then((response) => {
          const companyId = response.data.companyId;
          console.log(companyId);
          setUserInfo(response.data);
        })
        .catch((error) => {
          console.error("An error occurred while triggering the backend action:", error);
        });
    }
  }, [storedToken]);
  
  useEffect(() => {
    if (userInfo && userInfo.companyId) {
      axios
        .get(`${API_URLS.company.localhost}/find-by-id${userInfo.companyId}`)
        .then((response) => {
          setCompanyInfo(response.data);
        })
        .catch((error) => {
          console.error("An error occurred while trying to retrieve user information:", error);
        });
    }
  }, [userInfo]);
  
  return (
    // <DashboardLayout
    //   sx={{
    //     backgroundImage: ({ functions: { rgba, linearGradient }, palette: { gradients } }) =>
    //       `${linearGradient(
    //         rgba(gradients.info.main, 0.6),
    //         rgba(gradients.info.state, 0.6)
    //       )}, url(${bgImage})`,
    //     backgroundPositionY: "50%",
    //   }}
    // >
      <ArgonBox mt={9} mb={3} >
        <Grid container spacing={3} >
          {/* <Grid item xs={12} md={6} xl={4}>
            <PlatformSettings />
          </Grid> */}
          <Grid item xs={12}>
          <Header />
            <CompanyInfoCard
              title=""
              // description=""
              info={{
                companyName: companyInfo?.companyName || "",
                companyAddress: companyInfo?.companyAddress || "",
                companyPhone: companyInfo?.companyPhone || "",
                infoEmail: companyInfo?.infoEmail || "",
              }}

              // social={[
              //   {
              //     link: "https://www.facebook.com/",
              //     icon: <FacebookIcon />,
              //     color: "facebook",
              //   },
              //   {
              //     link: "https://twitter.com/",
              //     icon: <TwitterIcon />,
              //     color: "twitter",
              //   },
              //   {
              //     link: "https://www.instagram.com/",
              //     icon: <InstagramIcon />,
              //     color: "instagram",
              //   },
              // ]}
            />
          </Grid>
        </Grid>
      </ArgonBox>
    // </DashboardLayout>
  );
}

export default CompanyInfo;
