/* eslint-disable react/prop-types */
// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonAvatar from "components/ArgonAvatar";
import ArgonBadge from "components/ArgonBadge";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

//new added button and icons
import { Button, Stack } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useEffect, useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import Table from "examples/Tables/Table";


function Name({ image, name }) {
  return (
    <ArgonBox display="flex" alignItems="center" px={1} py={0.5}>
      <ArgonBox mr={2}>
        <ArgonAvatar src={image} alt={name} size="sm" variant="rounded" />
      </ArgonBox>
      <ArgonBox display="flex" flexDirection="column">
        <ArgonTypography variant="button" fontWeight="medium">
          {name}
        </ArgonTypography>

      </ArgonBox>

    </ArgonBox>
  );
}
function Email({ email }) {
  return (
    <ArgonBox display="flex" flexDirection="column">
      <ArgonTypography variant="caption" fontWeight="medium" color="text">
        {email}
      </ArgonTypography>
    </ArgonBox>
  );
}
function Phone({ phone }) {
  return (
    <ArgonBox display="flex" flexDirection="column">
      <ArgonTypography variant="caption" fontWeight="medium" color="text">
        {phone}
      </ArgonTypography>
    </ArgonBox>
  );
}
function TaxId({ tax_id }) {
  return (
    <ArgonBox display="flex" flexDirection="column">
      <ArgonTypography variant="caption" fontWeight="medium" color="text">
        {tax_id}
      </ArgonTypography>
    </ArgonBox>
  );
}
function Address({ address }) {
  return (
    <ArgonBox display="flex" flexDirection="column">
      <ArgonTypography variant="caption" fontWeight="medium" color="text">
        {address}
      </ArgonTypography>
    </ArgonBox>
  );
}
function City({ city }) {
  return (
    <ArgonBox display="flex" flexDirection="column">
      <ArgonTypography variant="caption" fontWeight="medium" color="text">
        {city}
      </ArgonTypography>
    </ArgonBox>
  );
}
function Establishment({ establishment }) {
  return (
    <ArgonBox display="flex" flexDirection="column">
      <ArgonTypography variant="caption" fontWeight="medium" color="text">
        {establishment}
      </ArgonTypography>
    </ArgonBox>
  );
}

function CompanyInformationData(){
  const storedToken = localStorage.getItem("Authorization");
  const [companyInfo, setCompanyInfo] = useState(null);

  const companyInformationData = {
    columns: [
      { name: "name", align: "left" },
      { name: "email", align: "left" },
      { name: "phone", align: "left" },
      { name: "tax_id", align: "left" },
      {name: "address", align: "left"},
      { name: "city", align: "left" },
      { name: "establishment", align: "left"},
      { name: "edit", align: "center" },
    ],
  
    rows: [
      {
        name: <Name image={team2} name={companyInfo?.companyName} />,
        email: <Email email={companyInfo?.infoEmail} />,
        phone: <Phone phone={companyInfo?.companyPhone} />,
        tax_id: <TaxId tax_id={companyInfo?.taxId} />,
        address: <Address address={companyInfo?.companyAddress}/>,      
        city: <City city={companyInfo?.city} />,
        establishment: <Establishment establishment={companyInfo?.establishmentDate}/>,
        edit: (
          <Stack direction="row" spacing={2}>
            <Button size="small" color="primary" variant="contained" startIcon={<EditIcon />}>
              Edit
            </Button>
          </Stack>
        ),
      },
    ],
  };

  useEffect(() => {
    if (storedToken) {
      const decodedToken = jwt_decode(storedToken);
      console.log(decodedToken);
      // below URL should be changed to `http://localhost:9091/api/v1/company/get-company-information-manager/${decodedToken.id}`
      // after navigation by roles is completed
      axios
        .get(`http://localhost:9091/api/v1/company/get-company-information-manager/47`)
        .then((response) => {
          setCompanyInfo(response.data);
        })
        .catch((error) => {
          console.error("An error occurred while trying to retrieve company information: ", error);
        });
    }
  }, [storedToken]);

  return <Table columns={companyInformationData.columns} rows={companyInformationData.rows} />;
}
export default CompanyInformationData;
