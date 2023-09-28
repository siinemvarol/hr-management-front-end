/**
=========================================================
* Argon Dashboard 2 MUI - v3.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-material-ui
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
//api urls 
import {API_URLS} from '../../../config/apiUrls';

// @mui material components
import Grid from "@mui/material/Grid";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";

// Argon Dashboard 2 MUI components
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Billing page components
import BaseLayout from "layouts/admin-layout/components/BaseLayout";
import NewCompaniesApproval from "layouts/admin-layout/components/NewCompaniesApproval";
import { useEffect, useState } from "react";
import axios from "axios";

// Argon Dashboard 2 MUI examples
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';
import DashboardNavbar from 'examples/Navbars/DashboardNavbar';
import Footer from "examples/Footer";

function ApproveNewCompanies() {
//Functions

   //Get Number of All Companies Method
   const apiUrl2 = `${API_URLS.company.localhost}/get-number-company`;
   const [newCompanies, setNewCompanies] = useState(null);
   
   const fetchNewCompanies = () => {
     fetch(apiUrl2)
       .then(response => {
         if (!response.ok) {
           throw new Error('Network response was not ok');
         }
         return response.json();
       })
       .then(data => {
          setNewCompanies(data);
       })
       .catch(error => {
         console.error('There was a problem with the fetch operation:', error);
       });
   };
   
   useEffect(() => {
     fetchNewCompanies();
   }, []);

  
   const [companyTableData2, setCompanyTableData2] = useState([]);
   useEffect(() => {
     axios.get(`${API_URLS.company.localhost}/get-not-authorized-companies`)
       .then(response => {
         const apiData = response.data;
 
         const mappedData = apiData.map(item => {
 
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


         setCompanyTableData2(mappedData.length);
          console.log(mappedData)
       })
       .catch(error => {
         console.error('Error fetching company data:', error);
       });
   }, []);




  return (
<DashboardLayout>
  <DashboardNavbar/>
  {/* <BaseLayout stickyNavbar> */}
      <ArgonBox mt={4}>
        <ArgonBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={8}>
              <Grid container spacing={3}>
                <Grid item xs={12} xl={6}></Grid>
                <Grid item xs={12} md={6} xl={3}>
                  <DefaultInfoCard
                    icon="create_new_folder_outlined"
                    title="Applications"
                    description="Waiting for Approval"
                    
                    value={companyTableData2}
                  />
                </Grid>
                <Grid item xs={12} md={6} xl={3}>
                  <DefaultInfoCard
                    icon="business_outlined"
                    title="Total"
                    description="Total Companies in the System"
                    value={newCompanies}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </ArgonBox>
        {/* below is code for new company requests */}
        <ArgonBox mb={3} sx={{ width: "173%"}}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={7}>
              <NewCompaniesApproval />
            </Grid>
          </Grid>
        </ArgonBox>
      </ArgonBox>
    {/* </BaseLayout> */}
    <Footer/>
</DashboardLayout>
   
  );
}

export default ApproveNewCompanies;
