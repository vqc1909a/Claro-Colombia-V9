import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

//! Components
import HomeServicesHeader from "../HomeServicesHeader";

//! UI Components
import StyledContainer from "components/StyledUi/StyledContainer";
import StyledGrid from "components/StyledUi/StyledGrid";
import StyledCard from "components/StyledUi/StyledCard";


//!React Router Dom
import {useNavigate} from "react-router-dom"

export interface ChangeEventArgs {
  (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void
}

function HomeServicesPlansWelcome(){
  let navigate = useNavigate();
  

  return (
    <>
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: (theme) => theme.palette.common.white,
        backgroundImage: "url('images/home-services/clarohogar.jpg')",
        backgroundPosition: "right top",
        backgroundSize: { xs: "43% 120px", sm: "50% 170px", md: "55% 600px" },
        backgroundRepeat: "no-repeat"
      }}
    >
      <StyledContainer className="container-services">
        <StyledGrid container spacing={0}>
          {/* Form Section */}
          <StyledGrid item xs={12} sm={12} md={6}>
            <HomeServicesHeader></HomeServicesHeader>

            {/* Card del Formulario */}
            <StyledCard className="card-services card-services--welcome">
                <CardContent className="card-services__content">
                 {/* Section Welcome*/}
                 <Box className="card-services__plans-welcome" sx={{
                     textAlign: "center"
                 }}>
                     <Typography variant="body1" sx={{fontWeight: "bolder", my: 1}}>Campaña</Typography>
                     <Typography variant="h6" sx={{fontWeight: "bolder", lineHeight: "1"}}>Compra Ahora<br /> <Box component="span" sx={{color: theme => theme.palette.primary.main, fontWeight: "bolder"}}>y paga después</Box></Typography>

                     <Button variant="contained" sx={{px: 10, textTransform: "capitalize", mt: 3, mb: 2, backgroundColor: theme => theme.palette.primary.dark}} onClick={() => navigate("/servicios-hogar-planes")}>Continuar</Button>
                 </Box>              
                </CardContent>
            </StyledCard>
          </StyledGrid>

          {/* Image Section */}
          <StyledGrid item xs={12} md={6}></StyledGrid>
        </StyledGrid>
      </StyledContainer>

    </Box>
  </>
  );
}
export default HomeServicesPlansWelcome;
