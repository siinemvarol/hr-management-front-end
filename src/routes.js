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

// Application layouts
import Dashboard from "layouts/dashboard";
import EmployeeProfile from "layouts/employee-layout/profile";
import GuestRegister from "layouts/authentication/guest-register";
import ArgonBox from "components/ArgonBox";
import Employee from "layouts/company-manager-layout/employees";
import AddNewCompany from "layouts/admin-layout/add-new-company";
import ApproveNewComments from "layouts/admin-layout/approve-new-comments";
import ApproveNewCompanies from "layouts/admin-layout/approve-new-companies";
import CompanyInfo from "layouts/company-manager-layout/company-info/company";
import MyCompany from "layouts/employee-layout/my-company";
import AddNewComment from "layouts/employee-layout/add-new-comment";
import CompanyRegister from "layouts/authentication/company-register";
import Login from "layouts/authentication/login";
import GuestDashboard from "layouts/guest-layout/dashboard";
import GuestProfile from "layouts/guest-layout/profile";
import Companies from "layouts/guest-layout/company-details";
import AddNewEmployee from "layouts/company-manager-layout/add-new-employee";
import CompanyManagerProfile from "layouts/company-manager-layout/profile";
import CompanyDetails from "layouts/guest-layout/company-details/company-card-guest";
import EmployeeDashboard from "layouts/employee-layout/dashboard";
import CompanyManagerDashboard from "layouts/company-manager-layout/dashboard";
import AdminDashboard from "layouts/admin-layout/dashboard";
import Welcome from "layouts/authentication/welcome";

