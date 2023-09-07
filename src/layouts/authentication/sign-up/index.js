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

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonInput from "components/ArgonInput";
import ArgonButton from "components/ArgonButton";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";
import Socials from "layouts/authentication/components/Socials";
import Separator from "layouts/authentication/components/Separator";
import { useEffect, useState } from "react";
import { Select } from "@mui/material";

// Images
const bgImage =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/signup-cover.jpg";

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
function Cover() {
  // Seçilen ili saklamak için state kullanın
  const [selectedCity, setSelectedCity] = useState("");

  // Select öğesi değiştiğinde bu işlevi çağırın
  const handleCityChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedCity(selectedValue);
  };

  const [companies, setCompanies] = useState([]);

  // Diğer state ve işlevler burada tanımlanır
  const handleSubmit = async (e) => {
    e.preventDefault(); // Form verilerini al
    const formData = new FormData(e.target); // Form verilerini JSON formatına çevir
    const formDataJSON = {};
    formData.forEach((value, key) => {
      formDataJSON[key] = value;
    }); // Spring Boot sunucusuna POST isteği yap
    try {
      const response = await fetch("http://localhost:9091/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataJSON),
      });
      if (response.ok) {
        // Başarılı bir yanıt alındığında burada işlem yapabilirsiniz
        console.log("Kayıt başarıyla tamamlandı.");
      } else {
        console.error("Kayıt sırasında hata oluştu.");
      }
    } catch (error) {
      console.error("İstek gönderirken bir hata oluştu:", error);
    }
  };

  // const onRegister = (e) => {
  //   e.preventDefault();
  //   const newCompany = {
  //     name: e.target.manager - name.value,
  //     companyName: e.target.company - name.value,
  //     email: e.target.email.value,
  //     phone: e.target.phone.value,
  //     password: e.target.password.value,
  //     taxIdNumber: e.target.tax - id - number.value,
  //     city: e.target.city.value,
  //   };
  //   console.log(newCompany);
  //   axios.post("http://localhost:9091/register").then((response) => {
  //     console.log(response.data);
  //     axios.get("http://localhost:9091/").then((res) => {
  //       setCompanies(res.data);
  //     });
  //   });
  // };

  // useEffect(() => {});

  return (
    <CoverLayout
      title="Welcome!"
      description="You can keep and manage all your human resources information of your company."
      image={bgImage}
      imgPosition="top"
      button={{ color: "dark", variant: "gradient" }}
    >
      <Card sx={{ width: "500px", margin: "0 auto" }} textAlign="center">
        <ArgonBox p={3} mb={1} textAlign="center">
          <ArgonTypography variant="h5" fontWeight="medium">
            Company Registration
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
                  <ArgonInput placeholder="Company Manager Name" name="manager-name" />
                </ArgonBox>
                <ArgonBox mb={2}>
                  <ArgonInput type="email" placeholder="Email" name="email" />
                </ArgonBox>
                <ArgonBox mb={2}>
                  <ArgonInput type="password" placeholder="Password" name="password" />
                </ArgonBox>
              </div>

              {/* Second Column */}
              <div style={{ flex: 1 }}>
                <ArgonBox mb={2}>
                  <ArgonInput placeholder="Company Name" name="company-name" />
                </ArgonBox>
                <ArgonBox mb={2}>
                  <ArgonInput placeholder="Phone Number" name="phone" />
                </ArgonBox>
                <ArgonBox mb={2}>
                  <ArgonInput placeholder="VKN" name="tax-id-number" />
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

            {/* <ArgonBox display="flex" alignItems="center">
              <Checkbox defaultChecked />
              <ArgonTypography
                variant="button"
                fontWeight="regular"
                sx={{ cursor: "pointer", userSelect: "none" }}
              >
                &nbsp;&nbsp;I agree to the&nbsp;
              </ArgonTypography>
              <ArgonTypography
                component="a"
                href="#"
                variant="button"
                fontWeight="bold"
                textGradient
              >
                Terms and Conditions
              </ArgonTypography>
            </ArgonBox> */}

            <ArgonBox mt={4} mb={1}>
              <ArgonButton variant="gradient" color="dark" fullWidth type="submit">
                Register
              </ArgonButton>
            </ArgonBox>
            <ArgonBox mt={2}>
              <ArgonTypography variant="button" color="text" fontWeight="regular">
                Already have an account?&nbsp;
                <ArgonTypography
                  component={Link}
                  to="/authentication/sign-in"
                  variant="button"
                  color="dark"
                  fontWeight="bold"
                  textGradient
                >
                  Login
                </ArgonTypography>
              </ArgonTypography>
            </ArgonBox>
          </ArgonBox>
        </ArgonBox>
      </Card>
    </CoverLayout>
  );
}

export default Cover;
