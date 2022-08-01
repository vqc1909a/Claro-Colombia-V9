import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Fade from "@mui/material/Fade";

//! Components
import HomeServicesHeader from "../HomeServicesHeader";

//! UI Components
import StyledContainer from "components/StyledUi/StyledContainer";
import StyledGrid from "components/StyledUi/StyledGrid";
import StyledCard from "components/StyledUi/StyledCard";
import StyledButton from "components/StyledUi/StyledButton";

//!React Router Dom
import {useNavigate} from "react-router-dom";

//!Hooks
import useScrollToTop from "utils/hooks/useScrollToTop";

function HomeServicesPlansWelcome() {
    let navigate = useNavigate();

    //! Effects
    useScrollToTop();

    return (
        <Fade in={true} timeout={1000} easing="ease-in-out">
            <Box
                sx={{
                    minHeight: "100vh",
                    backgroundColor: (theme) => theme.palette.common.white,
                    backgroundImage:
                        "url('images/home-services/clarohogar.jpg')",
                    backgroundPosition: "right top",
                    backgroundSize: {
                        xs: "43% 120px",
                        sm: "50% 170px",
                        md: "55% 600px",
                    },
                    backgroundRepeat: "no-repeat",
                }}
            >
                <StyledContainer className="container-services">
                    <StyledGrid container spacing={0}>
                        <StyledGrid item xs={12} sm={12} md={6}>
                            <HomeServicesHeader></HomeServicesHeader>

                            {/* Card del Bienvenida */}
                            <StyledCard className="card-services-container card-services-container--welcome">
                                <CardContent className="card-services-container__content">
                                    {/* Section Welcome*/}
                                    <Box
                                        className="card-services-container__plans-welcome"
                                        sx={{
                                            textAlign: "center",
                                        }}
                                    >
                                        <Typography
                                            variant="h6"
                                            sx={{fontWeight: "bolder", my: 1}}
                                        >
                                            Campaña
                                        </Typography>
                                        <Typography
                                            variant="h5"
                                            sx={{
                                                fontWeight: "bolder",
                                                lineHeight: "1",
                                            }}
                                        >
                                            Compra Ahora
                                            <br />{" "}
                                            <Box
                                                component="span"
                                                sx={{
                                                    color: (theme) =>
                                                        theme.palette.primary
                                                            .main,
                                                    fontWeight: "bolder",
                                                }}
                                            >
                                                y paga después
                                            </Box>
                                        </Typography>

                                        <StyledButton
                                            variant="contained"
                                            sx={{
                                                typography: "body2",
                                                px: 10,
                                                mt: 3,
                                                mb: 2
                                            }}
                                            onClick={() =>
                                                navigate(
                                                    "/servicios-hogar-planes"
                                                )
                                            }
                                        >
                                            Continuar
                                        </StyledButton>
                                    </Box>
                                </CardContent>
                            </StyledCard>
                        </StyledGrid>

                        {/* Image Section */}
                        <StyledGrid item xs={12} md={6}></StyledGrid>
                    </StyledGrid>
                </StyledContainer>
            </Box>
        </Fade>
    );
}
export default HomeServicesPlansWelcome;
