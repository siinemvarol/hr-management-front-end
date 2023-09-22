import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // react-router-dom yerine react-router import edildi
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Container from "@mui/material/Container";
import Pagination from "@mui/material/Pagination";
import Box from "@mui/material/Box";
import Header from "layouts/guest-layout/company-details/Header";

function generateRandomTaxNo() {
  const randomPart = Math.floor(Math.random() * 100000).toString().padStart(5, "0");
  return `12-${randomPart}-0`;
}

const generateRandomCompanies = () => {
  const companies = [];
  for (let i = 1; i <= 17; i++) {
    companies.push({
      id: i,
      name: `Şirket ${i}`,
      address: `Adres ${i}`,
      phone: `123-456-${i.toString().padStart(2, "0")}`,
      email: `sirket${i}@example.com`,
      taxNo: generateRandomTaxNo(),
      website: `www.sirket${i}.com`,
      foundationDate: `01/01/${2000 + i}`,
    });
  }
  return companies;
};

const bgImage =
  "URL_YOUR_BACKGROUND_IMAGE_HERE"; // Arka plan resminin URL'sini buraya ekleyin

const companiesPerPage = 6;

function Companies() {
  const [currentPage, setCurrentPage] = useState(1);
  const mockCompanies = generateRandomCompanies();
  const navigate = useNavigate(); // useHistory yerine useNavigate kullanılıyor

  const totalPages = Math.ceil(mockCompanies.length / companiesPerPage);
  const indexOfLastCompany = currentPage * companiesPerPage;
  const indexOfFirstCompany = indexOfLastCompany - companiesPerPage;
  const currentCompanies = mockCompanies.slice(indexOfFirstCompany, indexOfLastCompany);

  // Şirket Card'ına tıklandığında şirketin sayfasına yönlendirme işlemi
  const handleCompanyClick = (companyId) => {
    // Şirketin sayfa URL'sini oluşturun, örneğin "/company/1" gibi
    const companyPageUrl = `/company/${companyId}`;
    // React Router'ın `navigate` fonksiyonunu kullanarak yönlendirme yapın
    navigate(companyPageUrl);
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
      <Container sx={{ marginTop: '20px' }}>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h4" gutterBottom>
            Companies
          </Typography>
        </Box>
        <Grid container spacing={2}>
          {currentCompanies.map((company) => (
            <Grid item xs={12} sm={6} md={4} key={company.id}>
              <Card
                sx={{ height: "100%", width: "100%", margin: "16px", cursor: "pointer" }}
                onClick={() => handleCompanyClick(company.id)} // Card'a tıklama işleyici
              >
                <CardContent>
                  <Typography variant="h6" gutterBottom sx={{ marginBottom: "16px", textAlign: "center" }}>
                    {company.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Adres: {company.address}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Telefon: {company.phone}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    E-Posta: {company.email}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Vergi No: {company.taxNo}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Web Sitesi: {company.website}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Kuruluş Tarihi: {company.foundationDate}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
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
