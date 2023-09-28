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

import React, { useState, useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";

// react-routers components
import { Link } from "react-router-dom";

// prop-types is library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Tooltip from "@mui/material/Tooltip";
import Icon from "@mui/material/Icon";
import Grid from "@mui/material/Grid";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

// Argon Dashboard 2 MUI base styles
import colors from "assets/theme/base/colors";
import typography from "assets/theme/base/typography";

//Edit button
import { Button, Stack, TextField } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

import { API_URLS } from "../../../../config/apiUrls";
import LocationOnIcon from "@mui/icons-material/LocationOn"; 
import PhoneIcon from "@mui/icons-material/Phone"; 
import EmailIcon from "@mui/icons-material/Email"; 
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
import AccountBoxTwoToneIcon from "@mui/icons-material/AccountBoxTwoTone";
import InfoIcon from '@mui/icons-material/Info';
import CakeTwoToneIcon from '@mui/icons-material/CakeTwoTone';
import ContactMailTwoToneIcon from '@mui/icons-material/ContactMailTwoTone';

function EmployeeInfoCard({ title, description, info, social, action }) {
  const storedToken = localStorage.getItem("Authorization");
  const { socialMediaColors } = colors;
  const { size } = typography;

  const [editMode, setEditMode] = useState(false);
  const [editedInfo, setEditedInfo] = useState({ ...info });

  useEffect(() => {
    setEditedInfo({ ...info });
  }, [info]);

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setEditedInfo({
      ...editedInfo,
      [name]: value,
    });
  };

  const handleEditClick = () => {
    setEditMode(!editMode);
  };

  const handleCancelEdit = () => {
    setEditMode(false);
    setEditedInfo({
      ...info,
    });
  };

  const handleSubmit = () => {
    const decodedToken = jwt_decode(storedToken);

    axios
      .put(`${API_URLS.user.localhost}/update/${decodedToken.id}`, editedInfo)
      .then((response) => {
        console.log("User data updated:", response.data);
        setEditMode(false);
        window.location.reload();
      })
      .catch((error) => {
        console.error("An error occurred while updating user information:", error);
      });

    setEditMode(false);
  };

  const uniqueLabelsSet = new Set();
  const uniqueValuesSet = new Set();

  Object.keys(info).forEach((el) => {
    const label = el.match(/[A-Z\s]+/)
      ? el.replace(/[A-Z]+/g, (match) => ` ${match.toLowerCase()}`)
      : el;

    uniqueLabelsSet.add(label);
    uniqueValuesSet.add(editedInfo[el]);
  });

  const uniqueLabels = [...uniqueLabelsSet];
  const uniqueValues = [...uniqueValuesSet];
  
  const getIcon = (label) => {
    switch (label) {
      case "address":
        return <LocationOnIcon />;
      case "phone":
        return <PhoneIcon />;
      case "company email":
        return <EmailIcon />;
      case "name":
        return <AccountCircleTwoToneIcon />;
      case "surname":
        return <AccountBoxTwoToneIcon />;
      case "info":
        return <InfoIcon />;
      case "birthday":
        return <CakeTwoToneIcon />;
      case "personal email":
        return <ContactMailTwoToneIcon />;
      default:
        return null;
    }
  };

  const renderItems = uniqueLabels.map((label, index) => (
    <ArgonBox key={label} display="flex" py={2} pr={2} alignItems="center">
      <ArgonBox
        sx={{
          position: "absolute",
          left: "30px",
          transform: "translateY(-50%)",
          color: "blue",
          fontSize: "1.35rem",
          marginTop: "38px",
        }}
      >
        {getIcon(label)}
      </ArgonBox>

      <ArgonTypography
        variant="button"
        fontWeight="bold"
        textTransform="capitalize"
        sx={{ fontSize: "1.3rem", paddingLeft: "30px", marginTop: "-1px" }}
      >
        {editMode ? "" : `${label}:`}
      </ArgonTypography>
      <ArgonTypography variant="button" fontWeight="regular" color="text">
        {editMode ? (
          <React.Fragment>
            <TextField
              label={label}
              name={label}
              defaultValue={uniqueValues[index]}
              onChange={handleFieldChange}
              fullWidth
              variant="outlined"
              sx={{
                fontSize: "0.9rem",
                backgroundColor: "#f0f0f0",
                marginTop: "1px",
                marginLeft: "5px",
                border: "1px solid #ced4da",
                borderRadius: "4px",
              }}
              InputProps={{
                style: {
                  paddingTop: "4px",
                  paddingBottom: "4px",
                  paddingLeft: "5px",
                  pointerEvents: label === "company email" && "none",
                },
              }}
              InputLabelProps={{
                sx: {
                  fontSize: "0.9rem",
                  display: "block",
                  marginTop: "-8px",
                },
              }}
            />
          </React.Fragment>
        ) : (
          <ArgonTypography
          variant="button"
          fontWeight="regular"
          textTransform="capitalize"
          color="text"
          sx={{ fontSize: "1.3rem", paddingLeft: "10px" }} 
        >
          {uniqueValues[index]}
        </ArgonTypography>
        )}
      </ArgonTypography>
    </ArgonBox>
  ));

  const renderSocial = social.map(({ link, icon, color }) => (
    <ArgonBox
      key={color}
      component="a"
      href={link}
      target="_blank"
      rel="noreferrer"
      fontSize={size.lg}
      color={socialMediaColors[color].main}
      pr={1}
      pl={0.5}
      lineHeight={1}
    >
      {icon}
    </ArgonBox>
  ));

  return (
    <Card sx={{ width:"309%"}}>
      <Grid container>
        <Grid item xs={12}>
          <ArgonBox display="flex" justifyContent="space-between" alignItems="center" pt={2} px={2}>
            <ArgonTypography variant="h6" fontWeight="medium" textTransform="capitalize">
              {title}
            </ArgonTypography>

            <ArgonTypography component={Link} to={action.route} variant="body2" color="secondary">
              <Tooltip title={action.tooltip} placement="top">
                <Stack direction="row">
                  <Button
                    size="small"
                    color="primary"
                    variant="contained"
                    startIcon={<EditIcon />}
                    onClick={handleEditClick}
                    sx={{ p: "8px 16px", fontSize: "0.75rem" }}
                  >
                    Edit
                  </Button>
                </Stack>
              </Tooltip>
            </ArgonTypography>
          </ArgonBox>
        </Grid>
        <Grid item xs={12}>
          <ArgonBox p={2}>
            <ArgonBox mb={2} lineHeight={1}>
              <ArgonTypography variant="button" color="text" fontWeight="regular">
                {description}
              </ArgonTypography>
            </ArgonBox>

            <ArgonBox width="180%" ml={2}>
              {editMode ? (
                <form >
                  {renderItems}
                  <Stack direction="row" spacing={2} sx={{ justifyContent: "center" }}>
                    <Button
                      variant="contained"
                      onClick={handleSubmit}
                      sx={{ mt: 2, mx: "auto", p: "8px 16px", fontSize: "0.75rem" }}
                    >
                      Save
                    </Button>
                    <Button
                      variant="contained"
                      onClick={handleCancelEdit}
                      sx={{ mt: 2, mx: "auto", p: "8px 16px", fontSize: "0.75rem" }}
                    >
                      Cancel
                    </Button>
                  </Stack>
                </form>
              ) : (
                renderItems
              )}
            </ArgonBox>
          </ArgonBox>
        </Grid>
      </Grid>
    </Card>
  );
}

EmployeeInfoCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  info: PropTypes.objectOf(PropTypes.string).isRequired,
  social: PropTypes.arrayOf(PropTypes.object).isRequired,
  action: PropTypes.shape({
    route: PropTypes.string.isRequired,
    tooltip: PropTypes.string.isRequired,
  }).isRequired,
};

export default EmployeeInfoCard;