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

import { useMemo } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

// Argon Dashboard 2 MUI components
import ArgonTypography from "components/ArgonTypography";
import ArgonBox from "components/ArgonBox";

// Argon Dashboard 2 MUI example components
import SalesTableCell from "examples/Tables/SalesTable/SalesTableCell";
import { Button } from "@mui/material";
import ArgonButton from "components/ArgonButton";

function CompanyTable({ title, rows }) {
  const renderTableCells = rows.map((row, key) => {
    const tableRows = [];
    const rowKey = `row-${key}`;

    Object.entries(row).map(([cellTitle, cellContent]) =>
      Array.isArray(cellContent)
        ? tableRows.push(
            <SalesTableCell
              key={cellContent[1]}
              title={cellTitle}
              content={cellContent[1]}
              image={cellContent[0]}
              noBorder={key === rows.length - 1}
            />
          )
        : tableRows.push(
            <SalesTableCell
              key={cellContent}
              title={cellTitle}
              content={cellContent}
              noBorder={key === rows.length - 1}
            />
          )
    );
    if (row.status === "NOT_AUTHORIZED") {
      tableRows.push(
        <SalesTableCell
          key={`confirm-button-${key}`}
          title="Quick Confirm"
          content={
            <ArgonButton
              variant="contained"
              color="success"
              onClick={() => {
                // Onayla butonuna tıklama işlemini burada ele alabilirsiniz
                alert(`Onaylandı: ${row.companyName}`);
              }}
            >
              Accept
            </ArgonButton>
          }
          noBorder={key === rows.length - 1}
        />
      );
    }
    

    return <TableRow key={rowKey}>{tableRows}</TableRow>;
  });

  return (
    <TableContainer sx={{ height: "100%" }}>
      <Table>
        <TableHead>
          <ArgonBox component="tr" width="max-content" display="block" mb={1.5}>
            <ArgonTypography variant="h6" component="td">
              {title}
            </ArgonTypography>
          </ArgonBox>
        </TableHead>
        <TableBody>{useMemo(() => renderTableCells, [rows])}</TableBody>
      </Table>
    </TableContainer>
  );
}

// Setting default values for the props of SalesTable
CompanyTable.defaultProps = {
  rows: [{}],
};

// Typechecking props for the SalesTable
CompanyTable.propTypes = {
  title: PropTypes.string.isRequired,
  rows: PropTypes.arrayOf(PropTypes.object),
};

export default CompanyTable;
