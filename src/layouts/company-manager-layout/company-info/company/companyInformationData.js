/* eslint-disable react/prop-types */
// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonAvatar from "components/ArgonAvatar";

// Images
import team2 from "assets/images/team-2.jpg";

//new added button and icons
import { Button, Input, Stack } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import Table from "examples/Tables/Table";
import { API_URLS } from "config/apiUrls";
import ArgonButton from "components/ArgonButton";
import { Label } from "@mui/icons-material";

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

function CompanyInformationData() {
  const storedToken = localStorage.getItem("Authorization");
  const [companyInfo, setCompanyInfo] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    companyName: "",
    infoEmail: "",
    CompanyPhone: "",
    TaxId: "",
    CompanyAddress: "",
    City: "",
    EstablishmentDate: "",

  });

  const inputCompanyName = useRef(null);
  const inputInfoEmail = useRef(null);
  const inputCompanyPhone = useRef(null);
  const inputTaxId = useRef(null);
  const inputCompanyAddress = useRef(null);
  const inputCity = useRef(null);
  const inputEstablishmentDate = useRef(null);

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

  const handleSave = async () => {
    const decodedToken = jwt_decode(storedToken);
    console.log(formData);
  
    try {
      const response = await axios.put(`${API_URLS.company.localhost}/update-company-information/${decodedToken.id}`, formData);
      console.log("Company information updated: ", formData);
      setCompanyInfo(formData);
      setEditMode(false);
      handleCancelEdit(false); // Eğer gerekliyse burada çağrılabilir.
    } catch (error) {
      console.error("An error occured while updating company information: ", error);
    }
  };
  
  

  const handleCancelEdit = () => {
    setEditMode(false);
    setFormData({
      ...companyInfo,
    });
  };

  const companyInformationData = {
    columns: [
      { name: "name", align: "left" },
      { name: "email", align: "left" },
      { name: "phone", align: "left" },
      { name: "tax_id", align: "left" },
      { name: "address", align: "left" },
      { name: "city", align: "left" },
      { name: "establishment", align: "left" },
      { name: "edit", align: "center" },
    ],

    rows: [
      {
        name: editMode ? (
          <Input
            type="text"
            name="companyName"
            ref={inputCompanyName}
            defaultValue={editMode ? companyInfo?.companyName : ""}
            onBlur={handleFieldBlur}
            // value={formData?.companyName}
            // onChange={handleFieldChange}
          />
        ) : (
          <Name image={team2} name={companyInfo?.companyName} />
        ),
        email: editMode ? (
          <Input
            type="text"
            name="infoEmail"
            ref={inputInfoEmail}
            defaultValue={editMode ? companyInfo?.infoEmail : ""}
            onBlur={handleFieldBlur}
            // value={formData?.infoEmail}
            // onChange={handleFieldChange}
          />
        ) : (
          <Email email={companyInfo?.infoEmail} />
        ),
        phone: editMode ? (
          <Input
            type="text"
            name="companyPhone"
            ref={inputCompanyPhone}
            defaultValue={editMode ? companyInfo?.companyPhone : ""}
            onBlur={handleFieldBlur}
            // value={formData?.companyPhone}
            // onChange={handleFieldChange}
          />
        ) : (
          <Phone phone={companyInfo?.companyPhone} />
        ),
        tax_id: editMode ? (
          <Input 
          type="text" 
          name="taxId" 
          ref={inputTaxId}
          defaultValue={editMode ? companyInfo?.taxId : ""}
          onBlur={handleFieldBlur}
          // value={formData?.taxId} 
          // onChange={handleFieldChange} 
          />
        ) : (
          <TaxId tax_id={companyInfo?.taxId} />
        ),
        address: editMode ? (
          <Input
            type="text"
            name="companyAddress"
            ref={inputCompanyAddress}
            defaultValue={editMode ? companyInfo?.companyAddress : ""}
            onBlur={handleFieldBlur}
            // value={formData?.companyAddress}
            // onChange={handleFieldChange}
          />
        ) : (
          <Address address={companyInfo?.companyAddress} />
        ),
        city: editMode ? (
          <Input 
          type="text" 
          name="city" 
          ref={inputCity}
            defaultValue={editMode ? companyInfo?.city : ""}
            onBlur={handleFieldBlur}
          // value={formData?.city} 
          // onChange={handleFieldChange}
           />
        ) : (
          <City city={companyInfo?.city} />
        ),
        establishment: editMode ? (
          <Input
            type="text"
            name="establishmentDate"
            ref={inputEstablishmentDate}
            defaultValue={editMode ? companyInfo?.establishmentDate : ""}
            onBlur={handleFieldBlur}
            // value={formData?.establishmentDate}
            // onChange={handleFieldChange}
          />
        ) : (
          <Establishment establishment={companyInfo?.establishmentDate} />
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
                color="info"
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
        .get(
          `http://localhost:9091/api/v1/company/get-company-information-manager/${decodedToken.id}`
        )
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
