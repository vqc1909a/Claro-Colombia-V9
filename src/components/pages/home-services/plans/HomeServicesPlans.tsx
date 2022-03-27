import React from "react";
import {useState, useEffect} from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Link from "@mui/material/Link";
import Hidden from "@mui/material/Hidden";
import Tab from "@mui/material/Tab";
import NetworkCheckOutlinedIcon from "@mui/icons-material/NetworkCheckOutlined";
import DesktopWindowsOutlinedIcon from "@mui/icons-material/DesktopWindowsOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined";
import Fade from "@mui/material/Fade";
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

//! Icons
import MaximizeOutlinedIcon from "@mui/icons-material/MaximizeOutlined";
import CloseIcon from '@mui/icons-material/Close';

// import axios from "axios";

//!Mui Components
import StyledContainer from "components/StyledUi/StyledContainer";
import StyledGrid from "components/StyledUi/StyledGrid";
import StyledTabs from "components/StyledUi/StyledTabs";
import StyledTabsMobile from "components/StyledUi/StyledTabsMobile";
import StyledButton from "components/StyledUi/StyledButton";


//!Layouts
import HomeServicesHeader from "../HomeServicesHeader";
import HomeServicesPlansCardOne from "./HomeServicesPlansCardOne";
import HomeServicesPlansCardTwo from "./HomeServicesPlansCardTwo";
import HomeServicesPlansTabHeader from "./HomeServicesPlansTabHeader";

//!Widgets
import LoaderPage from "components/widgets/LoaderPage";

//!Hooks
import useScrollToTop from "utils/hooks/useScrollToTop";

//!Interfaces
import {TabPanelProps, Plan} from "./interfaces";

//! React Router Dom
import {Link as RouterLink, useNavigate} from "react-router-dom";

//! Services
import {getPlans} from "api/services/home-services-plans";

//! React Redux
import useAppDispatch from "utils/hooks/useAppDispatch";
import useAppSelector from "utils/hooks/useAppSelector";

//! Actions
import * as PLANS_ACTIONS from "redux/actions/homeServicesPlans";
import * as CART_ACTIONS from "redux/actions/cart";


//! Selectors
import * as PLANS_SELECTORS from "redux/selectors/homeServicesPlans";

const TabPanel = (props: TabPanelProps) => {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{py: 3}}>{children}</Box>}
        </div>
    );
};

const a11yProps = (index: number) => {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
};

