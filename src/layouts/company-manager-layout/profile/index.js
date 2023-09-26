import React, { useState, useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import CompanyManagerInfoCard from "examples/Cards/InfoCards/CompanyManagerInfoCard";
import Header from "layouts/company-manager-layout/profile/components/Header";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from 'examples/Navbars/DashboardNavbar';
import Footer from "examples/Footer";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { API_URLS } from "config/apiUrls";

const bgImage =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/profile-layout-header.jpg";

function CompanyManagerProfile() {
 // const [userData, setUserData] = useState({});
  const storedToken = localStorage.getItem("Authorization");
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    if (storedToken) {
      const decodedToken = jwt_decode(storedToken);
      console.log(decodedToken);
      axios
        .get(`${API_URLS.user.localhost}/find-by-id/${decodedToken.id}`)
        .then((response) => {
          console.log("User data retrieved:", response.data);
          setUserInfo(response.data);
        })
        .catch((error) => {
          console.error("An error occurred while trying to retrieve user information:", error);
        });
    }
  }, [storedToken]);

  return (
    <DashboardLayout
      sx={{
        backgroundImage: ({ functions: { rgba, linearGradient }, palette: { gradients } }) =>
          `${linearGradient(
            rgba(gradients.info.main, 0.6),
            rgba(gradients.info.state, 0.6)
          )}, url(${bgImage})`,
        backgroundPositionY: "50%",
      }}
    >
       <DashboardNavbar/>
      <Header fullName={`${userInfo.name} ${userInfo.surname}`} />
      <ArgonBox mt={5} mb={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} xl={4}>
            <CompanyManagerInfoCard
              title="Profile Information"
              info={{
                name: userInfo?.name || "",
                surname: userInfo?.surname || "",
                companyEmail: userInfo?.companyEmail || "",
                phone: userInfo?.phone || "",
                address: userInfo?.address || "",
                info: userInfo?.info || "",
                birthday: userInfo?.birthday || "",
              }}
              social={[
                {
                  link: "https://www.facebook.com/",
                  icon: <FacebookIcon />,
                  color: "facebook",
                },
                {
                  link: "https://twitter.com/",
                  icon: <TwitterIcon />,
                  color: "twitter",
                },
                {
                  link: "https://www.instagram.com/",
                  icon: <InstagramIcon />,
                  color: "instagram",
                },
              ]}
              action={{ route: "", tooltip: "Edit Profile" }}
              edit={true}
              sx={{
                maxWidth: "400px", 
                overflow: "auto",
              }}
            />
          </Grid>
        </Grid>
      </ArgonBox>
      <Footer />
    </DashboardLayout>
  );
}

export default CompanyManagerProfile;
