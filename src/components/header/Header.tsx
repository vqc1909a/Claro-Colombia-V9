import React, {useState, Fragment, useEffect, useRef} from "react";
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
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';



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
import Fade from "@mui/material/Fade";


//! Styled UI Components
import StyledContainer from "components/StyledUi/StyledContainer";
import StyledListItemText from "components/StyledUi/StyledListItemText";
import StyledImage from "components/StyledUi/StyledImage";
import StyledAppBar from "components/StyledUi/StyledAppBar";


//! Redux;
import useAppSelector from "utils/hooks/useAppSelector";
import useAppDispatch from "utils/hooks/useAppDispatch";

//! Selectors
import * as USER_SELECTORS from "redux/selectors/user";

//!Actions
import * as USER_ACTIONS from "redux/slices/user";


//! React Router dom
import {Link as RouterLink, useNavigate, useLocation} from "react-router-dom";

//! Uuids
import { v4 as uuid } from 'uuid';
import { getLoggedUser } from "api/services/user";



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
const NavigationPagesDefault = [
    {
        _id: uuid(),
        label: "Categor??as",
        icon: "MenuIcon",
        status: false,
        subCategorys: [
            {
                link: "",
                label: "Celulares"
            },
            {
                link: "",
                label: "Tecnolog??a"
            },
            {
                link: "",
                label: "Servicios M??viles"
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
        label: "Tecnolog??a",
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
        label: "Servicios M??viles",
        icon: "MobileFriendlyIcon",
        status: false,
        subCategorys: [
            {
                link: "",
                label: "C??mbiate a Claro Prepago"
            },
            {
                link: "",
                label: "C??mbiate a Claro Postpago"
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


//! Evento de renderizado de ancho
let sizeWidth: number = 0;

function Header() {
    const [stateDrawer, setStateDrawer] = useState(false);
    const [navigationPages, setNavigationPages] = useState(NavigationPagesDefault);

    const [openSnackbar, setOpenSnackbar] = useState(false);

    let navigate = useNavigate();
    let dispatch = useAppDispatch();

    //!Selectors
    const isLogged = useAppSelector(USER_SELECTORS.selectIsLogged);
    const user = useAppSelector(USER_SELECTORS.selectUser);
    
    //! Refs Dom
    const headerRef = useRef<HTMLDivElement>(null);

    //!Functions
    const handleNavigationPages = (_id: string): void => {
        const newNavigationPages = navigationPages.map((page) => page._id === _id ? {...page, status: !page.status} : {...page, status: false})
        setNavigationPages(newNavigationPages)
    }

    const handleCloseSnackbar = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
        return;
        }

        setOpenSnackbar(false);
    };

    const handleCloseFooterBottomFloat = () => {
        setNavigationPages(NavigationPagesDefault)
    }

    const reportWindowSize = () => {
        sizeWidth = window.innerWidth;
    }
    window.addEventListener('resize', reportWindowSize);

    //! Effects
    useEffect((): any => {
        if (!isLogged) return null;
        setOpenSnackbar(true);
    }, [isLogged])

    useEffect((): any => {
        const token: any = localStorage.getItem('token');
        if (!token) return null;
        ( async () => {
            try{
                dispatch(USER_ACTIONS.getLoggedUserRequest());
                const {data} = await getLoggedUser({token});
                dispatch(USER_ACTIONS.getLoggedUserSuccess({...data[0]}));
            }catch(err: any){
                const {data} = err.response;
                dispatch(USER_ACTIONS.getLoggedUserError({message: data}));
            }
        })();
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        document.addEventListener('click', (e) => {
            let isClickInsideElement = headerRef.current && headerRef.current.contains(e.target as Node);
            if (sizeWidth > 1024 && !isClickInsideElement) {
                setNavigationPages(NavigationPagesDefault);
            }
        })
    }, [])

    //!No show Header Component if pathname is /login
    let location = useLocation();
    if (location.pathname === "/login"){
        return null;
    }
    


    //!Alert Component
    const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
    ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

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
            <Box sx={{minHeight: "52px"}}></Box>

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
                    <Link component={RouterLink} to="/" sx={{ width: "80px", marginBottom: (theme) => theme.spacing(1), mr: "auto"}} onClick={handleCloseFooterBottomFloat}>
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
                className="header-mobile"
                // subheader={
                //   <ListSubheader component="div" id="nested-list-subheader">
                //     Persona
                //   </ListSubheader>
                // }
            >
                {/* Items Nav Header Mobile */}
                {navigationPages.slice(1).map((page) => (
                    <Box key={page._id}>
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
                    </Box>
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

        {/* SnackBar */}
        <Snackbar anchorOrigin={{ vertical: "top", horizontal: "center" }} open={openSnackbar} autoHideDuration={3000} onClose={handleCloseSnackbar}>
            <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
                ??Bienvenido {user.name}! 
            </Alert>
        </Snackbar>

        {/* Header */}
        <StyledAppBar position="sticky" className="header" ref={headerRef}>
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
                        <ListItemText onClick={() => navigate("/login")} sx={{cursor: "pointer"}}>
                            {isLogged ? 
                            <Typography variant="body2">
                                 Mi Cuenta
                            </Typography>
                            :
                            <Typography variant="body2">
                                Iniciar<br></br> Sesi??n
                            </Typography>
                            }
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
                        <ListItemText onClick={() => {}} sx={{mr: 1.5}}>
                            {isLogged ?
                            <Typography variant="body2">
                                ??Hola {user.name}!
                            </Typography>
                            :
                            <Typography variant="body2">
                                Crear<br></br> Cuenta
                            </Typography>
                            }
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
                    <Link component={RouterLink} to="/" underline="none" className="header__logo" onClick={handleCloseFooterBottomFloat} >
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
                                    placeholder="Search???"
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
                        {/* Lista de Items */}
                        <List
                            className="header__menu"
                            component="nav"
                            sx={{position: "relative"}}
                        >
                            {navigationPages.map((page) => (
                                // Items del Men??
                                <Box
                                    key={page._id}
                                    component="li"
                                    className="header__item"
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
                                            position: "absolute",
                                            zIndex: 1500
                                        }}
                                        {...(page.status
                                            ? {timeout: 600}
                                            : {})}
                                        
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
                                                        className="header__sub-item"
                                                        key={subCategory.label}
                                                        onClick={handleCloseFooterBottomFloat}
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

                    {/* Header Bottom Float */}
                    <Fade
                        in={navigationPages.some(page => page.status === true)}
                        timeout={600}
                        
                    > 
                        <Box className="header__bottom-float">
                        </Box>
                    </Fade >
                 
                   
                </Box>
            </Hidden>
        </StyledAppBar>
    </>
    );
}
export default Header;
