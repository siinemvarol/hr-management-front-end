import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import axios from "axios";
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import NewCompany from "layouts/admin-dashboard/components/NewCompany";

function NewCompaniesApproval() {

//Get Not Authorized Companies method=>>NewCompany.js
  const [companyTableData2, setCompanyTableData2] = useState([]);
  const fetchCompanyData = () => {
    axios
      .get("http://localhost:9091/api/v1/company/get-not-authorized-companies")
      .then((response) => {
        const apiData = response.data;

        const mappedData = apiData.map((item) => {
          return {
            id: item.id,
            companyName: item.companyName,
            companyPhone: item.companyPhone,
            companyEmail: item.infoEmail,
            companyAddress: item.companyAddress,
            city: item.city,
            taxId: item.taxId,
            status: item.status,
          };
        });

        setCompanyTableData2(mappedData);
        console.log(mappedData);
      })
      .catch((error) => {
        console.error("Error fetching company data:", error);
      });
  };

  useEffect(() => {
    // Sayfa yüklendiğinde bir kere çalıştır
    fetchCompanyData();

    // 3 saniyede bir tekrarla
    const interval = setInterval(fetchCompanyData, 3000);

    // Komponent temizlendiğinde interval'i durdur
    return () => clearInterval(interval);
  }, []);


  return (
    <Card id="delete-account" sx={{ width: 1 }}>
      <ArgonBox pt={3} px={2}>
        <ArgonTypography variant="h6" fontWeight="medium">
          New Company Requests
        </ArgonTypography>
      </ArgonBox>
      <ArgonBox pt={1} pb={2} px={2}>
        <ArgonBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          {companyTableData2.map((company) => (
            <NewCompany
              key={company.id}
              companyId={company.id}
              name={company.companyName}
              company={company.companyAddress}
              status={company.status}
              email={company.companyEmail}
              vat={company.taxId}
            />
          ))}
        </ArgonBox>
      </ArgonBox>
    </Card>
  );
}

export default NewCompaniesApproval;
