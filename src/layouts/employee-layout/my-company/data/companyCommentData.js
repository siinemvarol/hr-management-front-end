/* eslint-disable react/prop-types */
// @mui material components

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonProgress from "components/ArgonProgress";
import { useEffect, useState } from "react";
import axios from "axios";
import Table from "examples/Tables/Table";
import jwt_decode from "jwt-decode";
import { API_URLS } from "config/apiUrls";

function CompanyCommentData() {
  const storedToken = localStorage.getItem("Authorization");
  const [commentInfo, setCommentInfo] = useState(null);

  useEffect(() => {
    if (storedToken) {
      const decodedToken = jwt_decode(storedToken);
      console.log(decodedToken);

      // below URL should be changed to `http://localhost:9093/api/v1/comment/get-comments-by-company/${decodedToken.id}`
      // after navigation by roles is completed

      axios
        .get(`${API_URLS.comment.localhost}/get-comments-by-company/${decodedToken.id}`)
        .then((response) => {
          setCommentInfo(response.data);
          console.log("response data is...", response.data);
        })
        .catch((error) => {
          console.log("An error occured while trying to retrieve comment information: ", error);
        });
    }
  }, [storedToken]);

  if (commentInfo === null) {
    console.log("An error occured while trying to retrieve comment information.. ");
    return <div>Loading...</div>;
  }

  const rows = commentInfo.map((comment, index) => ({
    // employee: (
    //   <ArgonTypography key={index} fontWeight="medium" fontSize="0.9em">
    //     employee1
    //   </ArgonTypography>
    // ),
    header: (
      <ArgonBox sx={{ padding: "0 0 0 13px" }}>
        <ArgonTypography key={index} variant="caption" color="text" fontWeight="medium">
          {comment?.header}
        </ArgonTypography>
      </ArgonBox>
    ),
    comment: (
      <ArgonBox sx={{ padding: "0 0 0 11px" }}>
        <ArgonTypography key={index} variant="caption" color="text" fontWeight="medium">
          {comment?.content}
        </ArgonTypography>
      </ArgonBox>
    ),
  }));

  const companyCommentData = {
    columns: [
      // { name: "employee", align: "left" },
      { name: "header", align: "left" },
      { name: "comment", align: "left" },
    ],
    rows: rows,
  };

  return <Table columns={companyCommentData.columns} rows={companyCommentData.rows} />;
}

export default CompanyCommentData;
