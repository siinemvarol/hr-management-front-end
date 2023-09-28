import React, { useState, useEffect } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Pagination from "@mui/material/Pagination";
import { Link, useNavigate } from "react-router-dom";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Header from "layouts/guest-layout/company-details/Header";
import BusinessIcon from "@mui/icons-material/Business";
import PhoneIcon from "@mui/icons-material/Phone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import RoomIcon from "@mui/icons-material/Room";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import EventNoteIcon from "@mui/icons-material/EventNote";
import { API_URLS } from "../../../config/apiUrls";
import { Typography } from "@mui/material";
import Footer from "examples/Footer";

function Companies() {
  const [companies, setCompanies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(1);
  const bgImage =
    "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/profile-layout-header.jpg";
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

  const handleCompanyClick = (companyName) => {
    const company = companies.find((comp) => comp.companyName === companyName);
    setSelectedCompany(company);
    console.log("company", company);
    navigate(`/guest/company-detail/${encodeURIComponent(companyName)}`, {
      state: { company },
    });
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
                  <Box display="flex" flexDirection="column" alignItems="center" marginBottom="16px">
                    <BusinessIcon color="primary" fontSize="large" />
                    <Typography variant="h6" color="primary" sx={{ marginTop: "8px" }}>
                      {company.companyName}
                    </Typography>
                    <hr style={{ width: "50%", borderTop: "2px solid #ccc", margin: "8px 0" }} />
                  </Box>
                  <Box
                    display="flex"
                    alignItems="center"
                    marginBottom="15px"
                    sx={{ position: "relative" }}
                  >
                    <RoomIcon fontSize="small" color="textSecondary" />
                    <Typography variant="body2" color="textSecondary" sx={{ marginLeft: "8px" }}>
                      {company.companyAddress}
                    </Typography>
                    <Typography
                      variant="caption"
                      color="textSecondary"
                      sx={{
                        position: "absolute",
                        top: "-12px",
                        left: "20px",
                        opacity: 0.7,
                      }}
                    >
                      Address
                    </Typography>
                  </Box>

                  <Box
                    display="flex"
                    alignItems="center"
                    marginBottom="15px"
                    sx={{ position: "relative" }}
                  >
                    <PhoneIcon fontSize="small" color="textSecondary" />
                    <Typography variant="body2" color="textSecondary" sx={{ marginLeft: "8px" }}>
                      {company.companyPhone}
                    </Typography>
                    <Typography
                      variant="caption"
                      color="textSecondary"
                      sx={{
                        position: "absolute",
                        top: "-12px",
                        left: "20px",
                        opacity: 0.7,
                      }}
                    >
                      Phone
                    </Typography>
                  </Box>
                  <Box
                    display="flex"
                    alignItems="center"
                    marginBottom="15px"
                    sx={{ position: "relative" }}
                  >
                    <MailOutlineIcon fontSize="small" color="textSecondary" />
                    <Typography variant="body2" color="textSecondary" sx={{ marginLeft: "8px" }}>
                      {company.infoEmail}
                    </Typography>
                    <Typography
                      variant="caption"
                      color="textSecondary"
                      sx={{
                        position: "absolute",
                        top: "-12px",
                        left: "20px",
                        opacity: 0.7,
                      }}
                    >
                      Email
                    </Typography>
                  </Box>
                  <Box
                    display="flex"
                    alignItems="center"
                    marginBottom="15px"
                    sx={{ position: "relative" }}
                  >
                    <AssignmentIndIcon fontSize="small" color="textSecondary" />
                    <Typography variant="body2" color="textSecondary" sx={{ marginLeft: "8px" }}>
                      {company.taxId}
                    </Typography>
                    <Typography
                      variant="caption"
                      color="textSecondary"
                      sx={{
                        position: "absolute",
                        top: "-12px",
                        left: "20px",
                        opacity: 0.7,
                      }}
                    >
                      Tax ID
                    </Typography>
                  </Box>
                  <Box
                    display="flex"
                    alignItems="center"
                    marginBottom="15px"
                    sx={{ position: "relative" }}
                  >
                    <AssignmentIndIcon fontSize="small" color="textSecondary" />
                    <Typography variant="body2" color="textSecondary" sx={{ marginLeft: "8px" }}>
                      {company.city}
                    </Typography>
                    <Typography
                      variant="caption"
                      color="textSecondary"
                      sx={{
                        position: "absolute",
                        top: "-12px",
                        left: "20px",
                        opacity: 0.7,
                      }}
                    >
                      City
                    </Typography>
                  </Box>
                  <Box
                    display="flex"
                    alignItems="center"
                    marginBottom="15px"
                    sx={{ position: "relative" }}
                  >
                    <EventNoteIcon fontSize="small" color="textSecondary" />
                    <Typography variant="body2" color="textSecondary" sx={{ marginLeft: "8px" }}>
                      {company.establishmentDate}
                    </Typography>
                    <Typography
                      variant="caption"
                      color="textSecondary"
                      sx={{
                        position: "absolute",
                        top: "-12px",
                        left: "20px",
                        opacity: 0.7,
                      }}
                    >
                      Establishment Date
                    </Typography>
                  </Box>
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
      <Footer/>
    </DashboardLayout>
  );
}

export default Companies;
