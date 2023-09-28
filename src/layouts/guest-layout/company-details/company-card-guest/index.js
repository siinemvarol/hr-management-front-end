import React, { useEffect, useState } from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Header from "layouts/guest-layout/company-details/Header";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import BusinessIcon from "@mui/icons-material/Business";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import EventIcon from "@mui/icons-material/Event";
import ForumIcon from '@mui/icons-material/Forum';
import ListItemIcon from '@mui/icons-material/Forum';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Box, Pagination} from "@mui/material";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { API_URLS } from "config/apiUrls";
import Footer from "examples/Footer";

const bgImage =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/profile-layout-header.jpg";



function CompanyDetails() {
  const location = useLocation();
  const { company } = location.state || {};
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Sayfa başına gösterilecek yorum sayısı
  const [comments, setComments] = useState([]);
  const indexOfLastComment = currentPage * itemsPerPage;
  const indexOfFirstComment = indexOfLastComment - itemsPerPage;
  const currentComments = comments.slice(indexOfFirstComment, indexOfLastComment);
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  useEffect(() => {
    const companyId = company && company.companyId;
    console.log("companyId", companyId);

    if (companyId) {
      axios
      .get(`${API_URLS.comment.localhost}/get-comments-by-guest/${companyId}`)
      .then((response) => {
        setComments(response.data);
      })
      .catch((error) => {
        console.error("An error occurred while trying to retrieve user information:", error);
      });
    }
  }, [company]);
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
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper elevation={6} style={{ padding: "20px" }}>
            <Box sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}>
              <BusinessIcon fontSize="large" color="primary" style={{ marginRight: "10px" }} />
            </Box>
            <Box sx={{ textAlign: "center", width: "50%", margin: "0 auto" }}>
              <Typography
                variant="h4"
                gutterBottom
                style={{ color: "blue", display: "inline-block" }}
              >
                {company && company.companyName}
              </Typography>
              <Box
                sx={{
                  borderBottom: "1px solid blue",
                  width: "60%",
                  margin: "0 auto",
                }}
              />
            </Box>

            <Box
              display="flex"
              alignItems="center"
              marginBottom="15px"
              marginTop="25px"
              sx={{ position: "relative" }}
            >
              <LocationOnIcon color="primary" style={{ marginRight: "10px" }} />
              <Typography variant="body2" color="textSecondary">
                {company && company.companyAddress}
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
              <PhoneIcon color="primary" style={{ marginRight: "10px" }} />
              <Typography variant="body2" color="textSecondary">
                {company && company.companyPhone}
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
              <EmailIcon color="primary" style={{ marginRight: "10px" }} />
              <Typography variant="body2" color="textSecondary">
                {company && company.infoEmail}
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
              <AccountBalanceIcon color="primary" style={{ marginRight: "10px" }} />
              <Typography variant="body2" color="textSecondary">
                {company && company.taxId}
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
              <EventIcon color="primary" style={{ marginRight: "10px" }} />
              <Typography variant="body2" color="textSecondary">
                {company && company.establishmentDate}
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
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: "20px" }}>
            <Typography variant="h4" gutterBottom>
              <ForumIcon fontSize="large" color="primary" style={{ marginRight: "10px" }} />
            </Typography>
            <List sx={{ maxHeight: "400px", overflowY: "auto" }}>
              {comments.map((comment) => (
                <ListItem key={comment.id} sx={{ backgroundColor: "#f5f5f5", borderRadius: "8px", marginBottom: "10px" }}>
                  <ListItemIcon>
                    <ForumIcon fontSize="small" color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary={<div style={{ fontWeight: "bold", marginLeft: "30px", marginBottom: "5px" }}>{comment.header}</div>}
                    secondary={<div style={{ marginLeft: "30px" }}>{comment.content}</div>}
                  />
                </ListItem>
              ))}
            </List>
            {comments.length > itemsPerPage && (
              <Pagination
                count={Math.ceil(comments.length / itemsPerPage)}
                color="primary"
                page={currentPage}
                onChange={handlePageChange}
              />
            )}
          </Paper>
        </Grid>
      </Grid>
      <Footer/>
    </DashboardLayout>
  );
}

export default CompanyDetails;