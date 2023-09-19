/* eslint-disable react/prop-types */
// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import { useEffect, useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import Table from "examples/Tables/Table";

function Header({ name }) {
  return (
    <ArgonBox display="flex" alignItems="center" px={1} py={0.5}>
      <ArgonBox display="flex" flexDirection="column">
        <ArgonTypography variant="button" fontWeight="medium">
          {name}
        </ArgonTypography>
      </ArgonBox>
    </ArgonBox>
  );
}

function Function({ data }) {
  return (
    <ArgonBox display="flex" flexDirection="column">
      <ArgonTypography variant="caption" fontWeight="medium" color="text">
        {data}
      </ArgonTypography>
    </ArgonBox>
  );
}

function CompanyInformationData() {
  const storedToken = localStorage.getItem("Authorization");
  const [companyInfo, setCompanyInfo] = useState(null);

  const companyInformationData = {
    columns: [
      { name: "header", align: "left" },
      { name: "information", align: "left" },
    ],

    rows: [
      {
        header: <Header name="Name" />,
        information: <Function data={companyInfo?.companyName} />,
      },
      {
        header: <Header name="Phone" />,
        information: <Function data={companyInfo?.companyPhone} />,
      },
      {
        header: <Header name="Email" />,
        information: <Function data={companyInfo?.infoEmail} />,
      },
      {
        header: <Header name="Address" />,
        information: <Function data={companyInfo?.companyAddress} />,
      },
      {
        header: <Header name="Establishment Date" />,
        information: <Function data={companyInfo?.establishmentDate} />,
      },
      {
        header: <Header name="City" />,
        information: <Function data={companyInfo?.city} />,
      },
      {
        header: <Header name="Tax ID Number" />,
        information: <Function data={companyInfo?.taxId} />,
      },
      {
        header: <Header name="Revenue" />,
        information: <Function data={companyInfo?.revenue} />,
      },
      {
        header: <Header name="Expense" />,
        information: <Function data={companyInfo?.expense} />,
      },
      {
        header: <Header name="Profit" />,
        information: <Function data={companyInfo?.profit} />,
      },
      {
        header: <Header name="Loss" />,
        information: <Function data={companyInfo?.loss} />,
      },
      {
        header: <Header name="Net Income" />,
        information: <Function data={companyInfo?.netIncome} />,
      },
    ],
  };  
  useEffect(() => {
    if (storedToken) {
      const decodedToken = jwt_decode(storedToken);
      console.log(decodedToken);
  // below URL should be changed to `http://localhost:9091/api/v1/company/get-company-information/${decodedToken.id}` 
// after navigation by roles is completed
      axios
        .get(`http://localhost:9091/api/v1/company/get-company-information/47`)
        .then((response) => {
          setCompanyInfo(response.data);
        })
        .catch((error) => {
          console.error("An error occurred while trying to retrieve company information: ", error);
        });
    }
  }, [storedToken]);

  return <Table columns={companyInformationData.columns} rows={companyInformationData.rows}/>

}

export default CompanyInformationData;
