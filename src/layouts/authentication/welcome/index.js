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
// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";


import WelcomeCoverLayout from "../components/WelcomeCoverLayout";
import DefaultBlogCard from "examples/Cards/BlogCards/DefaultBlogCard";
import { Grid } from "swiper";

// Images
const bgImage =
  "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";

function Welcome() {
  const info = [
    "Company Manager, Employee, Guest, and Admin profiles",
    "Comments can be made about companies by their employees",
    "Expenses of employees can be managed and recorded",
    "Advance requests created by employees are tracked",
    "Company information pages for Company Managers, Employees, and Guests",
    "Each profile can update their information",
    "First 30 days are free!",
  ];

  return (
    <WelcomeCoverLayout
      title="MAKS"
      description="Human Resources Management Platform"
      quote='“The more seriously you take your growth, the more seriously your people will take you.” – John Maxwell'
      image={bgImage}
      imgPosition="top"
      button={{ color: "dark", variant: "gradient" }}
    >
      <ArgonBox
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(4, minmax(170px, 1fr))",
          gap: "1rem",
          gridTemplateRows: "repeat(2, 1fr)", 
          justifyContent: "center",
          alignItems: "center", 
          placeItems: "center",
          marginTop: "8rem",
          
        }}
      >
        {info.slice(0, 4).map((sentence, index) => (
          <ArgonBox
            key={index}
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.7)",
              padding: "1rem",
              borderRadius: "8px",
              textAlign: "center",
              color: "white",
              display:  "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "150px",
              width: "65%",
              textAlign: "center", 
              gridColumn: "span 1",           
       //       overflow: "auto",
              minWidth: "160px",
              minHeight: "150px",
             transition: "transform 0.3s, font-size 0.3s", 
              "&:hover": {
                transform: "scale(1.1)", // Scale up the box on hover
                fontSize: "1.3rem", // Increase font size on hover
              },
            }}
          >
            <ArgonTypography sx={{ fontSize: "1.1rem", lineHeight: "1.4" }}>{sentence}</ArgonTypography>
          </ArgonBox>
        ))}
      </ArgonBox>

      <ArgonBox
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1rem",
          gridTemplateRows: "repeat(1, 1fr)", // Define 1 row
          justifyContent: "center",
          alignItems: "center", // Center vertically
          placeItems: "center",
          marginTop: "-3rem"
        }}
      >
        {info.slice(4).map((sentence, index) => (
          <ArgonBox
            key={index}
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.7)",
              padding: "1rem",
              borderRadius: "8px",
              textAlign: "center",
              color: "white",
              display:  "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "150px",
              width: "14rem",
              textAlign: "center", 
              gridColumn: "span 1", 
              transition: "transform 0.3s, font-size 0.3s", 
              "&:hover": {
                transform: "scale(1.1)", // Scale up the box on hover
                fontSize: "1.3rem", // Increase font size on hover
              },
              
            }}
          >
            <ArgonTypography sx={{ fontSize: "1.1rem", lineHeight: "1.4" }}>{sentence}</ArgonTypography>
            
          </ArgonBox>
          
        ))}
      </ArgonBox>
      <br></br>
      


      </WelcomeCoverLayout>
      

  );
}

export default Welcome;
