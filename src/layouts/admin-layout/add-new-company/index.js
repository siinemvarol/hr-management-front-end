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

// react components
import { useState } from "react";

// react-router-dom components
import { Link } from "react-router-dom";

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
import DashboardLayout from "layouts/admin-layout/components/DashboardLayout";
import DashboardNavbar from "layouts/admin-layout/components/DashboardNavbar";
import Footer from "examples/Footer";
import axios from "axios";

const turkishCities = [
  "Adana",
  "Adıyaman",
  "Afyonkarahisar",
  "Ağrı",
  "Amasya",
  "Ankara",
  "Antalya",
  "Artvin",
  "Aydın",
  "Balıkesir",
  "Bilecik",
  "Bingöl",
  "Bitlis",
  "Bolu",
  "Burdur",
  "Bursa",
  "Çanakkale",
  "Çankırı",
  "Çorum",
  "Denizli",
  "Diyarbakır",
  "Düzce",
  "Edirne",
  "Elazığ",
  "Erzincan",
  "Erzurum",
  "Eskişehir",
  "Gaziantep",
  "Giresun",
  "Gümüşhane",
  "Hakkâri",
  "Hatay",
  "Iğdır",
  "Isparta",
  "İstanbul",
  "İzmir",
  "Kahramanmaraş",
  "Karabük",
  "Karaman",
  "Kars",
  "Kastamonu",
  "Kayseri",
  "Kırıkkale",
  "Kırklareli",
  "Kırşehir",
  "Kilis",
  "Kocaeli",
  "Konya",
  "Kütahya",
  "Malatya",
  "Manisa",
  "Mardin",
  "Mersin",
  "Muğla",
  "Muş",
  "Nevşehir",
  "Niğde",
  "Ordu",
  "Osmaniye",
  "Rize",
  "Sakarya",
  "Samsun",
  "Siirt",
  "Sinop",
  "Sivas",
  "Şanlıurfa",
  "Şırnak",
  "Tekirdağ",
  "Tokat",
  "Trabzon",
  "Tunceli",
  "Uşak",
  "Van",
  "Yalova",
  "Yozgat",
  "Zonguldak",
];

