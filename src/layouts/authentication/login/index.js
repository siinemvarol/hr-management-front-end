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
import { API_URLS } from "../../../config/apiUrls";

import axios from "axios";
import { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { createRoot } from "react-dom/client";

// react-router-dom components
import { BrowserRouter, Link, useNavigate } from "react-router-dom";

// @mui material components
//import Switch from "@mui/material/Switch";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonInput from "components/ArgonInput";
import ArgonButton from "components/ArgonButton";

// Authentication layout components
import IllustrationLayout from "layouts/authentication/components/IllustrationLayout";
// import Admin from "layouts/admin-layout";
import { ArgonControllerProvider } from "context";
import CompanyManager from "layouts/company-manager-layout";
import PerfectScrollbar from "react-perfect-scrollbar";
import Admin from "layouts/admin-layout";
// import PersonelApp from "layouts/employee-layout/PersonelApp";
import { useCentralState } from "context/UserRoleContext/UserRoleContext";
import Footer from "examples/Footer";
import ArgonAlert from "components/ArgonAlert";
import { Alert, AlertTitle, Icon } from "@mui/material";

// Image
const bgImage =
  "https://images.unsplash.com/photo-1554232456-8727aae0cfa4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAwfHxvZmZpY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60";

const container = document.getElementById("root");
const root = createRoot(container);

function Login() {
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");

  const handleSetRememberMe = () => setRememberMe(!rememberMe);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [token, setToken] = useState("");

  const { setUserRole } = useCentralState();

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  useEffect(() => {
    if (isLoggedIn) {
      const token = localStorage.getItem("Authorization");
      const decoded = jwt_decode(token);
      console.log(decoded);
      setUserRole(decoded.role);

      if (decoded.role === "COMPANY_MANAGER") {
        navigate("/company-manager/dashboard");
      } else if (decoded.role === "ADMIN") {
        navigate("/admin/dashboard");
      } else if (decoded.role === "EMPLOYEE") {
        navigate("/employee/dashboard");
      } else {
        navigate("/guest/dashboard");
      }
    }
  }, [isLoggedIn, navigate]);

  function handleLogin(email, password) {
    const data = {
      companyEmail: email,
      password: password,
    };
    axios
      .post("http://localhost:9090/api/v1/auth/login", data)
      .then((response) => {
        let token = response.data;
        localStorage.setItem("Authorization", "Bearer " + token);
        axios.defaults.headers.common["Authorization"] = "Bearer " + token;
        localStorage.getItem("token");
        console.log("Login successful!", response.data);
        handleLoginSuccess();
      })
      .catch((error) => {
        console.error("Login failed:", error);
        setError("Login failed. Please check your credentials.");

      });

    setEmail("");
    setPassword("");
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <IllustrationLayout
      title="Login"
      description="Enter your email and password to login"
      illustration={{
        image: bgImage,
        title: "MAKS",
        description: "Human Resources Management Platform",
      }}
    >
      <ArgonBox component="form" role="form">
        <ArgonBox mb={2}>
          <ArgonInput
            type="email"
            placeholder="Email"
            size="large"
            value={email}
            onChange={handleEmailChange}
          />
        </ArgonBox>
        <ArgonBox mb={2}>
          <ArgonInput
            type="password"
            placeholder="Password"
            size="large"
            value={password}
            onChange={handlePasswordChange}
          />
        </ArgonBox>
        <ArgonBox display="flex" flexDirection="column" alignItems="flex-end">
          {/* <Switch checked={rememberMe} onChange={handleSetRememberMe} /> */}
          <ArgonTypography
            component={Link}
            to="/authentication/sign-up"
            color="error"
            fontWeight="regular"
            fontSize="default"
          >
            {/* Forgot password */}
          </ArgonTypography>
        </ArgonBox>
        <ArgonBox mt={4} mb={1}>
          <ArgonButton
            onClick={() => handleLogin(email, password)}
            component={isLoggedIn ? Link : "button"}
            color="info"
            size="large"
            fullWidth
          >
            Login
          </ArgonButton>
        </ArgonBox>
        {error && (
  <ArgonAlert severity="error" color="error">
    <AlertTitle></AlertTitle>
    {error}
  </ArgonAlert>
)}
        <ArgonBox mt={3} textAlign="center">
          <ArgonTypography variant="button" color="text" fontWeight="regular">
            Don&apos;t have an account?{" "}
            <ArgonTypography
              component={Link}
              to="/authentication/company-register"
              variant="button"
              color="info"
              fontWeight="medium"
            >
              Register
            </ArgonTypography>
          </ArgonTypography>
        </ArgonBox>
      </ArgonBox>
      <Footer/>
    </IllustrationLayout>
  );
  
}

export default Login;
