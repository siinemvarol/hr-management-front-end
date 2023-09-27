/* eslint-disable react/prop-types */
// Argon Dashboard 2 MUI components
import ArgonTypography from "components/ArgonTypography";
import Table from "examples/Tables/Table";

//utils
import { useEffect, useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { API_URLS } from "config/apiUrls";
import { Avatar } from "@mui/material";
import ArgonAvatar from "components/ArgonAvatar";
import burceMars from "assets/images/bruce-mars.jpg";

function EmployeeTableData() {
  const storedToken = localStorage.getItem("Authorization");
  const [employeeInfo, setEmployeeInfo] = useState([]);

  const handleImageError = () => {
    // Burce Mars fotoğrafını yükleme hatası durumunda kullan
    setProfileImage(burceMars);
  };

  const [profileImage, setProfileImage] = useState(
    "http://localhost:9095/api/v1/user/images/" 
  );




  useEffect(() => {
    if (storedToken) {
      const decodedToken = jwt_decode(storedToken);

      axios
        .get(`${API_URLS.company.localhost}/get-company-employees/${decodedToken.id}`)
        .then((response) => {
          console.log("response data is...", response.data);

          const returningEmployees = response.data.map((emp) => (console.log(profileImage+emp.authid),
            
          {
            avatar: (
              <ArgonAvatar
              src={"http://localhost:9095/api/v1/user/images/"+emp.authid}  //getImage metotundan dönen image profil fotosu olarak yazdırılıyor
              alt="profile-image"
              size="l"
              shadow="sm"
              onError={handleImageError}
            />
            ),
            name: (
              <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
                {emp.name} {emp.surname}
              </ArgonTypography>
            ),
            email: (
              <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
                {emp.companyEmail}
              </ArgonTypography>
            ),
            phone: (
              <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
                {emp.phone}
              </ArgonTypography>
            ),
            address: (
              <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
                {emp.address}
              </ArgonTypography>
            ),
            info: (
              <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
                {emp.info}
              </ArgonTypography>
            ),
            birthday: (
              <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
                {emp.birthday}
              </ArgonTypography>
            ),
          }));

          console.log("returning employees array is... ", returningEmployees);

          setEmployeeInfo(returningEmployees);
        })
        .catch((error) => {
          console.error("An error occured while trying to retrieve employee information: ", error);
        });
    }
  }, [storedToken]);

  const employeeTableData = {
    columns: [
      { name: "avatar", align: "center" },
      { name: "name", align: "center" },
      { name: "email", align: "center" },
      { name: "phone", align: "center" },
      { name: "address", align: "center" },
      { name: "info", align: "center" },
      { name: "birthday", align: "center" },
    ],

    rows: employeeInfo,
  };

  return <Table columns={employeeTableData.columns} rows={employeeTableData.rows} />;
}

export default EmployeeTableData;
