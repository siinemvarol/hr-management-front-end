/* eslint-disable react/prop-types */
// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

//new added button and icons
import { Button, Input, Stack } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import Table from "examples/Tables/Table";
import { API_URLS } from "config/apiUrls";
import ArgonButton from "components/ArgonButton";
import FormControl from "@mui/material/FormControl";
import { Form } from "react-router-dom";

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
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState(null);

  const inputRevenue = useRef(null);
  const inputExpense = useRef(null);
  const inputProfit = useRef(null);
  const inputLoss = useRef(null);
  const inputNetIncome = useRef(null);

  const handleFieldBlur = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleEditClick = () => {
    setEditMode(true);
    setFormData({ ...companyInfo });
  };

  const handleSave = () => {
    const decodedToken = jwt_decode(storedToken);
    console.log(formData);
    axios
      .put(`${API_URLS.company.localhost}/update-company-valuation/${decodedToken.id}`, formData)
      .then((response) => {
        console.log("Company valuation updated: ", formData);
        setCompanyInfo(formData);
        setEditMode(false);
      })
      .catch((error) => {
        console.error("An error occured while updating company valuation: ", error);
      });
    setEditMode(false);
  };

  const handleCancelEdit = () => {
    setEditMode(false);
    setFormData({
      ...companyInfo,
    });
  };

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
        revenue: editMode ? (
          <Input
            type="text"
            name="revenue"
            ref={inputRevenue}
            defaultValue={editMode ? companyInfo?.revenue : ""}
            onBlur={handleFieldBlur}
            //           value={formData?.revenue}
            //           onChange={handleFieldChange}
          />
        ) : (
          <Revenue revenue={companyInfo?.revenue} />
        ),
        expense: editMode ? (
          <Input
            type="text"
            name="expense"
            ref={inputExpense}
            defaultValue={editMode ? companyInfo?.expense : ""}
            onBlur={handleFieldBlur}
            // value={formData?.expense}
            // onChange={handleFieldChange}
          />
        ) : (
          <Expense expense={companyInfo?.expense} />
        ),
        profit: editMode ? (
          <Input
            type="text"
            name="profit"
            ref={inputProfit}
            defaultValue={editMode ? companyInfo?.profit : ""}
            onBlur={handleFieldBlur}
            // value={formData?.profit}
            // onChange={handleFieldChange}
          />
        ) : (
          <Profit profit={companyInfo?.profit} />
        ),
        loss: editMode ? (
          <Input
            type="text"
            name="loss"
            ref={inputLoss}
            defaultValue={editMode ? companyInfo?.loss : ""}
            onBlur={handleFieldBlur}
            // value={formData?.loss}
            // onChange={handleFieldChange}
          />
        ) : (
          <Loss loss={companyInfo?.loss} />
        ),
        net_income: editMode ? (
          <Input
            type="text"
            name="netIncome"
            ref={inputNetIncome}
            defaultValue={editMode ? companyInfo?.netIncome : ""}
            onBlur={handleFieldBlur}
            // value={formData?.netIncome}
            // onChange={handleFieldChange}
          />
        ) : (
          <NetIncome net_income={companyInfo?.netIncome} />
        ),
        edit: (
          <Stack direction="row" spacing={2}>
            {editMode ? (
              <>
                <ArgonButton size="small" color="success" variant="contained" onClick={handleSave}>
                  Save
                </ArgonButton>
                <ArgonButton
                  size="small"
                  color="error"
                  variant="contained"
                  onClick={handleCancelEdit}
                >
                  Cancel
                </ArgonButton>
              </>
            ) : (
              <ArgonButton
                size="small"
                color="primary"
                variant="contained"
                startIcon={<EditIcon />}
                onClick={handleEditClick}
              >
                Edit
              </ArgonButton>
            )}
          </Stack>
        ),
      },
    ],
  };

  useEffect(() => {
    if (storedToken) {
      const decodedToken = jwt_decode(storedToken);
      console.log(decodedToken);

      axios
        .get(`${API_URLS.company.localhost}/get-company-valuation-manager/${decodedToken.id}`)
        .then((response) => {
          setCompanyInfo(response.data);
        })
        .catch((error) => {
          console.error("An error occurred while trying to retrieve company information: ", error);
        });
    }
  }, [storedToken]);

  return <Table columns={companyValuationTable.columns} rows={companyValuationTable.rows} />;
}

export default CompanyValuationTable;
