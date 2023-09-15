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

// @mui material components
import Card from "@mui/material/Card";
import axios from "axios";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import { item } from "examples/Sidenav/styles/sidenavItem";

// New added company components
import NewComment from "layouts/admin-dashboard/components/NewComment";
import { useEffect, useState } from "react";

function NewCommentsApproval() {


  //Get Not Authorized Comments method=>>NewCompany.js
  const [commentTableData2, setCommentTableData2] = useState([]);
  const fetchCommentData = () => {
    axios
      .get("http://localhost:9093/api/v1/comment/get-pending-comments")
      .then((response) => {
        const apiData = response.data;

        const mappedData = apiData.map((item) => {
          return {
            id: item.id,
            createDate: item.createDate,
            updateDate: item.updateDate,
            userId: item.userId,
            header: item.header,
            content: item.content,
            status: item.status,
          };
        });

        setCommentTableData2(mappedData);
        console.log(mappedData);
      })
      .catch((error) => {
        console.error("Error fetching comment data:", error);
      });
  };

  useEffect(() => {

    fetchCommentData();


    const interval = setInterval(fetchCommentData, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Card 
    // id="delete-account" 
    sx={{ width: 1}}>
      <ArgonBox pt={3} px={2}>
        <ArgonTypography variant="h6" fontWeight="medium">
          New Company Comments
        </ArgonTypography>
      </ArgonBox>
      <ArgonBox pt={1} pb={2} px={2}>
      <ArgonBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          {commentTableData2.map((item) => (
            <NewComment
              key={item.id}
              commentId={item.id}
              createDate={item.createDate}
              updateDate={item.updateDate}
              userId={item.userId}
              header={item.header}
              content={item.content}
              status={item.status}
            />
          ))}
        </ArgonBox>
      </ArgonBox>
    </Card>
  );
}

export default NewCommentsApproval;
