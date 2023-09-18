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
import { useEffect, useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

// Argon Dashboard 2 MUI example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Footer from "examples/Footer";
//import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
import EmployeeInfoCard from "examples/Cards/InfoCards/EmployeeInfoCard";
// import ProfilesList from "examples/Lists/ProfilesList";
// import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";
// import PlaceholderCard from "examples/Cards/PlaceholderCard";

// Overview page components
import Header from "layouts/employee-layout/profile/components/Header";
// import PlatformSettings from "layouts/profile/components/PlatformSettings";

// Data
// import profilesListData from "layouts/profile/data/profilesListData";

// Images
// import homeDecor1 from "assets/images/home-decor-1.jpg";
// import homeDecor2 from "assets/images/home-decor-2.jpg";
// import homeDecor3 from "assets/images/home-decor-3.jpg";
// import team1 from "assets/images/team-1.jpg";
// import team2 from "assets/images/team-2.jpg";
// import team3 from "assets/images/team-3.jpg";
// import team4 from "assets/images/team-4.jpg";
const bgImage =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/profile-layout-header.jpg";

function Overview() {
  const storedToken = localStorage.getItem("Authorization");

  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    if (storedToken) {
      const decodedToken = jwt_decode(storedToken);
      console.log(decodedToken);
      axios
        .get(`http://10.92.12.248:9095/api/v1/user/find-by-id/${decodedToken.id}`)
        .then((response) => {
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
      <Header />
      <ArgonBox mt={5} mb={3}>
        <Grid container spacing={3} >
          {/* <Grid item xs={12} md={6} xl={4}>
            <PlatformSettings />
          </Grid> */}
          <Grid item xs={12} md={6} xl={4}>
            {/* <ProfileInfoCard */}
            <EmployeeInfoCard 
              title="profile information"
              // description=""
              info={{
                name: userInfo?.name || "",
                surname: userInfo?.surname || "",
                companyEmail: userInfo?.companyEmail || "",
                personalEmail: userInfo?.personalEmail || "",
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
          {/* <Grid item xs={12} xl={4}>
            <ProfilesList title="conversations" profiles={profilesListData} />
          </Grid> */}
        </Grid>
      </ArgonBox>
      <ArgonBox>
        {/* <Card>
          <ArgonBox pt={2} px={2}>
            <ArgonBox mb={0.5}>
              <ArgonTypography variant="h6" fontWeight="medium">
                Projects
              </ArgonTypography>
            </ArgonBox>
            <ArgonBox mb={1}>
              <ArgonTypography variant="button" fontWeight="regular" color="text">
                Architects design houses
              </ArgonTypography>
            </ArgonBox>
          </ArgonBox>
          <ArgonBox p={2}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6} xl={3}>
                <DefaultProjectCard
                  image={homeDecor1}
                  label="project #2"
                  title="modern"
                  description="As Uber works through a huge amount of internal management turmoil."
                  action={{
                    type: "internal",
                    route: "/pages/profile/profile-overview",
                    color: "info",
                    label: "View Project",
                  }}
                  authors={[
                    { image: team1, name: "Elena Morison" },
                    { image: team2, name: "Ryan Milly" },
                    { image: team3, name: "Nick Daniel" },
                    { image: team4, name: "Peterson" },
                  ]}
                />
              </Grid>
              <Grid item xs={12} md={6} xl={3}>
                <DefaultProjectCard
                  image={homeDecor2}
                  label="project #1"
                  title="scandinavian"
                  description="Music is something that every person has his or her own specific opinion about."
                  action={{
                    type: "internal",
                    route: "/pages/profile/profile-overview",
                    color: "info",
                    label: "View Project",
                  }}
                  authors={[
                    { image: team3, name: "Nick Daniel" },
                    { image: team4, name: "Peterson" },
                    { image: team1, name: "Elena Morison" },
                    { image: team2, name: "Ryan Milly" },
                  ]}
                />
              </Grid>
              <Grid item xs={12} md={6} xl={3}>
                <DefaultProjectCard
                  image={homeDecor3}
                  label="project #3"
                  title="minimalist"
                  description="Different people have different taste, and various types of music."
                  action={{
                    type: "internal",
                    route: "/pages/profile/profile-overview",
                    color: "info",
                    label: "View Project",
                  }}
                  authors={[
                    { image: team4, name: "Peterson" },
                    { image: team3, name: "Nick Daniel" },
                    { image: team2, name: "Ryan Milly" },
                    { image: team1, name: "Elena Morison" },
                  ]}
                />
              </Grid>
              <Grid item xs={12} md={6} xl={3}>
                <PlaceholderCard title={{ variant: "h5", text: "New project" }} outlined />
              </Grid>
            </Grid>
          </ArgonBox>
        </Card> */}
      </ArgonBox>

      <Footer />
    </DashboardLayout>
  );
}

export default Overview;
