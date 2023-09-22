/* eslint-disable react/prop-types */
// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonAvatar from "components/ArgonAvatar";
import ArgonBadge from "components/ArgonBadge";

//new added button and icons
import { Button, Stack } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useEffect, useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import Table from "examples/Tables/Table";

// function CompanyId({ company_id }) {
//     return (
//         <ArgonBox display="flex" flexDirection="column">
//             <ArgonTypography variant="caption" fontWeight="medium" color="text">
//                 {company_id}
//             </ArgonTypography>
//         </ArgonBox>
//     );
// }
function Revenue({ revenue }) {
  return (
    <ArgonBox display="flex" flexDirection="column">
      <ArgonTypography variant="caption" fontWeight="medium" color="text">
        {revenue}
      </ArgonTypography>
    </ArgonBox>
  );
}
function Expense({ expense }) {
  return (
    <ArgonBox display="flex" flexDirection="column">
      <ArgonTypography variant="caption" fontWeight="medium" color="text">
        {expense}
      </ArgonTypography>
    </ArgonBox>
  );
}
function Profit({ profit }) {
  return (
    <ArgonBox display="flex" flexDirection="column">
      <ArgonTypography variant="caption" fontWeight="medium" color="text">
        {profit}
      </ArgonTypography>
    </ArgonBox>
  );
}
function Loss({ loss }) {
  return (
    <ArgonBox display="flex" flexDirection="column">
      <ArgonTypography variant="caption" fontWeight="medium" color="text">
        {loss}
      </ArgonTypography>
    </ArgonBox>
  );
}
function NetIncome({ net_income }) {
  return (
    <ArgonBox display="flex" flexDirection="column">
      <ArgonTypography variant="caption" fontWeight="medium" color="text">
        {net_income}
      </ArgonTypography>
    </ArgonBox>
  );
}

function CompanyValuationTable() {
  const storedToken = localStorage.getItem("Authorization");
  const [companyInfo, setCompanyInfo] = useState(null);

  const companyValuationTable = {
    columns: [
      // { name: "company_id", align: "center" },
      { name: "revenue", align: "center" },
      { name: "expense", align: "center" },
      { name: "profit", align: "center" },
      { name: "loss", align: "center" },
      { name: "net_income", align: "center" },
      { name: "edit", align: "center" },
    ],

    rows: [
      {
        // company_id: <CompanyId company_id="231" />,
        revenue: <Revenue revenue= {companyInfo?.revenue}/>,
        expense: <Expense expense={companyInfo?.expense} />,
        profit: <Profit profit={companyInfo?.profit} />,
        loss: <Loss loss={companyInfo?.loss} />,
        net_income: <NetIncome net_income={companyInfo?.netIncome} />,
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
      // below URL should be changed to `http://localhost:9091/api/v1/company/get-company-valuation-manager/${decodedToken.id}`
      // after navigation by roles is completed
      axios
        .get(`http://localhost:9091/api/v1/company/get-company-valuation-manager/47`)
        .then((response) => {
          setCompanyInfo(response.data);
        })
        .catch((error) => {
          console.error("An error occurred while trying to retrieve company information: ", error);
        });
    }
  }, [storedToken]);

  return <Table columns={companyValuationTable.columns} rows={companyValuationTable.rows} />
}

export default CompanyValuationTable;