function AddNewCompany() {
  const [isCompanyRegistered, setIsCompanyRegistered] = useState(false);
  const [companyManagerName, setCompanyManagerName] = useState("");
  const [companyManagerEmail, setCompanyManagerEmail] = useState("");
  const [companyManagerPassword, setCompanyManagerPassword] = useState("");
  const [companyManagerSurname, setCompanyManagerSurname] = useState("");
  const [companyManagerPhone, setCompanyManagerPhone] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyInfoEmail, setCompanyInfoEmail] = useState("");
  const [companyPhone, setCompanyPhone] = useState("");
  const [taxIdentificationNumber, setTaxIdentificationNumber] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const handleCompanyManagerNameChange = (event) => {
    setCompanyManagerName(event.target.value);
  };

  const handleCompanyManagerEmailChange = (event) => {
    setCompanyManagerEmail(event.target.value);
  };

  const handleCompanyManagerPasswordChange = (event) => {
    setCompanyManagerPassword(event.target.value);
  };

  const handleCompanyManagerSurnameChange = (event) => {
    setCompanyManagerSurname(event.target.value);
  };

  const handleCompanyManagerPhoneChange = (event) => {
    setCompanyManagerPhone(event.target.value);
  };

  const handleCompanyNameChange = (event) => {
    setCompanyName(event.target.value);
  };

  const handleCompanyInfoEmailChange = (event) => {
    setCompanyInfoEmail(event.target.value);
  };

  const handleCompanyPhoneChange = (event) => {
    setCompanyPhone(event.target.value);
  };

  const handleTaxIdentificationNumberChange = (event) => {
    setTaxIdentificationNumber(event.target.value);
  };

  const handleCompanyAddressChange = (event) => {
    setCompanyAddress(event.target.value);
  };

  const handleCityChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedCity(selectedValue);
  };

  const handleCompanyRegisterSuccess = () => {
    setIsCompanyRegistered(true);
  };

  function handleAddNewCompany(
    companyManagerName,
    companyManagerEmail,
    companyManagerPassword,
    companyManagerSurname,
    companyManagerPhone,
    companyName,
    companyInfoEmail,
    companyPhone,
    taxIdentificationNumber,
    companyAddress,
    selectedCity
  ) {
    const companyRegisterRequestDto = {
      name: companyManagerName,
      surname: companyManagerSurname,
      companyEmail: companyManagerEmail,
      phone: companyManagerPhone,
      password: companyManagerPassword,
      companyName: companyName,
      infoEmail: companyInfoEmail,
      companyPhone: companyPhone,
      taxId: taxIdentificationNumber,
      companyAddress: companyAddress,
      city: selectedCity,
    };

    axios
      .post("http://10.92.2.45:9090/api/v1/auth/company-register", companyRegisterRequestDto)
      .then((response) => {
        console.log("Company register successfull!", response.data);
        handleCompanyRegisterSuccess();
      })
      .catch((error) => {
        console.error("Company register failed: ", error);
      })
      .finally(() => {
        console.log("isCompanyRegistered: ", isCompanyRegistered);
      });

      setCompanyManagerName('');
      setCompanyManagerSurname('');
      setCompanyManagerEmail('');
      setCompanyManagerPhone('');
      setCompanyManagerPassword('');
      setCompanyName('');
      setCompanyInfoEmail('');
      setCompanyPhone('');
      setTaxIdentificationNumber('');
      setCompanyAddress('');
      setSelectedCity('');
  }

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ArgonBox py={3}>
        <ArgonBox mb={3}>
          <Card sx={{ width: "500px", margin: "0 auto" }} textAlign="center">
            <ArgonBox p={3} mb={1} textAlign="center">
              <ArgonTypography variant="h5" fontWeight="medium">
                Add New Company
              </ArgonTypography>
            </ArgonBox>

            <ArgonBox pt={2} pb={3} px={3}>
              <ArgonBox component="form" role="form">
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  {/* First Column */}
                  <div style={{ flex: 1, marginRight: "16px" }}>
                    <ArgonBox mb={2}>
                      <ArgonInput
                        placeholder="Company Manager Name"
                        name="company-manager-name"
                        value={companyManagerName}
                        onChange={handleCompanyManagerNameChange}
                      />
                    </ArgonBox>
                    <ArgonBox mb={2}>
                      <ArgonInput
                        type="email"
                        placeholder="Company Manager Email"
                        name="company-manager-email"
                        value={companyManagerEmail}
                        onChange={handleCompanyManagerEmailChange}
                      />
                    </ArgonBox>
                    <ArgonBox mb={2}>
                      <ArgonInput
                        type="password"
                        placeholder="Company Manager Password"
                        name="company-manager-password"
                        value={companyManagerPassword}
                        onChange={handleCompanyManagerPasswordChange}
                      />
                    </ArgonBox>
                  </div>

                  {/* Second Column */}
                  <div style={{ flex: 1 }}>
                    <ArgonBox mb={2}>
                      <ArgonInput
                        placeholder="Company Manager Surname"
                        name="company-manager-surname"
                        value={companyManagerSurname}
                        onChange={handleCompanyManagerSurnameChange}
                      />
                    </ArgonBox>
                    <ArgonBox mb={2}>
                      <ArgonInput
                        placeholder="Company Manager Phone No"
                        name="company-manager-phone"
                        value={companyManagerPhone}
                        onChange={handleCompanyManagerPhoneChange}
                      />
                    </ArgonBox>
                  </div>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  {/* First Column */}
                  <div style={{ flex: 1, marginRight: "16px" }}>
                    <ArgonBox mb={2}>
                      <ArgonInput
                        placeholder="Company Name"
                        name="company-name"
                        value={companyName}
                        onChange={handleCompanyNameChange}
                      />
                    </ArgonBox>
                    <ArgonBox mb={2}>
                      <ArgonInput
                        placeholder="Company Phone"
                        name="company-phone"
                        value={companyPhone}
                        onChange={handleCompanyPhoneChange}
                      />
                    </ArgonBox>
                  </div>

                  {/* Second Column */}
                  <div style={{ flex: 1 }}>
                    <ArgonBox mb={2}>
                      <ArgonInput
                        type="email"
                        placeholder="Company Info Email"
                        name="company-info-email"
                        value={companyInfoEmail}
                        onChange={handleCompanyInfoEmailChange}
                      />
                    </ArgonBox>
                    <ArgonBox mb={2}>
                      <ArgonInput
                        placeholder="Tax Identification Number"
                        name="tax-identification-number"
                        value={taxIdentificationNumber}
                        onChange={handleTaxIdentificationNumberChange}
                      />
                    </ArgonBox>
                  </div>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <div style={{ flex: 1 }}>
                    <ArgonBox mb={2}>
                      <ArgonInput
                        placeholder="Company Address"
                        name="company-address"
                        value={companyAddress}
                        onChange={handleCompanyAddressChange}
                      />
                    </ArgonBox>
                  </div>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <div style={{ flex: 1 }}>
                    <ArgonBox mb={2}>
                      <select
                        name="city"
                        value={selectedCity}
                        onChange={handleCityChange}
                        style={{
                          width: "100%",
                          padding: "0.375rem 0.75rem",
                          fontSize: "1rem",
                          fontWeight: "300",
                          lineHeight: "1.5",
                          color: "#495057",
                          backgroundColor: "#fff",
                          backgroundClip: "padding-box",
                          border: "1px solid #ced4da",
                          borderRadius: "0.5rem",
                          transition:
                            "border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
                        }}
                      >
                        <option value="">Select a city...</option>
                        {turkishCities.map((city, index) => (
                          <option key={index} value={city}>
                            {city}
                          </option>
                        ))}
                      </select>
                    </ArgonBox>
                  </div>
                </div>

                <ArgonBox mt={4} mb={1}>
                  <ArgonButton
                    variant="gradient"
                    color="dark"
                    fullWidth
                    // type="submit"
                    to="/"
                    onClick={() =>
                      handleAddNewCompany(
                        companyManagerName,
                        companyManagerEmail,
                        companyManagerPassword,
                        companyManagerSurname,
                        companyManagerPhone,
                        companyName,
                        companyInfoEmail,
                        companyPhone,
                        taxIdentificationNumber,
                        companyAddress,
                        selectedCity
                      )
                    }
                  >
                    Add Company
                  </ArgonButton>
                </ArgonBox>
                <ArgonBox mt={2}>
                  <ArgonTypography color="text" fontWeight="ligth" fontSize="0.7em">
                    {/* NOTES... */}
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

export default AddNewCompany;
