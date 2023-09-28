import React, { useState, useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import Tooltip from "@mui/material/Tooltip";
import Grid from "@mui/material/Grid";
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import colors from "assets/theme/base/colors";
import typography from "assets/theme/base/typography";
import { Button, Stack, TextField } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import LocationOnIcon from "@mui/icons-material/LocationOn"; 
import PhoneIcon from "@mui/icons-material/Phone"; 
import EmailIcon from "@mui/icons-material/Email"; 
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
import AccountBoxTwoToneIcon from "@mui/icons-material/AccountBoxTwoTone";
import ArgonButton from "components/ArgonButton";

function GuestInfoCard({ title, description, info, social, action }) {
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
      .put(`http://localhost:9095/api/v1/user/update-guest/${decodedToken.id}`, editedInfo)
      .then((response) => {
        console.log("User data updated:", response.data);
        setEditMode(false);
        window.location.reload(); // Sayfayı yenilendigi zaman soldaki sidenav bozuluyor.
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
      case "personal email":
        return <EmailIcon />;
      case "name":
        return <AccountCircleTwoToneIcon />;
      case "surname":
        return <AccountBoxTwoToneIcon />;
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
        <ArgonTypography color="blue">
        {getIcon(label)}
        </ArgonTypography>
        
      </ArgonBox>

      <ArgonTypography
        variant="button"
        fontWeight="bold"
        textTransform="capitalize"
        sx={{ fontSize: "0.9rem", paddingLeft: "30px", marginTop: "-1px" }}
      >
        {editMode ? "" : `${label}:`}
      </ArgonTypography>
      <ArgonTypography variant="button" fontWeight="regular" color="text" textTransform="capitalize" width="400px">
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
                  pointerEvents: label === "personal email" && "none",
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
          sx={{ fontSize: "0.9rem", paddingLeft: "10px" }} 
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
    <Card
      sx={{
        width: "309%",
        backgroundColor: "#f8f9fa",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
        border: "1px solid #e0e0e0",
      }}
    >
      <Grid container>
        <Grid item xs={12}>
          <ArgonBox display="flex" justifyContent="space-between" alignItems="center" pt={2} px={2}>
            <ArgonTypography variant="h6" fontWeight="medium" textTransform="capitalize">
              {title}
            </ArgonTypography>

            <ArgonTypography component={Link} to={action.route} variant="body2" color="secondary">
              <Tooltip title={action.tooltip} placement="top">
                <Stack direction="row">
                  <ArgonButton
                    size="small"
                    color="info"
                    variant="contained"
                    startIcon={<EditIcon />}
                    onClick={handleEditClick}
                    sx={{ p: "8px 16px", fontSize: "0.75rem" }}
                  >
                    Edit
                  </ArgonButton>
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
                <form>
                  {renderItems}
                  <Stack direction="row" spacing={2} sx={{ justifyContent: "center" }}>
                    <ArgonButton
                      variant="contained"
                      onClick={handleSubmit}
                      color="success"
                      sx={{
                        mt: 2,
                        mx: "auto",
                        p: "8px 16px",
                        fontSize: "0.75rem",                        
                       
                      }}
                    >
                      Save
                    </ArgonButton>
                    <ArgonButton
                      variant="contained"
                      onClick={handleCancelEdit}
                      color="error"
                      sx={{
                        mt: 2,
                        mx: "auto",
                        p: "8px 16px",
                        fontSize: "0.75rem",
                        
                       
                      }}
                    >
                      Cancel
                    </ArgonButton>
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

GuestInfoCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  info: PropTypes.objectOf(PropTypes.string).isRequired,
  social: PropTypes.arrayOf(PropTypes.object).isRequired,
  action: PropTypes.shape({
    route: PropTypes.string.isRequired,
    tooltip: PropTypes.string.isRequired,
  }).isRequired,
};

export default GuestInfoCard;
