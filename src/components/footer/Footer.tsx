import {useState} from "react";

//!Material UI Components
import Hidden from "@mui/material/Hidden";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Link from "@mui/material/Link";

//!Icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

//!StyledUI
import StyledContainer from "components/StyledUi/StyledContainer";
import StyledGrid from "components/StyledUi/StyledGrid";
import StyledListItemText from "components/StyledUi/StyledListItemText";
import StyledImage from "components/StyledUi/StyledImage";
import StyledFooter from "components/StyledUi/StyledFooter";

//! React Router dom
import {Link as RouterLink} from "react-router-dom";

//!Uuids
import { v4 as uuid } from 'uuid';

//!React Router Dom
import {useLocation} from  "react-router-dom";

//!Interfaces
import {CategoryState} from "./interfaces";

//! Categories 
const GeneralCategories =  {
    _id: uuid(),
    label: "Categorías",
    icon: "MenuIcon",
    isActive: true,
    subCategories: [
        {
            link: "",
            label: "Celulares",
        },
        {
            link: "",
            label: "Tecnología",
        },
        {
            link: "",
            label: "Servicios Móviles",
        },
        {
            link: "",
            label: "Servicios Hogar",
        },
        {
            link: "",
            label: "Soporte",
        },
    ],
}

const Categories = [
    {
        _id: uuid(),
        label: "Celulares",
        icon: "PhoneIphoneIcon",
        isActive: true,
        subCategories: [
            {
                link: "",
                label: "Celulares en Prepago",
            },
            {
                link: "",
                label: "Renueva tu equipo",
            },
        ],
    },
    {
        _id: uuid(),
        label: "Tecnología",
        icon: "DevicesIcon",
        isActive: true,
        subCategories: [
            {
                link: "",
                label: "Videojuegos",
            },
            {
                link: "",
                label: "Televisores",
            },
            {
                link: "",
                label: "Computadoras",
            },
            {
                link: "",
                label: "SmartWatch",
            },
            {
                link: "",
                label: "Internet de las cosas",
            },
        ],
    },
    {
        _id: uuid(),
        label: "Servicios Móviles",
        icon: "MobileFriendlyIcon",
        isActive: true,
        subCategories: [
            {
                link: "",
                label: "Cámbiate a Claro Prepago",
            },
            {
                link: "",
                label: "Cámbiate a Claro Postpago",
            },
            {
                link: "",
                label: "Portal de Pagos y Recargas",
            },
        ],
    },
    {
        _id: uuid(),
        label: "Servicios Hogar",
        icon: "HomeOutlinedIcon",
        isActive: true,
        subCategories: [
            {
                link: "",
                label: "Arma Tu Play",
            },
            {
                link: "",
                label: "Paga tu Factura Hogar",
            },
        ],
    },
    {
        _id: uuid(),
        label: "Soporte",
        icon: "",
        isActive: true,
        subCategories: [
            {
                link: "",
                label: "Anexo 2 IMEI",
            },
            {
                link: "",
                label: "Guía de Equipos",
            },
            {
                link: "",
                label: "Derecho de Retracto",
            },
            {
                link: "",
                label: "Preguntas Frecuentes",
            },
            {
                link: "",
                label: "Tiendas",
            },
        ],
    },
];

const TotalCategories = [GeneralCategories, ...Categories].map(category => ({...category, status: false}))


