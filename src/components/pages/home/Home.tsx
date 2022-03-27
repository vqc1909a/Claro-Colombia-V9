import {
    Box,
    Hidden,
    Toolbar,
    Typography,
    Paper,
    Link,
    CardContent,
    CardHeader,
    CardMedia,
    CardActions,
    Fade
} from "@mui/material";

import StyledCard from "components/StyledUi/StyledCard";
import StyledContainer from "components/StyledUi/StyledContainer";
import StyledGrid from "components/StyledUi/StyledGrid";
import StyledImage from "components/StyledUi/StyledImage";
import Carousel from "react-material-ui-carousel";

//! Icons
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

//! Uuids
import { v4 as uuid } from 'uuid';

//! Hooks
import useScrollToTop from "utils/hooks/useScrollToTop";


//! Interfaces
import {ItemArgs, HeaderHomeSectionArgs} from "./interfaces";
import StyledButton from "components/StyledUi/StyledButton";


function Item({item}: ItemArgs) {
    const {image} = item;
    return (
            // Por el momento aplicaremos       estilo a este paper y no al hero__content xq esta es una biblioteca de tercero y no tiene identificadore mui para hacer alguna modificación
            <Paper sx={(theme) => ({
                width: "100%",
                height: "60vh",
                marginBottom: theme.spacing(1),
                [theme.breakpoints.up("sm")]: {
                    height: "63vh",
                    marginTop: theme.spacing(3),
                    marginBottom: theme.spacing(3),
                },
                [theme.breakpoints.up("md")]: {
                    height: "65vh",
                    marginTop: theme.spacing(5),
                    marginBottom: theme.spacing(5),
                },
            })}>
                <StyledImage src={image} loading="lazy"></StyledImage>
            </Paper>
            
        
    );
}

const itemsHeroDesktop = [
    {   _id: uuid(),
        title: "Imagen 1",
        description: "Description 1",
        image: "images/home/hero/desktop/banner1.jpg",
    },
    {   _id: uuid(),
        title: "Imagen 2",
        description: "Description 2",
        image: "images/home/hero/desktop/banner2.png",
    },
    {   _id: uuid(),
        title: "Imagen 3",
        description: "Description 3",
        image: "images/home/hero/desktop/banner3.jpg",
    }
];

const itemsHeroMobile = [
    {   _id: uuid(),
        title: "Imagen 1",
        description: "Description 1",
        image: "images/home/hero/mobile/banner1.png",
    },
    {   _id: uuid(),
        title: "Imagen 2",
        description: "Description 2",
        image: "images/home/hero/mobile/banner2.png",
    }
];


const itemsSectionCellphonesDesktop = [
    {
        _id: uuid(),
        title: "",
        image: "images/home/section-cellphones/desktop/cellphone-normal.png",
        size: "normal"
    },
    {
        _id: uuid(),
        title: "",
        image: "images/home/section-cellphones/desktop/cellphone-normal.png",
        size: "normal"
    },
    {
        _id: uuid(),
        title: "",
        image: "images/home/section-cellphones/desktop/cellphone-normal.png",
        size: "normal"
    },
    {
        _id: uuid(),
        title: "",
        image: "images/home/section-cellphones/desktop/cellphone-normal.png",
        size: "normal"
    },
    {
        _id: uuid(),
        title: "",
        image: "images/home/section-cellphones/desktop/cellphone-large.png",
        size: "large"
    },
    {
        _id: uuid(),
        title: "",
        image: "images/home/section-cellphones/desktop/cellphone-large.png",
        size: "large"
    },
    {
        _id: uuid(),
        title: "",
        image: "images/home/section-cellphones/desktop/cellphone-normal.png",
        size: "normal"
    },
    {
        _id: uuid(),
        title: "",
        image: "images/home/section-cellphones/desktop/cellphone-normal.png",
        size: "normal"
    },
    {
        _id: uuid(),
        title: "",
        image: "images/home/section-cellphones/desktop/cellphone-large.png",
        size: "large"
    },
    {
        _id: uuid(),
        title: "",
        image: "images/home/section-cellphones/desktop/cellphone-normal.png",
        size: "normal"
    },
    {
        _id: uuid(),
        title: "",
        image: "images/home/section-cellphones/desktop/cellphone-large.png",
        size: "large"
    },
    {
        _id: uuid(),
        title: "",
        image: "images/home/section-cellphones/desktop/cellphone-normal.png",
        size: "normal"
    }
]

