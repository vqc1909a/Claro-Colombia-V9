import React from "react";
import { useState, useEffect} from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Link from "@mui/material/Link";
import Hidden from "@mui/material/Hidden";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { styled } from "@mui/material/styles";
import NetworkCheckOutlinedIcon from "@mui/icons-material/NetworkCheckOutlined";
import DesktopWindowsOutlinedIcon from "@mui/icons-material/DesktopWindowsOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined";
import axios from "axios";

//!Layouts
import HomeServicesHeader from "../HomeServicesHeader";
import HomeServicesPlansCardOne from "./HomeServicesPlansCardOne";
import HomeServicesPlansCardTwo from "./HomeServicesPlansCardTwo";

//!Widgets
import LoaderPage from "components/widgets/loader-page";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ py: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
};

const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
};





function HomeServicesPlans(){

  interface Plan {
    subcategory: string,
    image: string,
    idImage: string,
    benefits: string[],
    comboPrice: number,
    isActive: boolean,
    _id: string,
    category: string,
    plan: string,
    unitPrice: number,
    createdAt: string,
    updatedAt: string
  }

  const [value, setValue] = useState(0);
  const [internetPlans, setInternetPlans] = useState<Plan[]>([]);
  const [tvPlans, setTvPlans] = useState<Plan[]>([]);
  const [telephonyPlans, setTelephonyPlans] = useState<Plan[]>([]);
  const [additionalPlans, setAdditionalPlans] = useState<Plan[]>([]);

  const handleChange = (event: React.SyntheticEvent, newValue: number): void => {
    setValue(newValue);
  };

  const StyledTabs = styled(Tabs)(({ theme }) => ({
    borderBottom: `2px solid ${theme.palette.grey["500"]}`,
    " .MuiTabs-indicator": {
      height: "7px"
    },
    " .MuiButtonBase-root": {
      padding: 0,
      paddingBottom: theme.spacing(1.5),
      paddingTop: theme.spacing(1.5),
      textTransform: "capitalize",
      fontSize: theme.spacing(2.5),
      minHeight: "initial",
      fontWeight: "bolder"
    },
    " .Mui-selected": {
      color: `${theme.palette.secondary.dark} !important`
    }
  }));

  const StyledTabsSmall = styled(Tabs)(({ theme }) => ({
    backgroundColor: theme.palette.common.white,
    borderBottom: "none",
    borderTop: `2px solid ${theme.palette.grey["500"]}`,
    position: "sticky",
    bottom: 0,
    " .MuiTabs-indicator": {
      height: "7px",
      position: "absolute",
      top: 0
    },
    " .MuiButtonBase-root": {
      padding: 0,
      paddingBottom: theme.spacing(1.5),
      paddingTop: theme.spacing(1.5),
      textTransform: "capitalize",
      fontSize: theme.spacing(2),
      minHeight: "initial",
      fontWeight: "bolder"
    },
    " .Mui-selected": {
      color: `${theme.palette.secondary.dark} !important`
    }
  }));

  
  useEffect(() => {
    const getHomeServicesPlans = async () => {
      const res = await axios.get("https://claroco-api-rest.herokuapp.com/servicios-hogar-planes");
      const plans: Plan[] = res.data;

      setInternetPlans([...plans.filter(plan => plan.category === "internet" && plan.isActive)]);
      setTvPlans([...plans.filter(plan => plan.category === "television" && plan.isActive)]);
      setTelephonyPlans([...plans.filter(plan => plan.category === "telefonia" && plan.isActive)]);
      setAdditionalPlans([...plans.filter(plan => plan.category === "adicionales" && plan.isActive)])
    }
    getHomeServicesPlans();
  }, []);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "white",
        backgroundImage: "url('images/home-services/clarohogar.jpg')",
        backgroundPosition: "right top",
        backgroundSize: { xs: "43% 120px", sm: "50% 170px", md: "40% 260px" },
        backgroundRepeat: "no-repeat"
      }}
    >
      <Container>
        <Grid container spacing={0}>
          <Grid item xs={12} md={6}>
            {/* <Box pt={{ xs: 0, md: 12 }}> */}
              <HomeServicesHeader></HomeServicesHeader>
            {/* </Box> */}
          </Grid>
          <Grid item xs={12} md={6}></Grid>

          <Container style={{padding: 0, maxWidth: "900px"}} >
            <Card
              variant="outlined"
              sx={{ textAlign: "center", p: 2, mb: 4, mx: { xs: 2, sm: 0 } }}
            >
              <Typography variant="body2">
                <Hidden mdDown>
                  Selecciona el plan que deseas y verás el precio acumulado de
                  tu paquete en la{" "}
                  <Box component="span" fontWeight="bolder">
                    parte inferior de la pantalla.
                  </Box>
                  <br />
                </Hidden>
                Los precios mostrados son en base al municipio{" "}
                <Box component="span" fontWeight="bolder">
                  Bogotá, Estrato3
                </Box>{" "}
                seleccionado{" "}
                <Link href="#">Cambiar mis datos de ubicación</Link>
              </Typography>
            </Card>
            <Hidden smUp>
              <Typography variant="body2" textAlign="center">
                Selecciona el plan que deseas y verás el precio acumulado de tu
                paquete en la{" "}
                <Box component="span" sx={{ fontWeight: "bolder" }}>
                  parte inferior de la pantalla.
                </Box>
              </Typography>
            </Hidden>
            {/* Tabs */}
            <Box sx={{ width: "100%", mt: 2, mb: 12 }}>
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
                    icon={<DesktopWindowsOutlinedIcon />}
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
              <TabPanel value={value} index={0}>
                <Box
                  component="p"
                  sx={{
                    typography: {xs: "body1", sm: "h6"},
                    mb: {xs: 1, sm: 3},
                    mt: 0,
                    textAlign: { xs: "center", sm: "initial" }
                  }}
                  style={{fontWeight: "bolder"}}
                >
                  Te ofrecemos los siguientes planes de internet:
                </Box>
                <Grid container spacing={2} sx={{px: {xs: 6, sm: 3, md: 0}}}>
                  {internetPlans.length
                    ?
                    internetPlans.map((item) => (
                      <HomeServicesPlansCardOne
                        key={item._id}
                        item={item}
                      ></HomeServicesPlansCardOne>
                    ))                  
                    : 
                    <LoaderPage></LoaderPage>
                  }
                </Grid>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Box
                  component="p"
                  sx={{
                    typography: {xs: "body1", sm: "h6"},
                    mb: {xs: 1, sm: 3},
                    mt: 0,
                    textAlign: { xs: "center", sm: "initial" }
                  }}
                  style={{fontWeight: "bolder"}}
                >
                  Te ofrecemos los siguientes planes de televisión:
                </Box>
                <Grid container spacing={2} sx={{px: {xs: 6, sm: 3, md: 0}}}>
                  {tvPlans.length
                    ?
                    tvPlans.map((item) => (
                      <HomeServicesPlansCardOne
                        key={item._id}
                        item={item}
                      ></HomeServicesPlansCardOne>
                    ))
                    :
                    <LoaderPage></LoaderPage>                
                  }
                </Grid>
              </TabPanel>
              <TabPanel value={value} index={2}>
                <Box
                  component="p"
                  sx={{
                    typography: {xs: "body1", sm: "h6"},
                    mb: {xs: 1, sm: 3},
                    mt: 0,
                    textAlign: { xs: "center", sm: "initial" }
                  }}
                  style={{fontWeight: "bolder"}}
                >
                  Te ofrecemos los siguientes planes de telefonía:
                </Box>
                <Grid container spacing={2} sx={{px: {xs: 6, sm: 3, md: 0}}}>
                  {
                    telephonyPlans.length
                    ?
                    telephonyPlans.map((item) => (
                      <HomeServicesPlansCardOne
                        key={item._id}
                        item={item}
                      ></HomeServicesPlansCardOne>
                    ))
                    :
                    <LoaderPage></LoaderPage>
                  }
                </Grid>
              </TabPanel>
              <TabPanel value={value} index={3}>
                <Box
                  component="p"
                  sx={{
                    typography: {xs: "body1", sm: "h6"},
                    mb: {xs: 2, sm: 3},
                    mt: 0,
                    textAlign: { xs: "center", sm: "initial" }
                  }}
                  style={{fontWeight: "bolder"}}
                >
                  Te ofrecemos los siguientes planes adicionales para tu hogar:
                </Box>
                <Grid container spacing={2} sx={{px: {xs: 3, sm: 0}}}>
                  {additionalPlans.length
                    ?
                    additionalPlans.map((item) => (
                      <HomeServicesPlansCardTwo
                        key={item._id}
                        item={item}
                      ></HomeServicesPlansCardTwo>
                    ))
                    :
                    <LoaderPage></LoaderPage>
                  }
                </Grid>
              </TabPanel>
            </Box>
          </Container>
        </Grid>
      </Container>

      {/* Tabs Small */}
      <Hidden smUp>
        <StyledTabsSmall
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
        </StyledTabsSmall>
      </Hidden>
    </Box>
  );
}
export default HomeServicesPlans;
