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

// react-router-dom components
import { Link } from "react-router-dom";

// react components
import { useState } from "react";
import jwt_decode from "jwt-decode";

// calendar
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

// time-picker / clock
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonInput from "components/ArgonInput";
import ArgonButton from "components/ArgonButton";

// Argon Dashboard 2 MUI examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import axios from "axios";

function AddNewEmployee() {
  const storedToken = localStorage.getItem("Authorization");
  const [isEmployeeAdded, setIsEmployeeAdded] = useState(false);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [username, setUsername] = useState("");
  const [personalEmail, setPersonalEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [info, setInfo] = useState("");
  const [avatar, setAvatar] = useState("");
  const [birthday, setBirthday] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSurnameChange = (event) => {
    setSurname(event.target.value);
  };
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePersonalEmailChange = (event) => {
    setPersonalEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };
  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleInfoChange = (event) => {
    setInfo(event.target.value);
  };
  const handleAvatarChange = (event) => {
    setAvatar(event.target.value);
  };

  const handleBirthdayChange = (event) => {
    setBirthday(event.target.value);
  };

  const handleAddEmployeeSuccess = () => {
    setIsEmployeeAdded(true);
  };


  function handleAddNewEmployee() {
    if (storedToken) {
      const decodedToken = jwt_decode(storedToken);
      console.log(decodedToken);

      const addEmployeeCompanyDto = {
        // authid below line should be "decodedToken.id" when navigate by role is working
        authid: decodedToken.id,
        name: name,
        surname: surname,
        username: username,
        personalEmail: personalEmail,
        password: password,
        phone: phone,
        address: address,
        info: info,
        avatar: avatar,
        birthday: birthday,
      };

      axios.post(`http://localhost:9091/api/v1/company/add-employee/${decodedToken.id}`, addEmployeeCompanyDto)
      .then((response) => {
        console.log("Add employee is successfull!");
        handleAddEmployeeSuccess();
      })
      .catch((error) => {
        console.error("Add employee is failed: ", error);
      })
      .finally(() => {
        console.log("isEmployeeAdded: ", isEmployeeAdded);
      });
      setName("");
      setSurname("");
      setUsername("");
      setPersonalEmail("");
      setPassword("");
      setPhone("");
      setAddress("");
      setInfo("");
      setAvatar("");
      setBirthday("");
    }
  }

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ArgonBox py={3}>
        <ArgonBox mb={3}>
          <Card sx={{ width: "500px", margin: "0 auto" }} textAlign="center">
            <ArgonBox p={3} mb={1} textAlign="center">
              <ArgonTypography variant="h5" fontWeight="medium">
                Add New Employee
              </ArgonTypography>
            </ArgonBox>

            <ArgonBox pt={2} pb={3} px={3}>
              <ArgonBox
                component="form"
                role="form"
              >
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  {/* First Column */}
                  <div style={{ flex: 1, marginRight: "16px" }}>
                    <ArgonBox mb={2}>
                      <ArgonInput
                        placeholder="Name"
                        name="name"
                        value={name}
                        onChange={handleNameChange}
                      />
                    </ArgonBox>
                    <ArgonBox mb={2}>
                      <ArgonInput
                        placeholder="Username"
                        name="username"
                        value={username}
                        onChange={handleUsernameChange}
                      />
                    </ArgonBox>
                    <ArgonBox mb={2}>
                      <ArgonInput
                        placeholder="Address"
                        name="address"
                        value={address}
                        onChange={handleAddressChange}
                      />
                    </ArgonBox>
                  </div>

                  {/* Second Column */}
                  <div style={{ flex: 1 }}>
                    <ArgonBox mb={2}>
                      <ArgonInput
                        placeholder="Surname"
                        name="surname"
                        value={surname}
                        onChange={handleSurnameChange}
                      />
                    </ArgonBox>
                    <ArgonBox mb={2}>
                      <ArgonInput
                        placeholder="Phone Number"
                        name="phone"
                        value={phone}
                        onChange={handlePhoneChange}
                      />
                    </ArgonBox>
                    <ArgonBox mb={2}>
                      <ArgonInput
                        placeholder="Avatar"
                        name="avatar"
                        value={avatar}
                        onChange={handleAvatarChange}
                      />
                    </ArgonBox>
                  </div>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <ArgonBox mb={2} width="100%">
                    <ArgonInput
                      placeholder="Info"
                      name="info"
                      value={info}
                      onChange={handleInfoChange}
                    />
                  </ArgonBox>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between" }}>
                <ArgonBox mb={2} width="100%">
                    <ArgonInput
                      placeholder="Birthday"
                      name="birthday"
                      value={birthday}
                      onChange={handleBirthdayChange}
                    />
                  </ArgonBox>

                  {/* <div style={{ flex: 1 }}>
                    <ArgonBox mb={2}>
                      <ArgonTypography color="text" fontWeight="bold" fontSize="0.7em">
                        Birth Date
                      </ArgonTypography>
                    </ArgonBox>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <ArgonBox mb={2}>
                        <Calendar
                          onChange={() => handleBirthDateChange}
                          value={birthDate}
                        />
                      </ArgonBox>
                    </div>
                  </div> */}
                </div>

                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <ArgonBox mb={2} width="100%">
                    <ArgonInput
                      type="email"
                      placeholder="Personal Email"
                      name="personal-email"
                      value={personalEmail}
                      onChange={handlePersonalEmailChange}
                    />
                  </ArgonBox>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <ArgonBox mb={2} width="100%">
                    <ArgonInput
                      type="password"
                      placeholder="Password"
                      name="password"
                      value={password}
                      onChange={handlePasswordChange}
                    />
                  </ArgonBox>
                </div>

                {/* <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <div style={{ flex: 1 }}>
                    <ArgonBox mb={2}>
                      <ArgonTypography color="text" fontWeight="bold" fontSize="0.7em">
                        Start of Work Days
                      </ArgonTypography>
                    </ArgonBox>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <ArgonBox mb={2}>
                        <Calendar onChange={() => {}} />
                      </ArgonBox>
                    </div>

                    <ArgonBox mb={2}>
                      <ArgonTypography color="text" fontWeight="bold" fontSize="0.7em">
                        End of Work Days
                      </ArgonTypography>
                    </ArgonBox>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <ArgonBox mb={2}>
                        <Calendar onChange={() => {}} />
                      </ArgonBox>
                    </div>

                    <ArgonBox mb={2}>
                      <ArgonTypography color="text" fontWeight="bold" fontSize="0.7em">
                        Start of Break Hour
                      </ArgonTypography>
                    </ArgonBox>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <ArgonBox mb={2}>
                      <TimePicker onChange={() => {}} />
                      </ArgonBox>
                    </div>

                    <ArgonBox mb={2}>
                      <ArgonTypography color="text" fontWeight="bold" fontSize="0.7em">
                        End of Break Hour
                      </ArgonTypography>
                    </ArgonBox>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <ArgonBox mb={2}>
                        <TimePicker onChange={() => {}} />
                      </ArgonBox>
                    </div>
                  </div>
                </div> */}

                <ArgonBox mt={4} mb={1}>
                  <ArgonButton
                    variant="gradient"
                    color="dark"
                    fullWidth
                    onClick={() => handleAddNewEmployee()}
                  >
                    Add Employee
                  </ArgonButton>
                </ArgonBox>
                <ArgonBox mt={2}>
                  <ArgonTypography color="text" fontWeight="ligth" fontSize="0.7em">
                    A link will be sent to employee&apos;s personal email address for verification.
                  </ArgonTypography>
                </ArgonBox>
              </ArgonBox>
            </ArgonBox>
          </Card>
        </ArgonBox>
      </ArgonBox>
      <Footer />
    </DashboardLayout>
  );
}

export default AddNewEmployee;
