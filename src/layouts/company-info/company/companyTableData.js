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

function Author({ image, name }) {
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
function CompanyId({ company_id }) {
  return (
    <ArgonBox display="flex" flexDirection="column">
      <ArgonTypography variant="caption" fontWeight="medium" color="text">
        {company_id}
      </ArgonTypography>
    </ArgonBox>
  );
}
function CompanyName({ company_name }) {
  return (
    <ArgonBox display="flex" flexDirection="column">
      <ArgonTypography variant="caption" fontWeight="medium" color="text">
        {company_name}
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
function City({ city }) {
  return (
    <ArgonBox display="flex" flexDirection="column">
      <ArgonTypography variant="caption" fontWeight="medium" color="text">
        {city}
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


const companyTableData = {
  columns: [
    { name: "owner", align: "left" },
    { name: "email", align: "left" },
    { name: "company_id", align: "center" },
    { name: "company_name", align: "center" },
    { name: "tax_id", align: "center" },
    { name: "phone", align: "center" },
    { name: "city", align: "center" },
    { name: "edit", align: "center" },
  ],

  rows: [
    {
      owner: <Author image={team2} name="John Michael" />,
      email: <Email email="john@creative-tim.com" />,
      company_id: <CompanyId company_id="231" />,
      company_name: <CompanyName company_name="Amazon" />,
      tax_id: <TaxId tax_id="WD23418" />,
      phone: <Phone phone="+90656-89-76" />,
      city: <City city="Ankara" />,
      edit: (
        <Stack direction="row" spacing={2}>
          <Button size="small" color="primary" variant="contained" startIcon={<EditIcon />}>
            Edit
          </Button>
        </Stack>
      ),
    },
    {
      owner: <Author image={team4} name="John Michael" />,
      email: <Email email="john@creative-tim.com" />,
      company_id: <CompanyId company_id="453" />,
      company_name: <CompanyName company_name="Amazon" />,
      tax_id: <TaxId tax_id="WD23418" />,
      phone: <Phone phone="+90656-89-76" />,
      city: <City city="Ankara" />,
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

export default companyTableData;
