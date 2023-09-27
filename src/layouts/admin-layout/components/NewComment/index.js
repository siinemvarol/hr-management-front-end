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
import axios from "axios";
import ArgonAvatar from "components/ArgonAvatar";
import { useState } from "react";
import burceMars from "assets/images/bruce-mars.jpg";

function NewComment({ content, commentId, createDate, updateDate, noGutter, userId, header,status, company, employee, authId }) {


  const handleAcceptClick = (userId) => {

    axios.put(`http://localhost:9093/api/v1/comment/activate-comment?id=${commentId}`, {
      status: 'APPROVED' 
    })
      .then(response => {

        console.log('Comment status updated successfully:', response.data);
        alert("Comment Succesfully")
        
      })
      .catch(error => {

        console.error('Error updating company status:', error);
      });
  };

  const handleDenyClick = (commentId) => {

    axios.put(`http://localhost:9093/api/v1/comment/denied-comment?id=${commentId}`, {
      status: 'DENIED' 
    })
      .then(response => {

        console.log('Comment status denied successfully:', response.data);
        alert("Comment Denied")
      })
      .catch(error => {

        console.error('Error denying company:', error);
      });
  };


  NewComment.propTypes = {
    content: PropTypes.string.isRequired,
    commentId: PropTypes.string.isRequired,
    createDate: PropTypes.string.isRequired,
    updateDate: PropTypes.string.isRequired,
    noGutter: PropTypes.bool,
    userId: PropTypes.number,
    header: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    employee: PropTypes.string.isRequired,
    authId : PropTypes.string.isRequired
  };


  const handleImageError = () => {
    // Burce Mars fotoğrafını yükleme hatası durumunda kullan
    setProfileImage(burceMars);
  };

  const [controller] = useArgonController();
  const { darkMode } = controller;
  const [profileImage, setProfileImage] = useState(
    "http://localhost:9095/api/v1/user/images/" + userId
  );
// console.log(authId)

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
              <ArgonAvatar
              src={profileImage}  //getImage metotundan dönen image profil fotosu olarak yazdırılıyor
              alt="profile-image"
              variant="rounded"
              size="xl"
              shadow="sm"
              onError={handleImageError}
            />
          <ArgonTypography variant="button" fontWeight="medium" 
          // textTransform="capitalize"
          >
            {header}
          </ArgonTypography>

          <ArgonBox
            display="flex"
            alignItems="center"
            mt={{ xs: 2, sm: 0 }}
            ml={{ xs: -1.5, sm: 0 }}
          >
            <ArgonBox mr={1}>
            <ArgonButton variant="text" color="success" onClick={() => handleAcceptClick(commentId)}>
              <Icon>done</Icon>&nbsp;Accept
            </ArgonButton>
            </ArgonBox>
            <ArgonButton variant="text" color="error" onClick={() => handleDenyClick(commentId)}>
              <Icon>clear</Icon>&nbsp;Deny
            </ArgonButton>
          </ArgonBox>
        </ArgonBox>
        {/* <ArgonBox mb={1} lineHeight={0}>
          <ArgonTypography variant="caption" color="text">
            Create Date - Update Date :&nbsp;&nbsp;&nbsp;
            <ArgonTypography variant="caption" fontWeight="medium" textTransform="capitalize">
              {createDate} {updateDate}
            </ArgonTypography>
          </ArgonTypography>
        </ArgonBox> */}
        <ArgonBox mb={1} lineHeight={0}>
          <ArgonTypography variant="caption" color="text">
            Header :&nbsp;&nbsp;&nbsp;
            <ArgonTypography variant="caption" fontWeight="medium">
              {header}
            </ArgonTypography>
          </ArgonTypography>
        </ArgonBox>
        <ArgonBox mb={1} lineHeight={0}>
          <ArgonTypography variant="caption" color="text">
            Content :&nbsp;&nbsp;&nbsp;
            <ArgonTypography variant="caption" fontWeight="medium">
              {content}
            </ArgonTypography>
          </ArgonTypography>
        </ArgonBox>
        <ArgonBox mb={1} lineHeight={0}>
          <ArgonTypography variant="caption" color="text">
            Company :&nbsp;&nbsp;&nbsp;
            <ArgonTypography variant="caption" fontWeight="medium">
              {company}
            </ArgonTypography>
          </ArgonTypography>
        </ArgonBox>
        <ArgonBox mb={1} lineHeight={0}>
          <ArgonTypography variant="caption" color="text">
            Name :&nbsp;&nbsp;&nbsp;
            <ArgonTypography variant="caption" fontWeight="medium">
              {employee}
            </ArgonTypography>
          </ArgonTypography>
        </ArgonBox>
        <ArgonBox mb={1} lineHeight={0}>
          <ArgonTypography variant="caption" color="text">
            Status :&nbsp;&nbsp;&nbsp;
            <ArgonTypography variant="caption" fontWeight="medium">
              {status}
            </ArgonTypography>
          </ArgonTypography>
        </ArgonBox>
      </ArgonBox>
    </ArgonBox>
  );
}

// Setting default values for the props of NewComment
NewComment.defaultProps = {
  noGutter: false,
};

// Typechecking props for the NewComment


export default NewComment;
