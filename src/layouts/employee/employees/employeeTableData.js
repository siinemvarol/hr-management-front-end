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
import DeleteIcon from "@mui/icons-material/Delete";

function Author({ image, name, email }) {
  return (
    <ArgonBox display="flex" alignItems="center" px={1} py={0.5}>
      <ArgonBox mr={2}>
        <ArgonAvatar src={image} alt={name} size="sm" variant="rounded" />
      </ArgonBox>
      <ArgonBox display="flex" flexDirection="column">
        <ArgonTypography variant="button" fontWeight="medium">
          {name}
        </ArgonTypography>
        <ArgonTypography variant="caption" color="secondary">
          {email}
        </ArgonTypography>
      </ArgonBox>
    </ArgonBox>
  );
}

function Function({ job, org }) {
  return (
    <ArgonBox display="flex" flexDirection="column">
      <ArgonTypography variant="caption" fontWeight="medium" color="text">
        {job}
      </ArgonTypography>
      <ArgonTypography variant="caption" color="secondary">
        {org}
      </ArgonTypography>
    </ArgonBox>
  );
}

const authorsTableData = {
  columns: [
    { name: "employee", align: "left" },
    { name: "department", align: "left" },
    { name: "salary", align: "center" },
    { name: "status", align: "center" },
    { name: "holiday", align: "center" },
    { name: "edit", align: "center" },
  ],

  rows: [
    {
      employee: <Author image={team2} name="John Michael" email="john@creative-tim.com" />,
      department: <Function job="Manager" org="Organization" />,
      salary: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          $1000
        </ArgonTypography>
      ),
      status: (
        <ArgonBadge variant="gradient" badgeContent="active" color="success" size="xs" container />
      ),
      holiday: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          5 days
        </ArgonTypography>
      ),
      edit: (
        <Stack direction="row" spacing={2}>
          <Button size="small" color="primary" variant="contained" startIcon={<EditIcon />}>
            Edit
          </Button>
          <Button size="small" color="error" variant="contained" endIcon={<DeleteIcon />}>
            Delete
          </Button>
        </Stack>
      ),
    },
    {
      employee: <Author image={team3} name="Alexa Liras" email="alexa@creative-tim.com" />,
      department: <Function job="Programator" org="Developer" />,
      salary: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          $1830
        </ArgonTypography>
      ),
      status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="deleted"
          color="secondary"
          size="xs"
          container
        />
      ),
      holiday: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          10 days
        </ArgonTypography>
      ),
      edit: (
        <Stack direction="row" spacing={2}>
          <Button size="small" color="primary" variant="contained" startIcon={<EditIcon />}>
            Edit
          </Button>
          <Button size="small" color="error" variant="contained" endIcon={<DeleteIcon />}>
            Delete
          </Button>
        </Stack>
      ),
    },
    {
      employee: <Author image={team2} name="John Michael" email="john@creative-tim.com" />,
      department: <Function job="Manager" org="Organization" />,
      salary: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          $2450
        </ArgonTypography>
      ),
      status: (
        <ArgonBadge variant="gradient" badgeContent="active" color="success" size="xs" container />
      ),
      holiday: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          2 days
        </ArgonTypography>
      ),
      edit: (
        <Stack direction="row" spacing={2}>
          <Button size="small" color="primary" variant="contained" startIcon={<EditIcon />}>
            Edit
          </Button>
          <Button size="small" color="error" variant="contained" endIcon={<DeleteIcon />}>
            Delete
          </Button>
        </Stack>
      ),
    },
    {
      employee: <Author image={team4} name="Alexa Liras" email="alexa@creative-tim.com" />,
      department: <Function job="Programator" org="Developer" />,
      salary: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          $2000
        </ArgonTypography>
      ),
      status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="deleted"
          color="secondary"
          size="xs"
          container
        />
      ),
      holiday: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          17 days
        </ArgonTypography>
      ),
      edit: (
        <Stack direction="row" spacing={2}>
          <Button size="small" color="primary" variant="contained" startIcon={<EditIcon />}>
            Edit
          </Button>
          <Button size="small" color="error" variant="contained" endIcon={<DeleteIcon />}>
            Delete
          </Button>
        </Stack>
      ),
    },
  ],
};

export default authorsTableData;
