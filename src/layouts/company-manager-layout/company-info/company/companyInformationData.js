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
      name: <Name image={team2} name="John Michael" />,
      email: <Email email="john@creative-tim.com" />,
      phone: <Phone phone="+90656-89-76" />,
      tax_id: <TaxId tax_id="WD23418" />,
      address: <Address address="address34654654"/>,      
      city: <City city="Ankara" />,
      establishment: <Establishment establishment="2004"/>,
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

export default companyInformationData;
