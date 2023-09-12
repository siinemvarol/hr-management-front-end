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
import Icon from "@mui/material/Icon";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonButton from "components/ArgonButton";

// Argon Dashboard 2 MUI contexts
import { useArgonController } from "context";

function NewComment({ commentText, employeeName, employeeSurname, employeeEmail, companyName, noGutter }) {
  const [controller] = useArgonController();
  const { darkMode } = controller;

  return (
    <ArgonBox
      component="li"
      display="flex"
      justifyContent="space-between"
      alignItems="flex-start"
      borderRadius="lg"
      p={3}
      mb={noGutter ? 0 : 1}
      mt={2}
      sx={({ palette: { grey, background } }) => ({
        backgroundColor: darkMode ? background.default : grey[100],
      })}
    >
      <ArgonBox width="100%" display="flex" flexDirection="column">
        <ArgonBox
          display="flex"
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          flexDirection={{ xs: "column", sm: "row" }}
          mb={1}
        >
          <ArgonTypography variant="button" fontWeight="medium" 
          // textTransform="capitalize"
          >
            {commentText}
          </ArgonTypography>

          <ArgonBox
            display="flex"
            alignItems="center"
            mt={{ xs: 2, sm: 0 }}
            ml={{ xs: -1.5, sm: 0 }}
          >
            <ArgonBox mr={1}>
              <ArgonButton variant="text" color="success">
                <Icon>done</Icon>&nbsp;Accept
              </ArgonButton>
            </ArgonBox>
            <ArgonButton variant="text" color="error">
              <Icon>clear</Icon>&nbsp;Deny
            </ArgonButton>
          </ArgonBox>
        </ArgonBox>
        <ArgonBox mb={1} lineHeight={0}>
          <ArgonTypography variant="caption" color="text">
            Employee Name Surname:&nbsp;&nbsp;&nbsp;
            <ArgonTypography variant="caption" fontWeight="medium" textTransform="capitalize">
              {employeeName} {employeeSurname}
            </ArgonTypography>
          </ArgonTypography>
        </ArgonBox>
        <ArgonBox mb={1} lineHeight={0}>
          <ArgonTypography variant="caption" color="text">
            Employee Email Address:&nbsp;&nbsp;&nbsp;
            <ArgonTypography variant="caption" fontWeight="medium">
              {employeeEmail}
            </ArgonTypography>
          </ArgonTypography>
        </ArgonBox>
        <ArgonTypography variant="caption" color="text">
          Company Name:&nbsp;&nbsp;&nbsp;
          <ArgonTypography variant="caption" fontWeight="medium">
            {companyName}
          </ArgonTypography>
        </ArgonTypography>
      </ArgonBox>
    </ArgonBox>
  );
}

// Setting default values for the props of NewComment
NewComment.defaultProps = {
  noGutter: false,
};

// Typechecking props for the NewComment
NewComment.propTypes = {
  commentText: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  employeeName: PropTypes.string.isRequired,
  employeeSurname: PropTypes.string.isRequired,
  employeeEmail: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired,
  noGutter: PropTypes.bool,
};

export default NewComment;
