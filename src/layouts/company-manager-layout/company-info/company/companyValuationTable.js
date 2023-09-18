/* eslint-disable react/prop-types */
// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonAvatar from "components/ArgonAvatar";
import ArgonBadge from "components/ArgonBadge";

//new added button and icons
import { Button, Stack } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";


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


const companyValuationTable = {
    columns: [
        // { name: "company_id", align: "center" },
        { name: "revenue", align: "center" },
        { name: "expense", align: "center" },
        { name: "profit", align: "center" },
        { name: "loss", align: "center" },
        { name: "net_income", align: "center" },
        { name: "edit", align: "center" }
    ],

    rows: [
        {
            // company_id: <CompanyId company_id="231" />,
            revenue: <Revenue revenue="$60000" />,
            expense: <Expense expense="$20000" />,
            profit: <Profit profit="%72" />,
            loss: <Loss loss="%5" />,
            net_income: <NetIncome net_income="$43444" />,
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

export default companyValuationTable;
