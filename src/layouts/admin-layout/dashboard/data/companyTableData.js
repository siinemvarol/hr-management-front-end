import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URLS } from "config/apiUrls";

const CompanyTableData = () => {
  const [companyTableData2, setCompanyTableData2] = useState([]);

  const fetchData = () => {
    axios
      .get(`${API_URLS.company.localhost}/get-companies`)
      .then((response) => {
        const apiData = response.data;

        const mappedData = apiData.map((item) => ({
          company: item.companyName,
          phone: item.companyPhone,
          address: item.companyAddress,
          city: item.city,
          taxID: item.taxId,
          status: item.status,
          id: item.id
        }));

        setCompanyTableData2(mappedData);
      })
      .catch((error) => {
        console.error("Error fetching company data:", error);
      });
  };

  useEffect(() => {
    fetchData(); // Sayfa yüklendiğinde ilk veriyi al

    // 5 saniyede bir veriyi yeniden almak için setInterval kullan
    const intervalId = setInterval(() => {
      fetchData();
    }, 5000);

    // Component unmount olduğunda interval'i temizle
    return () => clearInterval(intervalId);
  }, []);

  return companyTableData2;
};

export default CompanyTableData;