function HomeServicesPlans() {
   
    const [value, setValue] = useState(0);
    // const [plans, setPlans] = useState<Plan[] | any[]>([]);
    const navigate = useNavigate();
    const plans = useAppSelector(PLANS_SELECTORS.selectPlans);
    const isLoading = useAppSelector(PLANS_SELECTORS.selectIsLoading);

    const dispatch = useAppDispatch();

    const handleChange = (
        event: React.SyntheticEvent,
        newValue: number
    ): void => {
        setValue(newValue);
    };
   
    //! Functions
    const handleResetPlans = () => {
        dispatch(PLANS_ACTIONS.RESET_SELECTED_HOME_SERVICES_PLANS_ACTION({}));
        dispatch(CART_ACTIONS.RESET_CART_ACTION({}));
    }

    const handleQuoteSummary = () => {
        sessionStorage.setItem("homeServicesPlans", JSON.stringify(plans));
        navigate("/servicios-hogar-cotizacion")
    }

    //! Effects
    useScrollToTop();

    //!Conseguir todos los planes
    useEffect((): any => {
        if (plans.length) return null;
        (async () => {
            try{
                dispatch(PLANS_ACTIONS.GET_HOME_SERVICES_PLANS_REQUEST_ACTION({}))
                const {data} = await getPlans();
                const plans: Plan[] = data;
                const newPlans = plans.map(plan => ({...plan, isSelected: false}))  
                dispatch(PLANS_ACTIONS.GET_HOME_SERVICES_PLANS_SUCCESS_ACTION(newPlans))
            }catch(err: any){
                const {data} = err.response;
                dispatch(PLANS_ACTIONS.GET_HOME_SERVICES_PLANS_ERROR_ACTION({message: data}));
            }
        })();
        //eslint-disable-next-line
    }, []);

    //!Actualizar los planes seleccionados
    useEffect((): any => {
        const selectedPlans = plans.filter(plan => plan.isSelected);
        dispatch(PLANS_ACTIONS.GET_SELECTED_HOME_SERVICES_PLANS_ACTION(selectedPlans));
        //eslint-disable-next-line
    }, [plans])

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
                        <StyledGrid item xs={12} md={6}>
                            {/* <Box pt={{ xs: 0, md: 12 }}> */}
                            <HomeServicesHeader></HomeServicesHeader>
                            {/* </Box> */}
                        </StyledGrid>
                        <StyledGrid item xs={12} md={6}></StyledGrid>

                        <StyledContainer style={{padding: 0, maxWidth: "1000px"}}>

                            {/* Suggestions Section */}
                            <Card
                                variant="outlined"
                                sx={{
                                    textAlign: "center",
                                    p: 2,
                                    mb: 4,
                                    mx: {xs: 2, sm: 0},
                                }}
                            >
                                <Typography variant="body2">
                                    <Hidden mdDown>
                                        Selecciona el plan que deseas y verás el
                                        precio acumulado de tu paquete en la{" "}
                                        <Box
                                            component="span"
                                            fontWeight="bolder"
                                        >
                                            parte inferior de la pantalla.
                                        </Box>
                                        <br />
                                    </Hidden>
                                    Los precios mostrados son en base al
                                    municipio{" "}
                                    <Box component="span" fontWeight="bolder">
                                        Bogotá, Estrato3
                                    </Box>{" "}
                                    seleccionado{" "}
                                    <Link component={RouterLink} to="/servicios-hogar-direccion" sx={{color: theme => theme.palette.info.main, fontWeight: "bolder"}}>
                                        Cambiar mis datos de ubicación
                                    </Link>
                                </Typography>
                            </Card>
                            <Hidden smUp>
                                <Typography variant="body2" textAlign="center">
                                    Selecciona el plan que deseas y verás el
                                    precio acumulado de tu paquete en la{" "}
                                    <Box
                                        component="span"
                                        sx={{fontWeight: "bolder"}}
                                    >
                                        parte inferior de la pantalla.
                                    </Box>
                                </Typography>
                            </Hidden>

                            {/* Planes Tabs Desktop */}
                            <Box sx={{width: "100%", mt: 2, mb: 12}}>
                                {/* Tabs Header */}
                                <Hidden smDown>
                                    <StyledTabs
                                        value={value}
                                        onChange={handleChange}
                                        aria-label="basic tabs example"
                                        variant="fullWidth"
                                    >
                                        <Tab
                                            icon={<NetworkCheckOutlinedIcon />}
                                            iconPosition="start"
                                            label="Internet"
                                            {...a11yProps(0)}
                                        />
                                        <Tab
                                            icon={
                                                <DesktopWindowsOutlinedIcon />
                                            }
                                            iconPosition="start"
                                            label="Televisión"
                                            {...a11yProps(1)}
                                        />
                                        <Tab
                                            icon={<LocalPhoneOutlinedIcon />}
                                            iconPosition="start"
                                            label="Telefonía"
                                            {...a11yProps(2)}
                                        />
                                        <Tab
                                            icon={<LocalHospitalOutlinedIcon />}
                                            iconPosition="start"
                                            label="Adicionales para tu hogar"
                                            {...a11yProps(3)}
                                        />
                                    </StyledTabs>
                                </Hidden>
                                {/* Tabs Content - Internet Plans */}
                                <TabPanel value={value} index={0}>
                                    <HomeServicesPlansTabHeader title="de internet"></HomeServicesPlansTabHeader>                                   
                                    <StyledGrid
                                        container
                                        spacing={2}
                                        sx={{px: {xs: 4, sm: 2, md: 0}}}
                                    >
                                        {!isLoading ? (
                                            plans.filter((plan) => plan.category === "internet").map((item) => (
                                                <HomeServicesPlansCardOne
                                                    key={item._id}
                                                    item={item}
                                                    // setPlans={setPlans}
                                                ></HomeServicesPlansCardOne>
                                            ))
                                        ) : (
                                            <LoaderPage></LoaderPage>
                                        )}
                                    </StyledGrid>
                                </TabPanel>
                                {/* Tabs Content - Televisión Plans */}
                                <TabPanel value={value} index={1}>
                                    <HomeServicesPlansTabHeader title="de televisión"></HomeServicesPlansTabHeader>
                                    <StyledGrid
                                        container
                                        spacing={2}
                                        sx={{px: {xs: 4, sm: 2, md: 0}}}
                                    >
                                        {!isLoading ? (
                                            plans.filter((plan) => plan.category === "television").map((item) => (
                                                <HomeServicesPlansCardOne
                                                    key={item._id}
                                                    item={item}
                                                    // setPlans={setPlans}
                                                ></HomeServicesPlansCardOne>
                                            ))
                                        ) : (
                                            <LoaderPage></LoaderPage>
                                        )}
                                    </StyledGrid>
                                </TabPanel>
                                {/* Tabs Content - Telefonía Plans */}
                                <TabPanel value={value} index={2}>
                                    <HomeServicesPlansTabHeader title="de telefonía"></HomeServicesPlansTabHeader>
                                    <StyledGrid
                                        container
                                        spacing={2}
                                        sx={{px: {xs: 4, sm: 2, md: 0}}}
                                    >
                                        {!isLoading ? (
                                            plans.filter((plan) => plan.category === "telefonia").map((item) => (
                                                <HomeServicesPlansCardOne
                                                    key={item._id}
                                                    item={item}
                                                    // setPlans={setPlans}
                                                ></HomeServicesPlansCardOne>
                                            ))
                                        ) : (
                                            <LoaderPage></LoaderPage>
                                        )}
                                    </StyledGrid>
                                </TabPanel>
                                {/* Tabs Content - Adicionales Plans */}
                                <TabPanel value={value} index={3}>
                                    <HomeServicesPlansTabHeader title="adicionales para tu hogar"></HomeServicesPlansTabHeader>
                                    <StyledGrid
                                        container
                                        spacing={2}
                                        sx={{px: {xs: 3, sm: 0}}}
                                    >
                                        {!isLoading ? (
                                            plans.filter((plan) => plan.category === "adicionales").map((item) => (
                                                <HomeServicesPlansCardTwo
                                                    key={item._id}
                                                    item={item}
                                                    // setPlans={setPlans}
                                                ></HomeServicesPlansCardTwo>
                                            ))
                                        ) : (
                                            <LoaderPage></LoaderPage>
                                        )}
                                    </StyledGrid>
                                </TabPanel>
                            </Box>
                        </StyledContainer>
                    </StyledGrid>
                </StyledContainer>

               
                <Box sx={{ position: "sticky", bottom: 0}}> 
                    {/* Planes Tabs Mobile */}                       
                    <Hidden smUp>
                        <StyledTabsMobile
                            value={value}
                            onChange={handleChange}
                            aria-label="basic tabs example"
                            variant="fullWidth"
                        >
                            <Tab
                                icon={<NetworkCheckOutlinedIcon />}
                                label="Internet"
                                {...a11yProps(0)}
                            />
                            <Tab
                                icon={<DesktopWindowsOutlinedIcon />}
                                label="Televisión"
                                {...a11yProps(1)}
                            />
                            <Tab
                                icon={<LocalPhoneOutlinedIcon />}
                                label="Telefonía"
                                {...a11yProps(2)}
                            />
                            <Tab
                                icon={<LocalHospitalOutlinedIcon />}
                                label="Adicionales"
                                {...a11yProps(3)}
                            />
                        </StyledTabsMobile>
                    </Hidden>     
                    {/* Quote Summary Tab */}
                    {plans.filter(plan => plan.isSelected).length
                     ?
                    <Toolbar sx={{background: "black", color: "white", position: "sticky", bottom: 0, padding: theme => theme.spacing(1)}}>
                        <StyledGrid container spacing={1}>
                            <StyledGrid item xs={6} md={5}>
                                <Typography variant="body2">
                                    Plan de {plans.filter(plan => plan.isSelected).map(plan => `${plan.category.charAt(0).toUpperCase()}${plan.category.slice(1)} ${plan.plan} + `)}    
                                </Typography>
                            </StyledGrid>
                            <StyledGrid item xs={6} md={2}>
                                <Box sx={{display: "flex", alignItems: "center", justifyContent: "flex-start", height: "100%"}}>
                                    <MaximizeOutlinedIcon
                                        fontSize="large"
                                        sx={{
                                            transform: "rotate(-90deg)",
                                            mr: "-1rem",
                                            // ml: "2rem",
                                            color: "white"
                                        }}
                                    ></MaximizeOutlinedIcon>
                                    <Box>
                                        <Hidden mdUp>
                                            <Typography variant="body2">Precio cotización</Typography>
                                            <Typography variant="h5"><Box component="span" sx={{fontWeight: "bolder"}}>${plans.filter(plan => plan.isSelected).reduce((a, b) => a + (b.comboPrice || b.unitPrice), 0)}</Box>/mes</Typography>
                                        </Hidden>
                                        <Hidden mdDown>
                                            <Typography variant="body1">Precio cotización</Typography>
                                            <Typography variant="h4"><Box component="span" sx={{fontWeight: "bolder"}}>${plans.filter(plan => plan.isSelected).reduce((a, b) => a + (b.comboPrice || b.unitPrice), 0)}</Box>/mes</Typography>
                                        </Hidden>
                                    </Box>
                                </Box>
                            </StyledGrid>
                            <StyledGrid item xs={12} md={5}>
                                <Box sx={{display: "flex", alignItems: "center", justifyContent: "center", height: "100%", flexDirection: {xs: "column", sm: "row"}, mb: {xs: 1, sm: 0}}}>
                                    <StyledButton variant="contained" sx={{typography: "body2"}} onClick={() => handleQuoteSummary()}>Ver Resumen de Cotización</StyledButton>

                                    <Button variant="text" sx={{typography: "body2", color: theme => theme.palette.common.white, textTransform: "capitalize", marginLeft: {xs: 0, sm: 2}}} startIcon={<CloseIcon />} onClick={handleResetPlans}>Borrar Todos</Button>
                                </Box>
                            </StyledGrid>
                        </StyledGrid>                               
                    </Toolbar>     
                    :
                    ""
                    }
                                
                </Box>
                  

               
            </Box>
        </Fade>
    );
}
export default HomeServicesPlans;
