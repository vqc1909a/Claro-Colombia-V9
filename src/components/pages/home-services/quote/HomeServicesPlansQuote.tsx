import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Fade from "@mui/material/Fade";
import Link from "@mui/material/Link";
import Hidden from "@mui/material/Hidden";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
// import Card from "@mui/material/Card";

//! Icons
import CheckIcon from "@mui/icons-material/Check";
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import PersonalVideoOutlinedIcon from '@mui/icons-material/PersonalVideoOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';
// import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

//! Components
import HomeServicesHeader from "../HomeServicesHeader";

//! UI Components
import StyledContainer from "components/StyledUi/StyledContainer";
import StyledGrid from "components/StyledUi/StyledGrid";
import StyledCard from "components/StyledUi/StyledCard";
import StyledImage from "components/StyledUi/StyledImage";
import StyledButton from "components/StyledUi/StyledButton";



//!React Router Dom
import {useNavigate, Link as RouterLink} from "react-router-dom";

//!React Redux
import useAppSelector from "utils/hooks/useAppSelector";
import useAppDispatch from "utils/hooks/useAppDispatch";

//! Actions
import * as CART_ACTIONS from "redux/slices/cart";

//!Selectors
import * as PLANS_SELECTORS from "redux/selectors/homeServicesPlans";
import * as USER_SELECTORS from "redux/selectors/user";


//!Hooks
import useScrollToTop from "utils/hooks/useScrollToTop";

type IconsHomeServicesPlansInterface = {
    [index: string]: any
}

const IconsHomeServicesPlans: IconsHomeServicesPlansInterface = {
    "internet": <LanguageOutlinedIcon fontSize="medium" sx={{mr: 1}}></LanguageOutlinedIcon>,
    "television": <PersonalVideoOutlinedIcon fontSize="medium" sx={{mr: 1}}></PersonalVideoOutlinedIcon>,
    "telefonia": <LocalPhoneOutlinedIcon fontSize="medium" sx={{mr: 1}}></LocalPhoneOutlinedIcon>,
    "adicionales": <LocalHospitalOutlinedIcon fontSize="medium" sx={{mr: 1}}></LocalHospitalOutlinedIcon>
} 

