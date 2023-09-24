// CompanyDetails.js

import React from "react";
import Typography from "@mui/material/Typography";
import PropTypes from 'prop-types';

function CompanyDetails({ companyName, companyAddress, companyPhone, infoEmail, taxId, city, establishmentDate }) {
  return (
    <div>
      <Typography variant="h5" component="div" gutterBottom>
        {companyName} Ayrıntıları
      </Typography>
      <Typography variant="body2" color="textSecondary">
        Adres: {companyAddress}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        Telefon: {companyPhone}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        E-Posta: {infoEmail}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        Vergi Kimlik Numarası: {taxId}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        Şehir: {city}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        Kuruluş Tarihi: {establishmentDate}
      </Typography>
    </div>
  );
}
CompanyDetails.propTypes = {
  companyName: PropTypes.string.isRequired,
  companyAddress: PropTypes.string.isRequired,
  companyPhone: PropTypes.string.isRequired,
  infoEmail: PropTypes.string.isRequired,
  taxId: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  establishmentDate: PropTypes.string.isRequired,
};

export default CompanyDetails;
