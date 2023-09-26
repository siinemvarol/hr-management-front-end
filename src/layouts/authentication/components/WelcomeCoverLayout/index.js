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

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonButton from "components/ArgonButton";

// Argon Dashboard 2 MUI example components
import PageLayout from "examples/LayoutContainers/PageLayout";

// Authentication layout components

import { Link } from "react-router-dom";
import WelcomeFooter from "../WelcomeFooter";

function WelcomeCoverLayout({ title, description, image, imgPosition, quote, children }) {
  return (
    <PageLayout>
      <ArgonBox
        height="62rem"
        width="calc(100% - 2rem)"
        minHeight="70vh"
        borderRadius="lg"
        mx={2}
        mt={2}
        mb={8}
        pt={18}
        pb={20}
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            image &&
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${image})`,
          backgroundSize: "cover",
          // backgroundSize: "100% 100%",
          backgroundPosition: imgPosition,
          backgroundRepeat: "no-repeat",
          position: "relative",
        }}
      >
        <ArgonBox
        // mt={40}
        >
          <ArgonButton
            color="info"
            sx={{
              position: "absolute",
              top: "5%",
              left: "87%",
              transform: "translate(-50%, -50%)", // Center the button
            }}
          >
            <ArgonTypography fontWeight="bold" sx={{ fontSize: "0.9rem" }}>
              Get an Offer
            </ArgonTypography>
          </ArgonButton>
        </ArgonBox>
        <ArgonBox
        // mt={40}
        >
          <ArgonButton
            color="light"
            sx={{
              position: "absolute",
              top: "5%",
              left: "95%",
              transform: "translate(-50%, -50%)", // Center the button
            }}
            component={Link}
            to="/authentication/login"
          >
            <ArgonTypography fontWeight="bold" sx={{ fontSize: "0.9rem" }}>
              Login
            </ArgonTypography>
          </ArgonButton>
        </ArgonBox>

        <Grid container spacing={0} justifyContent="center" sx={{ textAlign: "center" }}>
          <Grid>
            <ArgonBox mb={1}>
              <ArgonTypography
                variant="h1"                
                fontWeight="bold"
                sx={{
                  color: "#11cdef",
                  //            fontFamily: 'Monospace'
                  letterSpacing: 12,
                  fontSize: "70px",
                }}
              >
                {title}
              </ArgonTypography>
            </ArgonBox>
            <ArgonBox mb={2}>
              <ArgonTypography 
              variant="body2"               
              fontWeight="medium" 
              fontSize="large"
              sx={{
                color: "#bfbdb8",
                fontSize: "23px",
              }}
              >
                {description}
              </ArgonTypography>
            </ArgonBox>
            <ArgonBox mb={2}>
              <ArgonTypography
                variant="body2"
                color="secondary"
                fontWeight="bold"
                fontSize="large"
                sx={{
                  fontStyle: "italic",
                  color: "#fca311",
                }}
              >
                {quote}
              </ArgonTypography>
            </ArgonBox>
            <ArgonBox ml={25} mr={25} mt={15}>
              <Grid item>{children}</Grid>
            </ArgonBox>
          </Grid>
        </Grid>
      </ArgonBox>

      <WelcomeFooter />
    </PageLayout>
  );
}

// Setting default values for the props of CoverLayout
WelcomeCoverLayout.defaultProps = {
  title: "",
  description: "",
  imgPosition: "center",
  button: { color: "white" },
};

// Typechecking props for the CoverLayout
WelcomeCoverLayout.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  quote: PropTypes.string,
  image: PropTypes.string.isRequired,
  imgPosition: PropTypes.string,
  button: PropTypes.object,
  children: PropTypes.node.isRequired,
};

export default WelcomeCoverLayout;