function HomeServicesPlansQuote() {
    let navigate = useNavigate();
    let selectedPlans = useAppSelector(PLANS_SELECTORS.selectSelectedPlans);
    let isLogged = useAppSelector(USER_SELECTORS.selectIsLogged);
    let dispatch = useAppDispatch();

    //! Effects
    useScrollToTop();

    const handleShoppingCart = () => {
        dispatch(CART_ACTIONS.addItems(selectedPlans));
        navigate("/cart")
    }
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
                        md: "43% 290px",
                    },
                    backgroundRepeat: "no-repeat",
                }}
            >
                <StyledContainer className="container-services">
                    <StyledGrid container spacing={0}>

                        <StyledGrid item xs={12} sm={12} md={6}>
                            <HomeServicesHeader></HomeServicesHeader>
                        </StyledGrid>

                        {/* Image Section */}
                        <StyledGrid item xs={12} md={6}></StyledGrid>

                        {/* Cards Quote */}
                        <StyledGrid item xs={12} sx={{mx: {xs: 0, md: 4}}}>
                            <StyledCard variant="outlined" className="card-services-container card-services-container--quote">
                                <CardContent className="card-services-container__content">
                                    {/* Header Cards Quote*/}
                                    <Box sx={{mb: 3}}>
                                        
                                        <Hidden smUp>
                                            <StyledCard sx={{position: "absolute", top: "-20px", left: "5%", width: "90%", py: 1, borderRadius: "5px"}}>
                                                <Typography variant="h5" sx={{textAlign: "center", fontWeight: "bolder"}}>Resumen de tu cotización</Typography>
                                            </StyledCard>
                                        </Hidden>

                                        <Hidden smDown>
                                            <Typography variant="h5" sx={{fontWeight: "bolder"}}>Resumen de tu cotización</Typography>
                                        </Hidden>
                                        <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center", mt: {xs: 2, sm: 0}}}>
                                            <Typography variant="body1" sx={{width: "100%", textAlign: {xs: "center", sm: "initial"}}}>Entre más servicios adquieras, más beneficios obtendrás.</Typography>
                                            <Hidden smDown>
                                                <Link component={RouterLink} variant="body2" to="/servicios-hogar-planes" underline="hover" color="info.main" sx={{ml: "auto"}}>{"<Regresar"}</Link>                                        
                                            </Hidden>
                                        </Box>
                                    </Box>

                                    {/* Content Cards Quote*/}
                                    <StyledGrid container spacing={5} sx={{mb: 5}}>
                                        {/* All Plans except additionals */}
                                        {selectedPlans.filter(plan => plan.category !== "adicionales").map(plan => (
                                        <StyledGrid item xs={12} sm={6} md={4} key={plan._id}>
                                            <StyledCard className="card card--quote"                                 variant="outlined"
                                            >
                                                <CardContent >
                                                    {/* Card header */}
                                                    <Box className="card__header">
                                                        <Typography
                                                            variant="h6"
                                                            component="h6"
                                                            sx={{fontWeight: "bolder", pb: 1, textTransform: "capitalize", display: "flex", alignItems: "center", borderBottom: theme => `2px dashed ${theme.palette.grey["400"]}`}}
                                                        >
                                                            {IconsHomeServicesPlans[plan.category]}
                                                            {plan.category}
                                                        </Typography>
                                                        <Typography
                                                            variant="h5"
                                                            component="h5"
                                                            className="card__plan"
                                                        >
                                                            {plan.plan}
                                                        </Typography>
                                                   
                                                    </Box>

                                                    {/* Card Content */}
                                                    <Box className="card__content">
                                                        {/* Puede haber benificios vacios, es por eso que lo filtramos */}
                                                        {plan.benefits.filter(benefit => benefit.trim()).map((benefit) => (
                                                            <Typography
                                                                key={benefit}
                                                                variant="body2"
                                                                mb={1}
                                                                display="flex"
                                                                alignItems="flex-start"
                                                            >
                                                                <CheckIcon
                                                                    fontSize="small"
                                                                    sx={{
                                                                        color: (theme) =>
                                                                            theme.palette.info.main,
                                                                        mr: 0.5,
                                                                    }}
                                                                ></CheckIcon>
                                                                {benefit}
                                                            </Typography> 
                                                        ))}
                                                    </Box>
                                                </CardContent>
                                                <CardActions>
                                                    <Box className="card__footer">
                                                        <Box className="card__prices card__prices--one card__prices--quote">
                                                            <Box
                                                                sx={{
                                                                    display: "flex",
                                                                    justifyContent: "space-between",
                                                                    alignItems: "flex-start"
                                                                }}
                                                            >
                                                                <Typography
                                                                    variant="body1"
                                                                    component="span"
                                                                    sx={{fontWeight: "bolder", mb: -0.5}}
                                                                >
                                                                    Precio en combo:
                                                                </Typography>

                                                                <Typography
                                                                    variant="h5"
                                                                    component="span"
                                                                    sx={(theme) => ({
                                                                        fontWeight: "bolder",
                                                                        color: theme.palette.error.main,
                                                                        mb: -0.5,
                                                                    })}
                                                                >
                                                                    ${plan.comboPrice}
                                                                </Typography>   
                                                            </Box>
                                                            <Box
                                                                sx={{
                                                                    display: "flex",
                                                                    justifyContent: "space-between",
                                                                    alignItems: "flex-end"
                                                                }}
                                                            >
                                                                 <Typography
                                                                    variant="body2"
                                                                    component="span"
                                                                    sx={{
                                                                        color: theme => theme.palette.grey["700"]
                                                                    }}
                                                                >
                                                                    Precio Unitario:
                                                                </Typography>
                                                                <Typography
                                                                    variant="h6"
                                                                    component="span"
                                                                    sx={{mt: 0.5, mb: -0.5, textDecoration: "line-through"}}
                                                                >
                                                                    ${plan.unitPrice}
                                                                </Typography>
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                </CardActions>
                                            </StyledCard>
                                        </StyledGrid>
                                        ))}
                                    </StyledGrid>

                                    {/* Plans additionals */}
                                    <StyledGrid container spacing={5} sx={{mb: 5}}>
                                        {selectedPlans.filter(plan => plan.category === "adicionales").length
                                        ?
                                        <StyledGrid item xs={12} md={8}>
                                            <StyledCard className="card card--quoteAdditional"                                 variant="outlined"
                                            >
                                                <CardContent >
                                                    {/* Cards Additionals Header */}
                                                    <Box className="card__header">            
                                                        <Typography
                                                            variant="h6"
                                                            component="h6"
                                                            sx={{fontWeight: "bolder", pb: 1, textTransform: "capitalize", display: "flex", alignItems: "center", borderBottom: theme => `2px dashed ${theme.palette.grey["400"]}`}}
                                                        >
                                                            {IconsHomeServicesPlans["adicionales"]}
                                                            Adicionales para tu hogar
                                                        </Typography>
                                                    </Box>

                                                    {/* Cards Additionals Content */}
                                                    <Box className="card__content">
                                                        <StyledGrid container spacing={3}>
                                                            {selectedPlans.filter(plan => plan.category === "adicionales").map(plan => (
                                                            <StyledGrid item xs={6} sm={4} key={plan._id}>
                                                                <Box>
                                                                    <Box sx={{display: "flex", alignItems: "center"}}>
                                                                        <StyledCard variant="outlined" className="card-special">
                                                                            <CardContent>
                                                                                <Typography variant="body1" sx={{fontWeight: "bolder", mb: .5, textAlign: "center"}}>{plan.subcategory}</Typography>       
                                                                                <Box sx={{height: {xs: "50px", sm:"60px", md: "70px"}}}>                                                         <StyledImage alt={plan.plan} src={plan.image} />
                                                                                </Box>
                                                                            </CardContent>
                                                                            {/* <CloseOutlinedIcon
                                                                                fontSize="medium"
                                                                                sx={{transform: "rotate(-45deg) translateY(-50%)", color: theme => theme.palette.primary.dark, fontWeight: "bolder", position: "absolute", right: "0", top: "50%"}}
                                                                            /> */}
                                                                        </StyledCard>

                                                                        {/* {i + 1 === plans.filter(plan => plan.isSelected && plan.category === "adicionales").length
                                                                        ?
                                                                        <CloseOutlinedIcon
                                                                            fontSize="medium"
                                                                            sx={{transform: "rotate(-45deg)", color: theme => theme.palette.primary.dark, fontWeight: "bolder", ml: 2, visibility: "hidden"}}
                                                                        />
                                                                        :
                                                                        <CloseOutlinedIcon
                                                                            fontSize="medium"
                                                                            sx={{transform: "rotate(-45deg)", color: theme => theme.palette.primary.dark, fontWeight: "bolder", ml: 2}}
                                                                        />
                                                                        } */}
                                                                        
                                                                    </Box>
                                                                    <Box
                                                                        sx={{
                                                                            display: "flex",
                                                                            justifyContent: "flex-start",
                                                                            alignItems: "center",
                                                                            ml: {xs: 0, sm: 2}
                                                                        }}
                                                                    >
                                                                        <Typography
                                                                            variant="body2"
                                                                            component="span"
                                                                            sx={{fontWeight: "bolder", mb: -0.5, mr: {xs: 1, sm: 2}}}
                                                                        >
                                                                            Precio:
                                                                        </Typography>

                                                                        <Typography
                                                                            variant="h6"
                                                                            component="span"
                                                                            sx={(theme) => ({
                                                                                fontWeight: "bolder",
                                                                                color: theme.palette.error.main,
                                                                                mb: -0.5,
                                                                            })}
                                                                        >
                                                                            ${plan.unitPrice}
                                                                        </Typography>   
                                                                    </Box>  
                                                                </Box>
                                                            </StyledGrid>
                                                            ))}     


                                                        </StyledGrid>
                                                    </Box>
                                                </CardContent>
                                            </StyledCard>
                                        </StyledGrid>
                                        :
                                        ""
                                        }
                                        <StyledGrid item xs={12} sm={6} md={4} sx={{display: "flex", alignItems: "flex-end", justifyContent: "center"}}>
                                            <Box sx={{width: "100%"}}>
                                                <Box sx={{mb: 2.5}}>
                                                    <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center", p: 1, borderTop: theme => `2px dashed ${theme.palette.grey["400"]}`}}>
                                                        <Typography component="span" sx={{typography: {xs: "h5", md: "h5"}}} style={{fontWeight: "bolder"}}>Precio paquete: </Typography>

                                                        <Typography component="span" sx={{typography: {xs: "h4", md: "h5"}}} style={{fontWeight: "bolder"}}>${selectedPlans.reduce((a, b) => a + (b.comboPrice || b.unitPrice), 0)}/mes</Typography>
                                                    </Box>

                                                    <Hidden mdUp>
                                                        <Typography sx={{textAlign: "right"}} variant="body2">Impuestos Incluidos</Typography>
                                                    </Hidden>
                                                </Box>
                                                <StyledButton variant="contained" sx={{typography: "body2", width: "100%", m: 0}} onClick={() => isLogged ? handleShoppingCart() : navigate("/login")}>
                                                    {"Lo quiero >"}
                                                </StyledButton>
                                            </Box>
                                        </StyledGrid>
                                    </StyledGrid>
                                    
                                    <StyledGrid container>
                                        <StyledGrid item xs={12} sm={4}>
                                            <StyledButton className="button-outlined" color="info" variant="outlined" sx={{typography: "body2", width: "100%", m: 0}} onClick={() => navigate("/servicios-hogar-planes")}>
                                                Volver
                                            </StyledButton>
                                        </StyledGrid>
                                    </StyledGrid>
                                </CardContent>
                            </StyledCard>
                        </StyledGrid>
                    </StyledGrid>
                </StyledContainer>
            </Box>
        </Fade>
    );
}
export default HomeServicesPlansQuote;