const routes = [
  {
    type: "route",
    name: "Welcome",
    key: "welcome",
    route: "/welcome",
    icon: <ArgonBox component="i" color="primary" fontSize="14px" className="ni ni-tv-2" />,
    component: <Welcome />,
    allowedRoles: ["all"],
  },
  {
    type: "route",
    name: "Dashboard",
    key: "guest-dashboard",
    route: "/guest/dashboard",
    icon: <ArgonBox component="i" color="primary" fontSize="14px" className="ni ni-tv-2" />,
    component: <GuestDashboard />,
    allowedRoles: ["GUEST"],
  },
  {
    type: "route",
    name: "Dashboard",
    key: "employee-dashboard",
    route: "/employee/dashboard",
    icon: <ArgonBox component="i" color="primary" fontSize="14px" className="ni ni-tv-2" />,
    component: <EmployeeDashboard />,
    allowedRoles: ["EMPLOYEE"],
  },
  {
    type: "route",
    name: "Dashboard",
    key: "company-manager-dashboard",
    route: "/company-manager/dashboard",
    icon: <ArgonBox component="i" color="primary" fontSize="14px" className="ni ni-tv-2" />,
    component: <CompanyManagerDashboard />,
    allowedRoles: ["COMPANY_MANAGER"],
  },
  {
    type: "route",
    name: "Dashboard",
    key: "admin-dashboard",
    route: "/admin/dashboard",
    icon: <ArgonBox component="i" color="primary" fontSize="14px" className="ni ni-tv-2" />,
    component: <AdminDashboard />,
    allowedRoles: ["ADMIN"],
  },

  {
    type: "route",
    name: "Companies",
    key: "guest-companies",
    route: "/guest/companies",
    icon: <ArgonBox component="i" color="info" fontSize="14px" className="ni ni-world" />,
    component: <Companies />,
    allowedRoles: ["GUEST"],
  },
  {
    type: "route",
    name: "Company Details",
    key: "guest-company-details",
    route: "/guest/company-detail/:companyName",
    icon: <ArgonBox component="i" color="warning" fontSize="14px" className="ni ni-single-copy-04" />,
    component: <CompanyDetails />,
    allowedRoles: ["GUEST"],
  },
  {
    type: "route",
    name: "Employees",
    key: "company-manager-employees",
    route: "/company-manager/employees",
    icon: <ArgonBox component="i" color="warning" fontSize="14px" className="ni ni-archive-2" />,
    component: <Employee />,
    allowedRoles: ["COMPANY_MANAGER"],
  },
  {
    type: "route",
    name: "Add New Company",
    key: "admin-add-new-company",
    route: "/admin/add-new-company",
    icon: (
      <ArgonBox component="i" color="warning" fontSize="14px" className="ni ni-briefcase-24" />
    ),
    component: <AddNewCompany />,
    allowedRoles: ["ADMIN"],
  },
  {
    type: "route",
    name: "Approve New Comments",
    key: "admin-approve-new-comments",
    route: "/admin/approve-new-comments",
    icon: (
      <ArgonBox component="i" color="warning" fontSize="14px" className="ni ni-chat-round" />
    ),
    component: <ApproveNewComments />,
    allowedRoles: ["ADMIN"],
  },
  {
    type: "route",
    name: "Approve New Companies",
    key: "admin-approve-new-companies",
    route: "/admin/approve-new-companies",
    icon: (
      <ArgonBox component="i" color="warning" fontSize="14px" className="ni ni-building" />
    ),
    component: <ApproveNewCompanies />,
    allowedRoles: ["ADMIN"],
  },
  {
    type: "route",
    name: "Add New Employee",
    key: "company-manager-add-new-employee",
    route: "/company-manager/add-new-employee",
    icon: (
      <ArgonBox component="i" color="success" fontSize="14px" className="ni ni-badge" />
    ),
    component: <AddNewEmployee />,
    allowedRoles: ["COMPANY_MANAGER"],
  },
  {
    type: "route",
    name: "Company Information",
    key: "company-manager-company-information",
    route: "/company-manager/company-information",
    icon: (
      <ArgonBox component="i" color="secondary" fontSize="14px" className="ni ni-folder-17" />
    ),
    component: <CompanyInfo />,
    allowedRoles: ["COMPANY_MANAGER"],
  },
  {
    type: "route",
    name: "My Company",
    key: "employee-my-company",
    route: "/employee/my-company",
    icon: (
      <ArgonBox component="i" color="warning" fontSize="14px" className="ni ni-building" />
    ),
    component: <MyCompany />,
    allowedRoles: ["EMPLOYEE"],
  },
  {
    type: "route",
    name: "Add New Comment",
    key: "employee-add-new-comment",
    route: "/employee/add-new-comment",
    icon: (
      <ArgonBox component="i" color="success" fontSize="14px" className="ni ni-send" />
    ),
    component: <AddNewComment />,
    allowedRoles: ["EMPLOYEE"],
  },
  {
    type: "route",
    name: "Profile",
    key: "company-manager-profile",
    route: "/company-manager/profile",
    icon: <ArgonBox component="i" color="dark" fontSize="14px" className="ni ni-single-02" />,
    component: <CompanyManagerProfile />,
    allowedRoles: ["COMPANY_MANAGER"],
  },
  // { type: "title", title: "Account Pages", key: "account-pages" },
  {
    type: "route",
    name: "Profile",
    key: "guest-profile",
    route: "/guest/profile",
    icon: <ArgonBox component="i" color="dark" fontSize="14px" className="ni ni-single-02" />,
    component: <GuestProfile />,
    allowedRoles: ["GUEST"],
  },
  {
    type: "route",
    name: "Profile",
    key: "employee-profile",
    route: "/employee/profile",
    icon: <ArgonBox component="i" color="dark" fontSize="14px" className="ni ni-single-02" />,
    component: <EmployeeProfile />,
    allowedRoles: ["EMPLOYEE"],
  },
  {
    type: "route",
    name: "Login",
    key: "login",
    route: "/authentication/login",
    icon: (
      <ArgonBox component="i" color="warning" fontSize="14px" className="ni ni-single-copy-04" />
    ),
    component: <Login />,
    allowedRoles: ["all"],
  },
  {
    type: "route",
    name: "Register as Company",
    key: "company-register",
    route: "/authentication/company-register",
    icon: <ArgonBox component="i" color="info" fontSize="14px" className="ni ni-collection" />,
    component: <CompanyRegister />,
    allowedRoles: ["all"],
  },
  {
    type: "route",
    name: "Register as Guest",
    key: "guest-register",
    route: "/authentication/guest-register",
    icon: <ArgonBox component="i" color="info" fontSize="14px" className="ni ni-collection" />,
    component: <GuestRegister />,
    allowedRoles: ["all"],
  },
];

export default routes;
