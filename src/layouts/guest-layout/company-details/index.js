// Companies.js

import React, { useState, useEffect } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import { Link, useNavigate } from "react-router-dom";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Header from "layouts/guest-layout/company-details/Header";
import { API_URLS } from "config/apiUrls";


function Companies() {
  const [companies, setCompanies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(1);
  const bgImage = "URL_YOUR_BACKGROUND_IMAGE_HERE";
  const navigate = useNavigate();
  const [selectedCompany, setSelectedCompany] = useState(null);

  const companiesPerPage = 6;

  useEffect(() => {
    axios
      .get(`${API_URLS.company.localhost}/activate-companies-list`)
      .then((response) => {
        setCompanies(response.data);
        setTotalPages(Math.ceil(response.data.length / companiesPerPage));
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  const indexOfLastCompany = currentPage * companiesPerPage;
  const indexOfFirstCompany = indexOfLastCompany - companiesPerPage;
  const currentCompanies = companies.slice(indexOfFirstCompany, indexOfLastCompany);

  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };

  // Şirket kartına tıklandığında CompanyDetails sayfasını açması için handleCompanyClick'i güncelledim.
  const handleCompanyClick = (companyName) => {
    navigate(`/company-detail/${encodeURIComponent(companyName)}`); // Şimdi doğru sayfayı açması gereken yolu kullanıyoruz
  };

  return (
    <DashboardLayout
      sx={{
        backgroundImage: ({ functions: { rgba, linearGradient }, palette: { gradients } }) =>
          `${linearGradient(
            rgba(gradients.info.main, 0.6),
            rgba(gradients.info.state, 0.6)
          )}, url(${bgImage})`,
        backgroundPositionY: "40%",
      }}
    >
      <Header />
      <Container sx={{ marginTop: "20px" }}>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h4" gutterBottom>
            Companies
          </Typography>
        </Box>
        <Grid container spacing={2}>
          {currentCompanies.map((company) => (
            <Grid item xs={12} sm={6} md={4} key={company.id}>
              <Card
                sx={{ height: "100%", width: "100%", margin: "16px", cursor: "pointer" }}
                onClick={() => handleCompanyClick(company.companyName)}
              >
                <CardContent>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ marginBottom: "16px", textAlign: "center" }}
                  >
                    {company.companyName}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Adress: {company.companyAddress}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Phone: {company.companyPhone}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    E-Posta: {company.infoEmail}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Tax Id: {company.taxId}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    City: {company.city}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Establishment Date : {company.establishmentDate}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ display: "flex", justifyContent: "center", marginTop: "40px" }}>
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={(event, page) => setCurrentPage(page)}
            color="primary"
          />
        </Box>
      </Container>
    </DashboardLayout>
  );
}

export default Companies;
