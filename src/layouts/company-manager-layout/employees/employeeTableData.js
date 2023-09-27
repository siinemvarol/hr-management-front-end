/* eslint-disable react/prop-types */
// Argon Dashboard 2 MUI components
import ArgonTypography from "components/ArgonTypography";
import Table from "examples/Tables/Table";

//utils
import { useEffect, useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { API_URLS } from "config/apiUrls";

function EmployeeTableData() {
  const storedToken = localStorage.getItem("Authorization");
  const [employeeInfo, setEmployeeInfo] = useState([]);

  useEffect(() => {
    if (storedToken) {
      const decodedToken = jwt_decode(storedToken);

      axios
        .get(`${API_URLS.company.localhost}/get-company-employees/${decodedToken.id}`)
        .then((response) => {
          console.log("response data is...", response.data);

          const returningEmployees = response.data.map((emp) => ({
            avatar: (
              <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
                {emp.avatar}
              </ArgonTypography>
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
