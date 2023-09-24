import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import PropTypes from 'prop-types';

function CompanyDetails({ company }) {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Card>
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom>
            {company.companyName} Ayrıntıları
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography variant="body2" color="textSecondary">
                Adres: {company.companyAddress}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body2" color="textSecondary">
                Telefon: {company.companyPhone}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" color="textSecondary">
                E-Posta: {company.infoEmail}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" color="textSecondary">
                Vergi Kimlik Numarası: {company.taxId}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body2" color="textSecondary">
                Şehir: {company.city}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body2" color="textSecondary">
                Kuruluş Tarihi: {company.establishmentDate}
              </Typography>
            </Grid>
            {/* Diğer şirket ayrıntıları burada gösterilebilir */}
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
}

CompanyDetails.propTypes = {
  company: PropTypes.shape({
    companyName: PropTypes.string.isRequired,
    companyAddress: PropTypes.string.isRequired,
    companyPhone: PropTypes.string.isRequired,
    infoEmail: PropTypes.string.isRequired,
    taxId: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    establishmentDate: PropTypes.string.isRequired,
  }).isRequired,
};

export default CompanyDetails;
