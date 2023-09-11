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
import DashboardLayout from "layouts/admin/components/DashboardLayout";
import DashboardNavbar from "layouts/admin/components/DashboardNavbar";
import Footer from "examples/Footer";

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

    // Seçilen ili saklamak için state kullanın
    const [selectedCity, setSelectedCity] = useState("");

    // Select öğesi değiştiğinde bu işlevi çağırın
    const handleCityChange = (e) => {
      const selectedValue = e.target.value;
      setSelectedCity(selectedValue);
    };

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
              <ArgonBox
                component="form"
                role="form"
                onSubmit={() => {
                  handleSubmit;
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  {/* First Column */}
                  <div style={{ flex: 1, marginRight: "16px" }}>
                    <ArgonBox mb={2}>
                      <ArgonInput placeholder="Company Manager Name" name="company-manager-name" />
                    </ArgonBox>
                    <ArgonBox mb={2}>
                      <ArgonInput
                        type="email"
                        placeholder="Company Manager Email"
                        name="company-manager-email"
                      />
                    </ArgonBox>
                    <ArgonBox mb={2}>
                      <ArgonInput
                        type="password"
                        placeholder="Company Manager Password"
                        name="company-manager-password"
                      />
                    </ArgonBox>
                  </div>

                  {/* Second Column */}
                  <div style={{ flex: 1 }}>
                    <ArgonBox mb={2}>
                      <ArgonInput
                        placeholder="Company Manager Surname"
                        name="company-manager-surname"
                      />
                    </ArgonBox>
                    <ArgonBox mb={2}>
                      <ArgonInput
                        placeholder="Company Manager Phone No"
                        name="company-manager-phone"
                      />
                    </ArgonBox>
                  </div>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  {/* First Column */}
                  <div style={{ flex: 1, marginRight: "16px" }}>
                    <ArgonBox mb={2}>
                      <ArgonInput placeholder="Company Name" name="company-name" />
                    </ArgonBox>
                  </div>
                  {/* Second Column */}
                  <div style={{ flex: 1 }}>
                    <ArgonBox mb={2}>
                      <ArgonInput placeholder="Tax Identification Number" name="tax-identification-number" />
                    </ArgonBox>
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
                      transition: "border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
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
                  <ArgonButton variant="gradient" color="dark" fullWidth type="submit">
                    Add Company
                  </ArgonButton>
                </ArgonBox>
                <ArgonBox mt={2}>
                  <ArgonTypography color="text" fontWeight="ligth" fontSize="0.7em">
                    NOTES...
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