const itemsSectionCellphonesMobile = [
    {
        _id: uuid(),
        title: "",
        image: "images/home/section-cellphones/mobile/cellphone-normal.png",
        size: "normal"
    },
    {
        _id: uuid(),
        title: "",
        image: "images/home/section-cellphones/mobile/cellphone-normal.png",
        size: "normal"
    },
    {
        _id: uuid(),
        title: "",
        image: "images/home/section-cellphones/mobile/cellphone-normal.png",
        size: "normal"
    },
    {
        _id: uuid(),
        title: "",
        image: "images/home/section-cellphones/mobile/cellphone-normal.png",
        size: "normal"
    },
    {
        _id: uuid(),
        title: "",
        image: "images/home/section-cellphones/mobile/cellphone-large.png",
        size: "large"
    },
    {
        _id: uuid(),
        title: "",
        image: "images/home/section-cellphones/mobile/cellphone-large.png",
        size: "large"
    },
    {
        _id: uuid(),
        title: "",
        image: "images/home/section-cellphones/mobile/cellphone-normal.png",
        size: "normal"
    },
    {
        _id: uuid(),
        title: "",
        image: "images/home/section-cellphones/mobile/cellphone-normal.png",
        size: "normal"
    },
    {
        _id: uuid(),
        title: "",
        image: "images/home/section-cellphones/mobile/cellphone-large.png",
        size: "large"
    },
    {
        _id: uuid(),
        title: "",
        image: "images/home/section-cellphones/mobile/cellphone-normal.png",
        size: "normal"
    },
    {
        _id: uuid(),
        title: "",
        image: "images/home/section-cellphones/mobile/cellphone-large.png",
        size: "large"
    },
    {
        _id: uuid(),
        title: "",
        image: "images/home/section-cellphones/mobile/cellphone-normal.png",
        size: "normal"
    }
]

const itemsSectionPostpagoPlansDesktop = [
    {
        _id: uuid(),
        title: "",
        image: "images/home/postpago-plans/desktop/postpago-plan.png"
    }
]
const itemsSectionPostpagoPlansMobile = [
    {
        _id: uuid(),
        title: "",
        image: "images/home/postpago-plans/mobile/postpago-plan.png"
    }
]

const itemsSectionHomePlansDesktop = [
    {
        _id: uuid(),
        title: "",
        image: "images/home/home-plans/desktop/home-plan.png"
    }
]

const itemsSectionHomePlansMobile = [
    {
        _id: uuid(),
        title: "",
        image: "images/home/home-plans/mobile/home-plan.png"
    }
]


const itemsSectionSIM = [
    {
        _id: uuid(),
        title: "",
        image: "images/home/sim-plans/desktop/sim-large.png",
        size: "large"
    },
     {
        _id: uuid(),
        title: "",
        image: "images/home/sim-plans/desktop/sim-normal.png",
        size: "normal"
    },
     {
        _id: uuid(),
        title: "",
        image: "images/home/sim-plans/desktop/sim-normal.png",
        size: "normal"
    }
]

const itemsSectionNewCellPhones = [
    {
        _id: uuid(),
        title: "Motorola One Zoom 4G",
        description: "",
        image: "images/home/new-cellphones/desktop/new-cellphone.png",
        spotPrice:  1225900,
        priceInInstallments: 1392900,
        priceNow: 1392900,
        priceBefore: 1639900
    },
    {
        _id: uuid(),
        title: "Huawei P30 Pro 4G",
        description: "",
        image: "images/home/new-cellphones/desktop/new-cellphone.png",
        spotPrice:  0,
        priceInInstallments: 1530950,
        priceNow: 1230950,
        priceBefore: 0
    },
    {
        _id: uuid(),
        title: "Huawei P30 Pro 4G",
        description: "",
        image: "images/home/new-cellphones/desktop/new-cellphone.png",
        spotPrice:  0,
        priceInInstallments: 1530950,
        priceNow: 1230950,
        priceBefore: 0
    },
    {
        _id: uuid(),
        title: "Motorola One Zoom 4G",
        description: "",
        image: "images/home/new-cellphones/desktop/new-cellphone.png",
        spotPrice:  1225900,
        priceInInstallments: 1392900,
        priceNow: 1392900,
        priceBefore: 1639900
    }
]



