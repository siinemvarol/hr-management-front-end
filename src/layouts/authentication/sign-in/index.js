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
import axios from "axios";
import { useState, useEffect } from "react";

// react-router-dom components
import { Link, useNavigate } from "react-router-dom";

// @mui material components
//import Switch from "@mui/material/Switch";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonInput from "components/ArgonInput";
import ArgonButton from "components/ArgonButton";

// Authentication layout components
import IllustrationLayout from "layouts/authentication/components/IllustrationLayout";

// Image
const bgImage =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/signin-ill.jpg";

function Illustration() {
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
      console.log("isLoggedIn:", isLoggedIn);
      navigate("/profile");
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
        title: "BA Boost Java-8 Team-1",
        description: "This is an application for HR Management.",
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
              to="/authentication/sign-up"
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

export default Illustration;
