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

// Image
const bgImage =
  "https://img.freepik.com/free-photo/copy-space-blank-commercial-advertisement_53876-121262.jpg?w=740&t=st=1695725202~exp=1695725802~hmac=1f0cca951e733f23072c4abb5f3aefea52d7d1c7f3306cf462a8399e4df11137";

const container = document.getElementById("root");
const root = createRoot(container);

function Login() {
  const [rememberMe, setRememberMe] = useState(false);

  const handleSetRememberMe = () => setRememberMe(!rememberMe);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [token, setToken] = useState("");

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  useEffect(() => {
    if (isLoggedIn) {
      const token = localStorage.getItem("Authorization");
      const decoded = jwt_decode(token);
      console.log(decoded);

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
            Forgot password
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
    </IllustrationLayout>
  );
}

export default Login;
