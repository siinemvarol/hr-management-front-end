/* eslint-disable react/prop-types */
// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import { useState } from "react";

// const [companyName, setCompanyName] = useState("");
// const [phone, setPhone] = useState("");
// const [infoEmail, setInfoEmail] = useState("");
// const [establishmentDate, setEstablishmentDate] = useState("");
// const [city, setCity] = useState("");
// const [taxId, setTaxId] = useState("");
// const [revenue, setRevenue] = useState("");
// const [expense, setExpense] = useState("");
// const [profit, setProfit] = useState("");
// const [loss, setLoss] = useState("");
// const [netIncome, setNetIncome] = useState("");

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

// function showCompanyInformation(companyId) {
//   const getCompanyInformationRequestDto = {
//     companyId: companyId,
//   };
//   axios.get(`http://localhost:9091/api/v1/company/get-company-information/${companyId}`).then((response) => {
//     setCompanyName(response.data.companyName);
//     setPhone(response.data.companyPhone);
//     setInfoEmail(response.data.infoEmail);
//     setEstablishmentDate(response.data.establishmentDate);
//     setCity(response.data.city);
//     setTaxId(response.data.taxId);
//     setRevenue(response.data.revenue);
//     setExpense(response.data.expense);
//     setProfit(response.data.profit);
//     setLoss(response.data.loss);
//     setNetIncome(response.data.netIncome);

//   }).catch((error) => {
//     console.error("An error occurred while trying to retrieve company information:", error);
//   });
// }

const companyInformationData = {
  columns: [
    { name: "header", align: "left" },
    { name: "information", align: "left" },
  ],

  rows: [
    {
      header: <Header name="Name" />,
      information: <Function data="{companyName}" />,
    },
    {
      header: <Header name="Phone" />,
      information: <Function data="{phone}" />,
    },
    {
      header: <Header name="Email" />,
      information: <Function data="{infoEmail}" />,
    },
    {
      header: <Header name="Establishment Date" />,
      information: <Function data="{establishmentDate}" />,
    },
    {
      header: <Header name="City" />,
      information: <Function data="{city}" />,
    },
    {
      header: <Header name="Tax ID Number" />,
      information: <Function data="{taxId}" />,
    },
    {
      header: <Header name="Revenue" />,
      information: <Function data="{revenue}" />,
    },
    {
      header: <Header name="Expense" />,
      information: <Function data="{expense}" />,
    },
    {
      header: <Header name="Profit" />,
      information: <Function data="{profit}" />,
    },
    {
      header: <Header name="Loss" />,
      information: <Function data="{loss}" />,
    },
    {
      header: <Header name="Net Income" />,
      information: <Function data="{netIncome}" />,
    },
  ],
};

export default companyInformationData;
