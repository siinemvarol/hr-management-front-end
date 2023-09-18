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
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";
import GuestRegister from "layouts/authentication/guest-register";
// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import Employee from "layouts/company-manager-layout/employees";
import AddNewCompany from "layouts/admin-layout/add-new-company";
import ApproveNewComments from "layouts/admin-layout/approve-new-comments";
import ApproveNewCompanies from "layouts/admin-layout/approve-new-companies";
import CompanyInfo from "layouts/company-manager-layout/company-info/company"


const routes = [
  {
    type: "route",
    name: "Dashboard",
    key: "dashboard",
    route: "/dashboard",
    icon: <ArgonBox component="i" color="primary" fontSize="14px" className="ni ni-tv-2" />,
    component: <Dashboard />,
  },
  {
    type: "route",
    name: "Profile",
    key: "profile",
    route: "/profile",
    icon: <ArgonBox component="i" color="dark" fontSize="14px" className="ni ni-single-02" />,
    component: <Profile />,
  },
  {
    type: "route",
    name: "Employees",
    key: "employee",
    route: "/employee",
    icon: <ArgonBox component="i" color="dark" fontSize="14px" className="ni ni-single-02" />,
    component: <Employee />,
  },
  {
    type: "route",
    name: "Add New Company",
    key: "add-new-company",
    route: "/add-new-company",
    icon: (
      <ArgonBox component="i" color="warning" fontSize="14px" className="ni ni-calendar-grid-58" />
    ),
    component: <AddNewCompany/>,
  },
  {
    type: "route",
    name: "Approve New Comments",
    key: "approve-new-comments",
    route: "/approve-new-comments",
    icon: (
      <ArgonBox component="i" color="warning" fontSize="14px" className="ni ni-calendar-grid-58" />
    ),
    component: <ApproveNewComments />,
  }, 
  {
    type: "route",
    name: "Approve New Companies",
    key: "approve-new-companies",
    route: "/approve-new-companies",
    icon: (
      <ArgonBox component="i" color="warning" fontSize="14px" className="ni ni-calendar-grid-58" />
    ),
    component: <ApproveNewCompanies />,
  },
  {
    type: "route",
    name: "Company Information",
    key: "company-information",
    route: "/company-information",
    icon: (
      <ArgonBox component="i" color="warning" fontSize="14px" className="ni ni-calendar-grid-58" />
    ),
    component: <CompanyInfo/>,
  },
  { type: "title", title: "Account Pages", key: "account-pages" },
  
  {
    type: "route",
    name: "Login",
    key: "sign-in",
    route: "/authentication/sign-in",
    icon: (
      <ArgonBox component="i" color="warning" fontSize="14px" className="ni ni-single-copy-04" />
    ),
    component: <SignIn />,
  },
  {
    type: "route",
    name: "Company Register",
    key: "sign-up",
    route: "/authentication/sign-up",
    icon: <ArgonBox component="i" color="info" fontSize="14px" className="ni ni-collection" />,
    component: <SignUp />,
  },
  {
    type: "route",
    name: "Guest Register",
    key: "guest-register",
    route: "/authentication/guest-register",
    icon: <ArgonBox component="i" color="info" fontSize="14px" className="ni ni-collection" />,
    component: <GuestRegister />,
  },
];

export default routes;
