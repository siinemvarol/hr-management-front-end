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

/** 
  All of the routes for the Soft UI Dashboard React are added here,
  You can add a new route, customize the routes and delete the routes here.
  Once you add a new route on this file it will be visible automatically on
  the Sidenav.
  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that has other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

// Argon Dashboard 2 MUI layouts
import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
import Billing from "layouts/billing";
import VirtualReality from "layouts/virtual-reality";
import RTL from "layouts/rtl";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";
import ApproveNewCompanies from "./approve-new-companies";

import AddNewCompany from "./add-new-company";
import AdminDashboard from "layouts/admin-dashboard";
import ApproveNewComments from "./approve-new-comments";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import Employee from "layouts/employee/employees";
import CompanyInfo from "layouts/company-info/company";
import Default from "layouts/dashboard";
import AdminHomePage from "./dashboard";

const adminRoutes = [

  {
    type: "route",
    name: "Admin",
    key: "dashboard",
    route: "/admin",

    icon: <ArgonBox component="i" color="success" fontSize="14px" className="ni ni-single-copy-04" />,
    component: < AdminHomePage/>,
  },
 
  {
    type: "route",
    name: "Approve New Companies",
    key: "approve-new-companies",
    route: "/admin/approve-new-companies",
    icon: <ArgonBox component="i" color="success" fontSize="14px" className="ni ni-single-copy-04" />,
    component: <ApproveNewCompanies />,
  },
  {
    type: "route",
    name: "Add New Company",
    key: "add-new-company",
    route: "/admin/add-new-company",
    icon: <ArgonBox component="i" color="success" fontSize="14px" className="ni ni-single-copy-04" />,
    component: <AddNewCompany />,
  },
  {
    type: "route",
    name: "Approve New Comments",
    key: "approve-new-comments",
    route: "/admin/approve-new-comments",
    icon: <ArgonBox component="i" color="success" fontSize="14px" className="ni ni-single-copy-04" />,
    component: <ApproveNewComments />,
  },


  {
    type: "route",
    name: "Profile",
    key: "profile",
    route: "/admin/profile",
    icon: <ArgonBox component="i" color="dark" fontSize="14px" className="ni ni-single-02" />,
    component: <Profile />,
  },

];

export default adminRoutes;
