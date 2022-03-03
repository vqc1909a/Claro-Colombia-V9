import {useState, Fragment} from "react";
import {styled} from "@mui/material/styles";

import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import Link from "@mui/material/Link";
import Grow from "@mui/material/Grow";
import InputBase from "@mui/material/InputBase";
import Hidden from "@mui/material/Hidden";
import ListItemButton from "@mui/material/ListItemButton";

//! Icons
import MenuIcon from "@mui/icons-material/Menu";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import DevicesIcon from "@mui/icons-material/Devices";
import MobileFriendlyIcon from "@mui/icons-material/MobileFriendly";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import MaximizeOutlinedIcon from "@mui/icons-material/MaximizeOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

//! Drawer
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Divider from "@mui/material/Divider";
import Collapse from "@mui/material/Collapse";

//! Styled UI Components
import StyledContainer from "components/StyledUi/StyledContainer";
import StyledListItemText from "components/StyledUi/StyledListItemText";
import StyledImage from "components/StyledUi/StyledImage";
import StyledAppBar from "components/StyledUi/StyledAppBar";


//! React Router dom
import {Link as RouterLink, useNavigate} from "react-router-dom";

//! Uuids
import { v4 as uuid } from 'uuid';

//! Interfaces
type IconsNavigationInterface = {
    [index: string]: any
}

const IconsNavigation: IconsNavigationInterface = {
    "MenuIcon": <MenuIcon fontSize="medium"></MenuIcon>,
    "PhoneIphoneIcon": <PhoneIphoneIcon fontSize="medium"></PhoneIphoneIcon>,
    "DevicesIcon": <DevicesIcon fontSize="medium"></DevicesIcon>,
    "MobileFriendlyIcon": <MobileFriendlyIcon fontSize="medium"></MobileFriendlyIcon>,
    "HomeOutlinedIcon": <HomeOutlinedIcon fontSize="medium"></HomeOutlinedIcon>
}



//! Navigation Pages
const NavigationPages = [
    {
        _id: uuid(),
        label: "Categorías",
        icon: "MenuIcon",
        status: false,
        subCategorys: [
            {
                link: "",
                label: "Celulares"
            },
            {
                link: "",
                label: "Tecnología"
            },
            {
                link: "",
                label: "Servicios Móviles"
            },
            {
                link: "",
                label: "Servicios Hogar"
            },
            {
                link: "",
                label: "Soporte"
            }
        ]
    },
    {
        _id: uuid(),
        label: "Celulares",
        icon: "PhoneIphoneIcon",
        status: false,
        subCategorys: [
            {
                link: "",
                label: "Celulares en Prepago"
            },
            {
                link: "",
                label: "Renueva tu equipo"
            }
        ]
    },
    {
        _id: uuid(),
        label: "Tecnología",
        icon: "DevicesIcon",
        status: false,
        subCategorys: [
            {
                link: "",
                label: "Videojuegos"
            },
            {
                link: "",
                label: "Televisores"
            },
            {
                link: "",
                label: "Computadoras"
            },
            {
                link: "",
                label: "SmartWatch"
            },
            {
                link: "",
                label: "Internet de las cosas"
            }
        ]
    },
    {
        _id: uuid(),
        label: "Servicios Móviles",
        icon: "MobileFriendlyIcon",
        status: false,
        subCategorys: [
            {
                link: "",
                label: "Cámbiate a Claro Prepago"
            },
            {
                link: "",
                label: "Cámbiate a Claro Postpago"
            },
            {
                link: "",
                label: "Portal de Pagos y Recargas"
            }
        ],
    },
    {
        _id: uuid(),
        label: "Servicios Hogar",
        icon: "HomeOutlinedIcon",
        status: false,
        subCategorys: [{
            link: "/servicios-hogar-direccion",
            label: "Arma Tu Play"
        }, 
        {
            link: "",
            label: "Paga tu Factura Hogar"
        }],
    },
];

