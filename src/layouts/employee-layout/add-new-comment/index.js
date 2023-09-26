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
import {API_URLS} from '../../../config/apiUrls';

// @mui material components
import Card from "@mui/material/Card";

// react components
import { useEffect, useState } from "react";

// react-router-dom components
import { Link } from "react-router-dom";

// calendar
import "react-calendar/dist/Calendar.css";

// time-picker / clock
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonInput from "components/ArgonInput";
import ArgonButton from "components/ArgonButton";

// Argon Dashboard 2 MUI examples
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';
import DashboardNavbar from 'examples/Navbars/DashboardNavbar';
import Footer from "examples/Footer";
import axios from "axios";
import jwt_decode from "jwt-decode";

function AddNewComment() {
  const storedToken = localStorage.getItem("Authorization");
  const [isCommentAdded, setIsCommentAdded] = useState(false);
  const [header, setHeader] = useState("");
  const [content, setContent] = useState("");

  const handleHeaderChange = (event) => {
    setHeader(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleAddCommentSuccess = () => {
    setIsCommentAdded(true);
  };

   function handleAddNewComment() {
    if(storedToken){
      const decodedToken = jwt_decode(storedToken);
      console.log(decodedToken);

      const addNewCommentRequestDto = {
        // authid below line should be "decodedToken.id" when navigate by role is working
        authid: decodedToken.id,
        header: header,
        content: content,
      };
      // below URL should be changed to `http://localhost:9091/api/v1/company/add-comment/${decodedToken.id}`
      // after navigation by role is working

      axios
      .post(`${API_URLS.company.localhost}/add-comment/${decodedToken.id}`, addNewCommentRequestDto)
      .then((response) => {
        console.log("Adding comment is successfull! ");
        handleAddCommentSuccess();
      })
      .catch((error) => {
        console.error("Adding comment is failed: ", error);
      })
      .finally(() => {
        console.log("isCommentAdded: ", isCommentAdded);
      });
    setHeader("");
    setContent("");

    }
   }

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ArgonBox py={3}>
        <ArgonBox mb={3}>
          <Card sx={{ width: "500px", margin: "0 auto" }} textAlign="center">
            <ArgonBox p={3} mb={1} textAlign="center">
              <ArgonTypography variant="h5" fontWeight="medium">
                Add New Comment
              </ArgonTypography>
            </ArgonBox>

            <ArgonBox pt={2} pb={3} px={3}>
              <ArgonBox component="form" role="form">
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <div style={{ flex: 1, marginRight: "16px" }}>
                    <ArgonBox mb={2}>
                      <ArgonInput
                        placeholder="Header"
                        name="header"
                        value={header}
                        onChange={handleHeaderChange}
                        multiline
                        minRows="1"
                      />
                    </ArgonBox>
                    <ArgonBox mb={2}>
                      <ArgonInput                        
                        placeholder="Content"
                        name="content"
                        value={content}
                        onChange={handleContentChange}
   //                     size="large"
                        multiline
                        minRows="5"
                      />
                    </ArgonBox>
                  </div>
                </div>

                <ArgonBox mt={4} mb={1}>
                  <ArgonButton
                    variant="gradient"
                    color="dark"
                    fullWidth
                    // type="submit"               
                    onClick={() => handleAddNewComment(header, content)}
                  >
                    Add Comment
                  </ArgonButton>
                </ArgonBox>
                <ArgonBox mt={2}>
                  <ArgonTypography color="text" fontWeight="ligth" fontSize="0.7em">
                    {/* NOTES... */}
                  </ArgonTypography>
                </ArgonBox>
              </ArgonBox>
            </ArgonBox>
          </Card>
        </ArgonBox>
      </ArgonBox>
      <Footer />
    </DashboardLayout>
  );
}

export default AddNewComment;
