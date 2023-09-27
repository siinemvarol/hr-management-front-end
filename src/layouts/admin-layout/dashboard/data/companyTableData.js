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

import axios from "axios";
import { API_URLS } from "config/apiUrls";
import { useEffect, useState } from "react";

// // Countries flags
// import US from "assets/images/icons/flags/US.png";
// import DE from "assets/images/icons/flags/DE.png";
// import GB from "assets/images/icons/flags/GB.png";
// import BR from "assets/images/icons/flags/BR.png";

const companyTableData =()=>{
  const [companyTableData2, setCompanyTableData2] = useState([]);

  useEffect(() => {
    axios.get(`${API_URLS.company.localhost}/get-companies`)
      .then(response => {
        const apiData = response.data;

        const mappedData = apiData.map(item => {
          console.log(item)
          return {
       //     id: item.id,
            company: item.companyName,
            phone: item.companyPhone,
            address: item.companyAddress,
            city: item.city,
            taxID: item.taxId,
            status: item.status,
          };
        });

        setCompanyTableData2(mappedData);

      })
      .catch(error => {
        console.error('Error fetching company data:', error);
      });
  }, []);

  return companyTableData2;
};

export default companyTableData;