function Footer() {
    const [categories, setCategories] = useState<CategoryState[]>(() => TotalCategories);
    
    let {pathname} = useLocation();
   
    //!Functions
    const handleCategories = (_id: string): void => {
        const newCategories = categories.map((page) => page._id === _id ? {...page, status: !page.status} : {...page, status: false})
        setCategories(newCategories)
    }

    //!No mostrar el Header si el pathanme es tal
    if (pathname === "/cart/security/welcome" || pathname=== "/cart/installation-schedule/successful" ){
        return null;
    }

    return (
        <>
            {/* Footer Top Mobile */}
            <Hidden smUp>
                <List
                    sx={{
                        width: "100%",
                        bgcolor: (theme) => theme.palette.grey["300"],
                        py: 3,
                    }}
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                    // subheader={
                    //   <ListSubheader component="div" id="nested-list-subheader">
                    //     Persona
                    //   </ListSubheader>
                    // }
                >
                    {/* Items Nav Footer Mobile */}
                    {categories.slice(1).map((page) => (
                        <Box key={page._id}>
                            <ListItemButton
                                
                                onClick={() => handleCategories(page._id)}
                            >
                                <StyledListItemText primary={page.label} />
                                {page.status ? <ExpandLess /> : <ExpandMore />}
                            </ListItemButton>
                            <Collapse
                                in={page.status}
                                timeout="auto"
                                unmountOnExit
                            >
                                <List component="div" disablePadding>
                                    {page.subCategories.map((subCategory) => (
                                        <ListItemButton
                                            key={subCategory.label}
                                            sx={{pl: 4}}
                                        >
                                            <ListItemText
                                                primary={subCategory.label}
                                            />
                                        </ListItemButton>
                                    ))}
                                </List>
                            </Collapse>
                        </Box>
                    ))}

                    {/* Redes Sociales */}
                    <ListItemButton>
                        <StyledListItemText primary="Redes Sociales" />
                    </ListItemButton>
                    <Box sx={{display: "flex", px: 2}}>
                        <Link href="#" underline="none" sx={{mr: 0.5}}>
                            <FacebookIcon
                                fontSize="large"
                                sx={{
                                    color: (theme) => theme.palette.grey["800"],
                                }}
                            ></FacebookIcon>
                        </Link>
                        <Link href="#" underline="none" sx={{mr: 0.5}}>
                            <InstagramIcon
                                fontSize="large"
                                sx={{
                                    color: (theme) => theme.palette.grey["800"],
                                }}
                            ></InstagramIcon>
                        </Link>
                        <Link href="#" underline="none" sx={{mr: 0.5}}>
                            <TwitterIcon
                                fontSize="large"
                                sx={{
                                    color: (theme) => theme.palette.grey["800"],
                                }}
                            ></TwitterIcon>
                        </Link>
                        <Link href="#" underline="none" sx={{mr: 0.5}}>
                            <YouTubeIcon
                                fontSize="large"
                                sx={{
                                    color: (theme) => theme.palette.grey["800"],
                                }}
                            ></YouTubeIcon>
                        </Link>
                    </Box>
                </List>
            </Hidden>
            <StyledFooter>
                {/* Footer Top */}
                <Hidden smDown>
                    <StyledContainer maxWidth={false}>
                        <StyledGrid
                            container
                            spacing={2}
                            className="footer__top"
                        >
                            {/* Celulares */}
                            <StyledGrid item xs={12} sm={4} md>
                                <Typography
                                    variant="subtitle1"
                                    fontWeight="bolder"
                                >
                                    Celulares
                                </Typography>
                                <List component="ul" disablePadding>
                                    {categories.find(page => page.label === "Celulares")?.subCategories.map(subCategory => (
                                        <Link component={RouterLink} to="" underline="hover" color="inherit" key={subCategory.label}>
                                            <Typography
                                                variant="body2"
                                                sx={{mb: 0.5}}
                                            >
                                                {subCategory.label}
                                            </Typography>
                                        </Link>
                                    ))}
                                </List>
                            </StyledGrid>
                            {/* Tecnología */}
                            <StyledGrid item xs={12} sm={4} md>
                                <Typography
                                    variant="subtitle1"
                                    fontWeight="bolder"
                                >
                                    Tecnología
                                </Typography>
                                <List component="ul" disablePadding>
                                    {categories.find(page => page.label === "Tecnología")?.subCategories.map(subCategory => (
                                        <Link component={RouterLink} to="" underline="hover" color="inherit" key={subCategory.label}>
                                            <Typography
                                                variant="body2"
                                                sx={{mb: 0.5}}
                                            >
                                                {subCategory.label}
                                            </Typography>
                                        </Link>
                                    ))}
                                </List>
                            </StyledGrid>
                            {/* Servicios Móviles */}
                            <StyledGrid item xs={12} sm={4} md>
                                <Typography
                                    variant="subtitle1"
                                    fontWeight="bolder"
                                >
                                    Servicios Móviles
                                </Typography>
                                <List component="ul" disablePadding>
                                    {categories.find(page => page.label === "Servicios Móviles")?.subCategories.map(subCategory => (
                                        <Link component={RouterLink} to="" underline="hover" color="inherit" key={subCategory.label}>
                                            <Typography
                                                variant="body2"
                                                sx={{mb: 0.5}}
                                            >
                                                {subCategory.label}
                                            </Typography>
                                        </Link>
                                    ))}
                                </List>
                            </StyledGrid>
                            {/* Servicios Hogar */}
                            <StyledGrid item xs={12} sm={4} md>
                                <Typography
                                    variant="subtitle1"
                                    fontWeight="bolder"
                                >
                                    Servicios Hogar
                                </Typography>
                                <List component="ul" disablePadding>
                                    {categories.find(page => page.label === "Servicios Hogar")?.subCategories.map(subCategory => (
                                        <Link component={RouterLink} to="" underline="hover" color="inherit" key={subCategory.label}>
                                            <Typography
                                                variant="body2"
                                                sx={{mb: 0.5}}
                                            >
                                                {subCategory.label}
                                            </Typography>
                                        </Link>
                                    ))}
                                </List>
                            </StyledGrid>
                            {/* Soporte y Medios de Pago */}
                            <StyledGrid item xs={12} sm={4} md>
                                <Box sx={{mb: 2}}>
                                    <Typography
                                        variant="subtitle1"
                                        fontWeight="bolder"
                                    >
                                        Soporte
                                    </Typography>
                                    <List component="ul" disablePadding>
                                        {categories.find(page => page.label === "Soporte")?.subCategories.map(subCategory => (
                                            <Link component={RouterLink} to="" underline="hover" color="inherit" key={subCategory.label}>
                                                <Typography
                                                    variant="body2"
                                                    sx={{mb: 0.5}}
                                                >
                                                    {subCategory.label}
                                                </Typography>
                                            </Link>
                                        ))}
                                    </List>
                                </Box>
                                <Box>
                                    <Typography
                                        variant="subtitle1"
                                        fontWeight="bolder"
                                    >
                                        Medios de Pago
                                    </Typography>
                                    <Link component={RouterLink} to="" underline="none" >
                                        <StyledImage
                                            src={`images/footer/mediosdepago.png`}
                                            alt={`medios-de-pago`}
                                            loading="lazy"
                                        />
                                    </Link>
                                </Box>
                            </StyledGrid>
                            {/* Redes Sociales */}
                            <StyledGrid item xs={12} sm={4} md={12}>
                                <Typography
                                    variant="subtitle1"
                                    fontWeight="bolder"
                                >
                                    Redes Sociales
                                </Typography>
                                <Box sx={{display: "flex"}}>
                                    <Link
                                        href="#"
                                        underline="none"
                                        sx={{mr: 0.5}}
                                    >
                                        <FacebookIcon
                                            fontSize="large"
                                            sx={{
                                                color: (theme) =>
                                                    theme.palette.grey["800"],
                                            }}
                                        ></FacebookIcon>
                                    </Link>
                                    <Link
                                        href="#"
                                        underline="none"
                                        sx={{mr: 0.5}}
                                    >
                                        <InstagramIcon
                                            fontSize="large"
                                            sx={{
                                                color: (theme) =>
                                                    theme.palette.grey["800"],
                                            }}
                                        ></InstagramIcon>
                                    </Link>
                                    <Link
                                        href="#"
                                        underline="none"
                                        sx={{mr: 0.5}}
                                    >
                                        <TwitterIcon
                                            fontSize="large"
                                            sx={{
                                                color: (theme) =>
                                                    theme.palette.grey["800"],
                                            }}
                                        ></TwitterIcon>
                                    </Link>
                                    <Link
                                        href="#"
                                        underline="none"
                                        sx={{mr: 0.5}}
                                    >
                                        <YouTubeIcon
                                            fontSize="large"
                                            sx={{
                                                color: (theme) =>
                                                    theme.palette.grey["800"],
                                            }}
                                        ></YouTubeIcon>
                                    </Link>
                                </Box>
                            </StyledGrid>
                        </StyledGrid>
                    </StyledContainer>
                </Hidden>

                {/* Footer-Bottom */}
                <StyledGrid container className="footer__bottom">
                    <StyledContainer maxWidth={false}>
                        <Box>
                            <Box className="footer__logo"
                            >
                                <Link component={RouterLink} to="" underline="none">
                                    <StyledImage
                                        src={`icons/claroperulogo.svg`}
                                        alt={`claro-peru-logo`}
                                        loading="lazy"
                                    ></StyledImage>
                                </Link>
                            </Box>
                            <Typography
                                variant="body2"
                                sx={{
                                    mb: {xs: 1, sm: 0},
                                    textAlign: "center",
                                    color: (theme) => theme.palette.grey["500"],
                                }}
                            >
                                Todos los derechos reservados, Claro 2021
                            </Typography>
                        </Box>

                        <Link href="#" underline="hover" color="info.light">
                            Legal y Regulatorio
                        </Link>
                    </StyledContainer>
                </StyledGrid>
            </StyledFooter>
        </>
    );
}
export default Footer;