function Header() {
    const [stateDrawer, setStateDrawer] = useState(false);
    const [navigationPages, setNavigationPages] = useState(NavigationPages);

    let navigate = useNavigate();

    //!Functions
    const handleNavigationPages = (_id: string): void => {
        const newNavigationPages = navigationPages.map((page) => page._id === _id ? {...page, status: !page.status} : {...page, status: false})
        setNavigationPages(newNavigationPages)
    }

    const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
            event &&
            event.type === "keydown" &&
            ((event as React.KeyboardEvent).key === "Tab" ||
                (event as React.KeyboardEvent).key === "Shift")
        ) {
            return;
        }

        setStateDrawer(open);
    };

    //!Get Mobile Menu
    const getMobileMenu = () => (
        <Box
            sx={{width: "100vw"}}
            role="presentation"
            onKeyDown={toggleDrawer(false)}
        >
            {/* Blank Header */}
            <Box sx={{minHeight: "50px"}}></Box>

            {/* Header Mobile */}
            <StyledContainer
                maxWidth={false}
                sx={{
                    backgroundColor: (theme) => theme.palette.primary.main,
                    color: (theme) => theme.palette.common.white,
                }}
            >
                <Toolbar style={{padding: 0}}>
                    {/* Menu Icon Mobile */}
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={toggleDrawer(false)}
                    >
                        <CloseOutlinedIcon fontSize="large" />
                    </IconButton>

                    {/* Claro Logo Image   */}
                    <Link component={RouterLink} to="/" sx={{ width: "80px", marginBottom: (theme) => theme.spacing(1), mr: "auto"}}>
                        <StyledImage
                            src="/icons/claroperulogo.svg"
                            alt="claro-peru-logo"
                        ></StyledImage>
                    </Link>

                    {/* Search Icon Mobile */}
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                    >
                        <SearchIcon fontSize="large" />
                    </IconButton>
                </Toolbar>
            </StyledContainer>

            {/* Navigation Header Mobile */}
            <List
                sx={{
                    width: "100%",
                    bgcolor: (theme) => theme.palette.common.white,
                }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                // subheader={
                //   <ListSubheader component="div" id="nested-list-subheader">
                //     Persona
                //   </ListSubheader>
                // }
            >
                {/* Items Nav Header Mobile */}
                {navigationPages.slice(1).map((page) => (
                    <>
                        <ListItemButton
                            key={page._id}
                            onClick={() => handleNavigationPages(page._id)}
                        >
                            <StyledListItemText primary={page.label} />
                            {page.status ? (
                                <CloseOutlinedIcon fontSize="small" />
                            ) : (
                                <CloseOutlinedIcon
                                    fontSize="small"
                                    sx={{transform: "rotate(-45deg)"}}
                                />
                            )}
                        </ListItemButton>
                        <Collapse in={page.status} timeout="auto" unmountOnExit>
                            <Divider />
                            <List component="div" disablePadding>
                                {page.subCategorys.map(subCategory => (
                                    <ListItemButton key={subCategory.label} sx={{pl: 4}} onClick={() => navigate(`${subCategory.link}`)}>
                                        <ListItemText primary={subCategory.label} />
                                    </ListItemButton>
                                ))}
                            </List>
                            <Divider />
                        </Collapse>
                    </>
                ))}

                {/* Mis Pedidos */}
                <ListItemButton onClick={() => {}}>
                    <StyledListItemText primary="Mis Pedidos" />
                    <DirectionsCarIcon
                        color="primary"
                        fontSize="large"
                    ></DirectionsCarIcon>
                </ListItemButton>
                <Divider />

                {/*Ayuda */}
                <ListItemButton onClick={() => {}}>
                    <StyledListItemText primary="Ayuda" />
                    <HelpOutlineOutlinedIcon
                        color="primary"
                        fontSize="large"
                    ></HelpOutlineOutlinedIcon>
                </ListItemButton>
                <Divider />
            </List>
        </Box>
    );

    //!Search Components
    const Search = styled("div")(({theme}) => ({
        position: "relative",
        color: theme.palette.common.black,
        borderRadius: theme.shape.borderRadius,
        backgroundColor: theme.palette.common.white,
        // '&:hover': {
        //   backgroundColor: alpha(theme.palette.common.white, 0.25),
        // },
        width: "100%",
        overflow: "hidden",
        [theme.breakpoints.up("sm")]: {
            width: "auto",
        },
    }));

    const SearchIconWrapper = styled("div")(({theme}) => ({
        padding: theme.spacing(0.5),
        backgroundColor: theme.palette.info.main,
        borderRadius: "3px",
        color: theme.palette.common.white,
        position: "absolute",
        right: 0,
        height: "80%",
        top: "50%",
        transform: "translateY(-50%)",
        marginRight: ".25rem",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    }));

    const StyledInputBase = styled(InputBase)(({theme}) => ({
        color: "inherit",
        "& .MuiInputBase-input": {
            padding: theme.spacing(1, 0, 1, 1),
            // vertical padding + font size from searchIcon
            paddingRight: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create("width"),
            width: "100%",
            [theme.breakpoints.up("md")]: {
                width: "27rem",
                "&:focus": {
                    width: "32rem",
                },
            },
        },
    }));
    //!--------------------------
    
    return (
    <>
        <div>
            {(["left"] as const).map((anchor) => (
                <Fragment key={anchor}>
                    <SwipeableDrawer
                        anchor={anchor}
                        open={stateDrawer}
                        onClose={toggleDrawer(false)}
                        onOpen={toggleDrawer(true)}
                    >
                        {getMobileMenu()}
                    </SwipeableDrawer>
                </Fragment>
            ))}
        </div>
        {/* Header */}
        <StyledAppBar position="sticky" className="header">
            {/* Header Top */}
            <Box className="header__top">
                <StyledContainer maxWidth={false} sx={{display: "flex"}}>
                    <Box sx={{flex: 1}}></Box>
                    {/* Section login */}
                    <List
                        className="header__login"
                        sx={{
                            
                        }}
                    >
                        {/* User Icon */}
                        <PersonOutlineOutlinedIcon fontSize="large"></PersonOutlineOutlinedIcon>

                        {/* Login Action */}
                        <ListItemText onClick={() => {}}>
                            <Typography variant="body2">
                                Iniciar<br></br> Sesión
                            </Typography>
                        </ListItemText>
                        
                        {/* Line Icon */}
                        <MaximizeOutlinedIcon
                            fontSize="large"
                            sx={{
                                transform: "rotate(-90deg)",
                                mr: "-1rem",
                                ml: ".5rem",
                            }}
                        ></MaximizeOutlinedIcon>

                        {/* Check-In Action */}
                        <ListItemText onClick={() => {}} sx={{mr: 1}}>
                            <Typography variant="body2">
                                Crear<br></br> Cuenta
                            </Typography>
                        </ListItemText>
                        
                        {/* Shopping-Cart Action */}
                        <Tooltip title="Mis Compras">
                            <Box className="header__shopping-cart">
                                <ShoppingCartIcon
                                    fontSize="large"
                                    color="secondary"
                                ></ShoppingCartIcon>
                                <Box className="header__quantity-shopping-cart">
                                    1
                                </Box>
                            </Box>
                        </Tooltip>
                    </List>
                </StyledContainer>
            </Box>
            
            {/* Header Center */}
            <StyledContainer maxWidth={false}>
                <Toolbar className="header__center">
                    {/* Hamburguer Icon */}
                    <Hidden mdUp>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={toggleDrawer(true)}
                        >
                            <MenuIcon fontSize="large" />
                        </IconButton>
                    </Hidden>

                    {/* Claro Logo Image  */}
                    <Link component={RouterLink} to="/" underline="none" className="header__logo" >
                        <StyledImage
                            src="/icons/claroperulogo.svg"
                            alt="claro-peru-logo"
                        ></StyledImage>
                    </Link>
                    
                    {/* Section Search Desktop */}
                    <Hidden mdDown>
                        <Box className="header__search">
                            <Search>
                                <SearchIconWrapper>
                                    <SearchIcon />
                                </SearchIconWrapper>
                                <StyledInputBase
                                    placeholder="Search…"
                                    inputProps={{"aria-label": "search"}}
                                />
                            </Search>
                        </Box>
                    </Hidden>

                    {/* Section Search Mobile */}
                    <Hidden mdUp>
                        <Box className="header__search-mobile">
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="open drawer"
                            >
                                <SearchIcon fontSize="large" />
                            </IconButton>
                        </Box>
                    </Hidden>

                    {/* Section Header Options */}
                    <Hidden mdDown>
                        <Box
                            className="header__options"
                        >
                            <Tooltip title="Mis Pedidos">
                                <Box
                                    className="header__options-item"
                                >
                                    <DirectionsCarIcon></DirectionsCarIcon>
                                    <Typography variant="body2">
                                        Mis Pedidos
                                    </Typography>
                                </Box>
                            </Tooltip>
                            <Tooltip title="Ayuda">
                                <Box
                                    className="header__options-item"
                                >
                                    <HelpOutlineOutlinedIcon></HelpOutlineOutlinedIcon>
                                    <Typography variant="body2">
                                        Ayuda
                                    </Typography>
                                </Box>
                            </Tooltip>
                        </Box>
                    </Hidden>
                </Toolbar>
            </StyledContainer>

            {/* Header Bottom */}
            <Hidden mdDown>
                <Box className="header__bottom">
                    <StyledContainer maxWidth="md">
                        {/* Items del Menu */}
                        <List
                            className="header__menu"
                            component="nav"
                        >
                            {navigationPages.map((page) => (
                                <Box
                                    key={page._id}
                                    component="li"
                                    sx={{flex: 1, listStyle: "none"}}
                                >
                                    <Button
                                        sx={{
                                            textTransform: "capitalize",
                                            color: (theme) => theme.palette.common.black,
                                        }}
                                        startIcon={IconsNavigation[page.icon]}
                                        onClick={() => handleNavigationPages(page._id)}
                                    >
                                        <Typography
                                            variant="body1"
                                            component="span"
                                            sx={{
                                                marginBottom: `${
                                                    page.status && "-1px"
                                                }`,
                                                borderBottom: `${
                                                    page.status &&
                                                    "1px solid black"
                                                }`
                                            }}
                                        >
                                            {page.label}
                                        </Typography>
                                    </Button>
                                    <Grow
                                        in={page.status}
                                        style={{
                                            transformOrigin: "center top",
                                        }}
                                        {...(page.status
                                            ? {timeout: 600}
                                            : {})}
                                        unmountOnExit
                                    >
                                        <List
                                            component="div"
                                            disablePadding
                                            sx={{textAlign: "left"}}
                                        >
                                            {page.subCategorys.map(
                                                (subCategory) => (
                                                    <Link
                                                        component={RouterLink}
                                                        variant="body2"
                                                        to={subCategory.link}
                                                        underline="hover"
                                                        color="inherit"
                                                        sx={{
                                                            pl: 4,
                                                            cursor: "pointer",
                                                            display: "block"
                                                        }}
                                                        key={subCategory.label}
                                                    >
                                                        {subCategory.label}
                                                    </Link>
                                                )
                                            )}
                                        </List>
                                    </Grow>
                                </Box>
                            ))}
                        </List>
                    </StyledContainer>
                </Box>
            </Hidden>
        </StyledAppBar>
    </>
    );
}
export default Header;