const HeaderHomeSection = ({title}: HeaderHomeSectionArgs) => {
    return (
        <Box sx={{display: "flex", alignItems: "flex-end"}}>
            <Typography
                variant="h4"
                component="h2"
                sx={{color: (theme) => theme.palette.grey["700"], mr: 1.5}}
            >
                {title}
            </Typography>
            <Link
                href="#"
                variant="caption"
                underline="hover"
                sx={{
                    fontWeight: "lighter",
                    color: (theme) => theme.palette.grey["600"],
                }}
            >{`Conoce más>`}</Link>
        </Box>
    );
};


// let sizeWidth: number = 0;

function Home() {

    // const reportWindowSize = () => {
    //     sizeWidth = window.innerWidth;
    // }
    // window.addEventListener('resize', reportWindowSize);

    //! Effects
    useScrollToTop();
    
    return (
        <>
            <Fade in={true} timeout={1000} easing="ease-in-out">
                {/* Hero Section */}
                <StyledContainer
                    maxWidth={false}
                    className="container-home container-hero"
                >
                    <StyledGrid container className="hero">
                        {/* Title Hero */}
                        <Hidden smUp>
                            <Toolbar className="hero__intro">
                                <Typography variant="h4" component="h1">
                                    Tienda
                                </Typography>
                            </Toolbar>
                        </Hidden>

                        {/* Content Hero: por el momento estamos utilizando una biblioteca de terceros para el carrusel y no aplicaremos ninugn estilo al hero content */}
                        <Box className="hero__content">
                            {/* Carousel Desktop */}
                            <Hidden smDown>
                                <Carousel
                                    animation="slide"
                                    indicators={false}
                                    navButtonsAlwaysVisible={true}
                                    navButtonsProps={{
                                        style: {
                                            backgroundColor: "transparent",
                                            color: "white",
                                            border: "2px solid white",
                                            borderRadius: "3px",
                                            marginLeft: "2rem",
                                            marginRight: "2rem",
                                        },
                                    }}
                                    NextIcon={<ArrowForwardIosIcon />}
                                    PrevIcon={<ArrowBackIosNewIcon />}
                                    next={(next, active) =>
                                        console.log(
                                            `we left ${active}, and are now at ${next}`
                                        )
                                    }
                                    prev={(prev, active) =>
                                        console.log(
                                            `we left ${active}, and are now at ${prev}`
                                        )
                                    }
                                    sx={{width: "100%", height: "100%"}}
                                >
                                    
                                        {itemsHeroDesktop.map((item) => (
                                            <Item key={item._id} item={item} />
                                        ))}
                                </Carousel>
                            </Hidden>
                            
                            {/* Carousel Mobile */}
                            <Hidden smUp>
                                <Carousel
                                    animation="slide"
                                    indicators={false}
                                    navButtonsAlwaysVisible={true}
                                    navButtonsProps={{
                                        style: {
                                            backgroundColor: "transparent",
                                            color: "white",
                                            border: "2px solid white",
                                            borderRadius: "3px",
                                            marginLeft: "2rem",
                                            marginRight: "2rem",
                                        },
                                    }}
                                    NextIcon={<ArrowForwardIosIcon />}
                                    PrevIcon={<ArrowBackIosNewIcon />}
                                    next={(next, active) =>
                                        console.log(
                                            `we left ${active}, and are now at ${next}`
                                        )
                                    }
                                    prev={(prev, active) =>
                                        console.log(
                                            `we left ${active}, and are now at ${prev}`
                                        )
                                    }
                                    sx={{width: "100%", height: "100%"}}
                                >
                                    
                                        {itemsHeroMobile.map((item) => (
                                            <Item key={item._id} item={item} />
                                        ))} 
                                </Carousel>
                            </Hidden>
                        </Box>
                    </StyledGrid>
                </StyledContainer>
            </Fade>  
                
            {/* Main Section */}
            <StyledContainer maxWidth={false} className="container-home">
                <StyledGrid container className="home-section">
                    {/* Section Cellphones */}
                    <Box className="home-section__feature">
                        <HeaderHomeSection title="Celulares"></HeaderHomeSection>
                        <Box sx={{py: 2}}>
                            <Hidden mdDown>
                                <StyledGrid
                                    container
                                    justifyContent="center"
                                    spacing={2}
                                >
                                    {itemsSectionCellphonesDesktop.map(item => (
                                        <StyledGrid key={item._id} item xs={12} sm={item.size === "normal" ? 6: 12} md={item.size === "normal" ? 3 : 6}>
                                            <Paper
                                                variant="outlined"
                                                square
                                                className="home-section__item home-section__item--cellphones"
                                            >
                                                <StyledImage
                                                    src={item.image}
                                                    alt={item.title}
                                                ></StyledImage>
                                            </Paper>
                                        </StyledGrid>
                                    ))}
                                </StyledGrid>
                            </Hidden>  

                            <Hidden mdUp>          
                                <StyledGrid
                                    container
                                    justifyContent="center"
                                    spacing={2}
                                >
                                    {itemsSectionCellphonesMobile.map(item => (
                                        <StyledGrid key={item._id} item xs={12} sm={item.size === "normal" ? 6: 12} md={item.size === "normal" ? 3 : 6}>
                                            <Paper
                                                variant="outlined"
                                                square
                                                className="home-section__item home-section__item--cellphones"
                                            >
                                                <StyledImage
                                                    src={item.image}
                                                    alt={item.title}
                                                ></StyledImage>
                                            </Paper>
                                        </StyledGrid>
                                    ))}
                                </StyledGrid>
                            </Hidden>  
                        </Box>
                    </Box>

                    {/* Section Planes Postpago */}
                    <Box className="home-section__feature">
                        <HeaderHomeSection title="Planes Pospago"></HeaderHomeSection>
                        <Box sx={{py: 1}}>
                            <Hidden mdDown>
                                <StyledGrid
                                    container
                                    justifyContent="center"
                                    spacing={2}
                                >
                                    {itemsSectionPostpagoPlansDesktop.map(item => (
                                        <StyledGrid key={item._id} item xs={12}>
                                            <Paper
                                                variant="outlined"
                                                square
                                                className="home-section__item home-section__item--plans"
                                            >
                                                <StyledImage
                                                    src={item.image}
                                                    alt={item.title}
                                                ></StyledImage>
                                            </Paper>
                                        </StyledGrid>
                                    ))}
                                </StyledGrid>
                            </Hidden>
                            <Hidden mdUp>
                                <StyledGrid
                                    container
                                    justifyContent="center"
                                    spacing={2}
                                >
                                    {itemsSectionPostpagoPlansMobile.map(item => (
                                        <StyledGrid key={item._id} item xs={12}>
                                            <Paper
                                                variant="outlined"
                                                square
                                                className="home-section__item home-section__item--plans"
                                            >
                                                <StyledImage
                                                    src={item.image}
                                                    alt={item.title}
                                                ></StyledImage>
                                            </Paper>
                                        </StyledGrid>
                                    ))}
                                </StyledGrid>
                            </Hidden>
                        </Box>
                    </Box>

                    {/* Section Planes Hogares */}
                    <Box className="home-section__feature">
                        <HeaderHomeSection title="Hogares"></HeaderHomeSection>
                        <Box sx={{py: 1}}>
                            <Hidden mdDown>
                                <StyledGrid
                                    container
                                    justifyContent="center"
                                    spacing={2}
                                >
                                    {itemsSectionHomePlansDesktop.map(item => (
                                            <StyledGrid key={item._id} item xs={12}>
                                                <Paper
                                                    variant="outlined"
                                                    square
                                                    className="home-section__item home-section__item--plans"
                                                >
                                                    <StyledImage
                                                        src={item.image}
                                                        alt={item.title}
                                                    ></StyledImage>
                                                </Paper>
                                            </StyledGrid>
                                    ))}
                                </StyledGrid>
                            </Hidden>
                            <Hidden mdUp>
                                <StyledGrid
                                    container
                                    justifyContent="center"
                                    spacing={2}
                                >
                                    {itemsSectionHomePlansMobile.map(item => (
                                            <StyledGrid key={item._id} item xs={12}>
                                                <Paper
                                                    variant="outlined"
                                                    square
                                                    className="home-section__item home-section__item--plans"
                                                >
                                                    <StyledImage
                                                        src={item.image}
                                                        alt={item.title}
                                                    ></StyledImage>
                                                </Paper>
                                            </StyledGrid>
                                    ))}
                                </StyledGrid>
                            </Hidden>
                        </Box>
                    </Box>

                    {/* Section SIM Card */}
                    <Box className="home-section__feature">
                        <HeaderHomeSection title="SIM Card + Paquete Prepago"></HeaderHomeSection>
                        <Box sx={{py: 1}}>
                            <StyledGrid
                                container
                                justifyContent="center"
                                spacing={2}
                            >
                                {itemsSectionSIM.map(item => (
                                    <StyledGrid key={item._id} item xs={12} sm={item.size === "normal" ? 6 : 12} md={item.size === "normal" ? 3 : 6}>
                                        <Paper
                                            variant="outlined"
                                            square
                                            className="home-section__item home-section__item--sim"
                                        >
                                            <StyledImage
                                                src={item.image}
                                                alt={item.title}
                                            ></StyledImage>
                                        </Paper>
                                    </StyledGrid>
                                ))}
                            </StyledGrid>
                        </Box>
                    </Box>

                    {/* New CellPhones */}
                    <Box className="home-section__feature">
                        <Box sx={{py: 1, mb: 6}}>
                            <StyledGrid
                                container
                                justifyContent="center"
                                spacing={2}
                            >
                                {itemsSectionNewCellPhones.map(item => (
                                    <StyledGrid key={item._id} item xs={12} sm={6} md={3}>
                                        <StyledCard
                                            variant="outlined"
                                        >
                                            {/* Header Card */}
                                            <CardHeader
                                                component="h3"
                                                title={item.title}
                                                titleTypographyProps={{
                                                    typography: "h6",
                                                }}
                                                sx={{mb: 0}}
                                            ></CardHeader>
                                            {/* Header Image */}
                                            <CardMedia
                                                component="img"
                                                height="250"
                                                image={item.image}
                                                alt={item.title}
                                                sx={{height: "100%", verticalAlign: "top"}}
                                            />
                                            {/* Header Content */}
                                            <CardContent sx={{textAlign: "center"}}>
                                                <Box
                                                    sx={{
                                                        backgroundColor: (theme) =>
                                                            theme.palette.primary
                                                                .main,
                                                        py: 0.5,
                                                        px: 1,
                                                        color: (theme) =>
                                                            theme.palette.common
                                                                .white,
                                                    }}
                                                >
                                                    <Typography
                                                        variant="caption"
                                                        sx={{fontWeight: "bolder"}}
                                                    >
                                                        Cliente Claro Hogar o
                                                        PostPago
                                                    </Typography>
                                                </Box>
                                                <Paper
                                                    variant="outlined"
                                                    square
                                                    sx={{
                                                        display: "flex",
                                                        p: 1,
                                                        my: 0.25,
                                                        alignItems: "flex-start",
                                                        borderColor: (theme) =>
                                                            theme.palette.grey[
                                                                "500"
                                                            ],
                                                        overflow: "hidden",
                                                    }}
                                                >
                                                    {item.spotPrice && item.priceInInstallments
                                                    
                                                    ?                              
                                                    <>
                                                        <Box sx={{flex: 1}}>
                                                            <Typography
                                                                variant="h6"
                                                                sx={{
                                                                    color: (theme) =>
                                                                        theme.palette
                                                                            .primary
                                                                            .main,
                                                                }}
                                                            > 
                                                            ${item.spotPrice}
                                                            </Typography>
                                                            <Typography
                                                                variant="subtitle2"
                                                                sx={{
                                                                    color: (theme) =>
                                                                        theme.palette
                                                                            .grey[
                                                                            "500"
                                                                        ],
                                                                }}
                                                            >
                                                                De contado
                                                            </Typography>
                                                        </Box>
                                                        <Typography
                                                            variant="h4"
                                                            sx={{
                                                                color: (theme) =>
                                                                    theme.palette.grey[
                                                                        "500"
                                                                    ],
                                                                alignSelf: "center",
                                                            }}
                                                        >
                                                            |
                                                        </Typography>
                                                        <Box sx={{flex: 1}}>
                                                            <Typography
                                                                variant="h6"
                                                                sx={{
                                                                    color: (theme) =>
                                                                        theme.palette
                                                                            .primary
                                                                            .main,
                                                                }}
                                                            >
                                                                ${item.priceInInstallments}
                                                            </Typography>
                                                            <Typography
                                                                variant="subtitle2"
                                                                sx={{
                                                                    color: (theme) =>
                                                                        theme.palette
                                                                            .grey[
                                                                            "500"
                                                                        ],
                                                                }}
                                                            >
                                                                Pago a cuotas con tu
                                                                factura
                                                            </Typography>
                                                        </Box>
                                                    </>
                                                    :
                                                    <Box sx={{flex: 1}}>
                                                        <Typography
                                                            variant="h6"
                                                            sx={{
                                                                color: (theme) =>
                                                                    theme.palette
                                                                        .primary
                                                                        .main,
                                                            }}
                                                        >
                                                            ${item.priceInInstallments}
                                                        </Typography>
                                                        <Typography
                                                            variant="subtitle2"
                                                            sx={{
                                                                color: (theme) =>
                                                                    theme.palette
                                                                        .grey[
                                                                        "500"
                                                                    ]
                                                            }}
                                                        >
                                                            Pago a cuotas con tu factura
                                                            <Box sx={{visibility: "hidden"}}>Vacío</Box>
                                                        </Typography>
                                                    </Box>
                                                    }
                                                </Paper>
                                                <Box sx={{py: 1}}>
                                                    <Typography
                                                        variant="body1"
                                                        sx={{
                                                            color: (theme) =>
                                                                theme.palette.common
                                                                    .black,
                                                            fontWeight: "bolder",
                                                        }}
                                                    >
                                                        ${item.priceNow} Precio Ahora
                                                    </Typography>
                                                    <Typography
                                                        variant="body2"
                                                        sx={{
                                                            color: (theme) =>
                                                            theme.palette.grey[
                                                                "500"
                                                                ],
                                                        }}
                                                        >
                                                        {item.priceBefore ? 
                                                        <>
                                                            <Box
                                                                component="span"
                                                                sx={{
                                                                    textDecoration:
                                                                        "line-through",
                                                                }}
                                                            >
                                                                ${item.priceBefore}
                                                            </Box>{" "}
                                                            Precio Antes
                                                        </>
                                                        :
                                                            <Box
                                                                component="span"
                                                                sx={{
                                                                    textDecoration:
                                                                        "line-through",
                                                                    visibility: "hidden"
                                                                }}
                                                            >
                                                            {"Vacio"}
                                                            </Box>
                                                        }
                                                    </Typography>
                                                </Box>
                                            </CardContent>
                                            {/* Header Button */}
                                            <CardActions
                                                sx={{
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    paddingTop: 0,
                                                    paddingBottom: 2
                                                }}
                                            >
                                                <StyledButton
                                                    variant="outlined"
                                                    className="button-outlined"
                                                    color="info"
                                                    sx={{
                                                        typography: "body2", m: 0
                                                    }}
                                                >{`Ver más >`}</StyledButton>
                                            </CardActions>
                                        </StyledCard>
                                    </StyledGrid>
                                ))}       
                            </StyledGrid>
                        </Box>
                    </Box>
                </StyledGrid>
            </StyledContainer>
        </>
    );
}
export default Home;
