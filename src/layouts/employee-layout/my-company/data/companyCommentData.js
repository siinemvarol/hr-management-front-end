/* eslint-disable react/prop-types */
// @mui material components

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonProgress from "components/ArgonProgress";
import { func } from "prop-types";
import { useState } from "react";
import axios from "axios";

const companyCommentData = {
  columns: [
    { name: "employee", align: "left" },
    { name: "header", align: "left" },
    { name: "comment", align: "left" },
  ],

  rows: [
    {
      employee: (
        <ArgonBox display="flex" alignItems="center" px={0.5} py={0.5}>
          <ArgonTypography fontWeight="medium" fontSize="1em">
            employee1
          </ArgonTypography>
        </ArgonBox>
      ),
      header: (
        <ArgonTypography variant="caption" color="text" fontWeight="medium">
          $2,500
        </ArgonTypography>
      ),
      comment: (
        <ArgonTypography variant="caption" color="text" fontWeight="medium">
          working
        </ArgonTypography>
      ),
    },
    {
      employee: (
        <ArgonBox display="flex" alignItems="center" px={0.5} py={0.5}>
          <ArgonTypography fontWeight="medium" fontSize="1em">
            employee1
          </ArgonTypography>
        </ArgonBox>
      ),
      header: (
        <ArgonTypography variant="caption" color="text" fontWeight="medium">
          $5,000
        </ArgonTypography>
      ),
      comment: (
        <ArgonTypography variant="caption" color="text" fontWeight="medium">
          done
        </ArgonTypography>
      ),
    },
    {
      employee: (
        <ArgonBox display="flex" alignItems="center" px={0.5} py={0.5}>
          <ArgonTypography fontWeight="medium" fontSize="1em">
            employee1
          </ArgonTypography>
        </ArgonBox>
      ),
      header: (
        <ArgonTypography variant="caption" color="text" fontWeight="medium">
          $3,400
        </ArgonTypography>
      ),
      comment: (
        <ArgonTypography variant="caption" color="text" fontWeight="medium">
          canceled
        </ArgonTypography>
      ),
    },
  ],
};


export default companyCommentData;
