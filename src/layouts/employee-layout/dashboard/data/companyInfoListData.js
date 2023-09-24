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

// Argon Dashboard 2 MUI components
import ArgonTypography from "components/ArgonTypography";

const categoriesListData = [
  {
    color: "dark",
    icon: <i className="ni ni-mobile-button" style={{ fontSize: "12px" }} />,
    name: "Web Development",
    description: (
      <>
        Department Head,{" "}
        <ArgonTypography variant="caption" color="text" fontWeight="medium">
          John Smith
        </ArgonTypography>
      </>
    ),
    route: "/",
  },
  {
    color: "dark",
    icon: <i className="ni ni-tag" style={{ fontSize: "12px" }} />,
    name: "Marketing",
    description: (
      <>
        Department Head,{" "}
        <ArgonTypography variant="caption" color="text" fontWeight="medium">
          Maryam Amiri
        </ArgonTypography>
      </>
    ),
    route: "/",
  },
  {
    color: "dark",
    icon: <i className="ni ni-box-2" style={{ fontSize: "12px" }} />,
    name: "App Development",
    description: (
      <>
        Department Head,{" "}
        <ArgonTypography variant="caption" color="text" fontWeight="medium">
          Fidel Tonn
        </ArgonTypography>
      </>
    ),
    route: "/",
  },
  {
    color: "dark",
    icon: <i className="ni ni-satisfied" style={{ fontSize: "12px" }} />,
    name: "Support",
    description: (
      <>
        Department Head,{" "}
        <ArgonTypography variant="caption" color="text" fontWeight="medium">
          Frank Camly
        </ArgonTypography>
      </>
    ),
    route: "/",
  },
];

export default categoriesListData;
