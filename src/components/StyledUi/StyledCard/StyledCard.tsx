import Card from "@mui/material/Card";
import {styled} from "@mui/material/styles";

const StyledCard = styled(Card)(({theme}) => ({
    boxShadow: theme.shadows["5"],
    borderRadius: "10px",
    "&.card-services-container": {
        textAlign: "initial",
        marginBottom: theme.spacing(4),
        [theme.breakpoints.up("md")]: {
            marginBottom: theme.spacing(8),
        },
        //! Hijos
        "& .card-services-container__content": {
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
            paddingTop: theme.spacing(3),
            paddingBottom: theme.spacing(3),
            [theme.breakpoints.up("sm")]: {
                paddingLeft: theme.spacing(4),
                paddingRight: theme.spacing(4),
                paddingTop: theme.spacing(4),
                paddingBottom: theme.spacing(4),
            },
            // "&.card-services-container__content--form": {
            //     paddingRight: theme.spacing(4),
            //     [theme.breakpoints.up("sm")]: {
            //         paddingRight: theme.spacing(6),
            //     },
            // },
            "& .card-services-container__suggestion": {
                marginBottom: theme.spacing(3),
                display: "flex",
                padding: theme.spacing(0),
                boxShadow: theme.shadows["0"],
                borderRadius: "5px",
                [theme.breakpoints.up("md")]: {
                    padding: theme.spacing(2),
                    boxShadow: theme.shadows["6"],
                },
            }
        },
        //!----------------------

        //! Variaciones
        "&.card-services-container--welcome": {
            background: "linear-gradient(to top, #e4e4e4 5%, #ffffff 25%)",
        },
        "&.card-services-container--quote, &.card-services-container--shopping-cart": {
            width: "100%",
            backgroundColor: theme.palette.grey["100"],
            boxShadow: "none",
            borderRadius: "0px",
            position: "relative",
            marginTop: theme.spacing(2),
            // Por defecto el card tiene overflow hidden
            overflow: "initial",
            [theme.breakpoints.up("sm")]: {
                marginTop: theme.spacing(0)
            },
            "& .card-services-container__content": {
                [theme.breakpoints.up("sm")]: {
                    padding: theme.spacing(4)
                }
            }
        },
        "&.card-services-container--quote": { 
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
        },
        "&.card-services-container-special": {
            paddingLeft: theme.spacing(0),
            paddingRight: theme.spacing(0),
            "& .MuiCardContent-root": {
                paddingLeft: theme.spacing(2),
                paddingRight: theme.spacing(2),
                [theme.breakpoints.up("md")]: {
                    paddingLeft: theme.spacing(4),
                    paddingRight: theme.spacing(4),
                }
            }
        }
        //!----------------------
    },

    "&.card": {
        width: "100%",
        boxShadow: "none",
        border: `2px solid ${theme.palette.grey["600"]}`,
        backgroundColor: theme.palette.common.white,
        [theme.breakpoints.up("sm")]: {
            backgroundColor: theme.palette.grey["50"],
        },
        position: "relative",
        //! Hijos
        "& .MuiCardContent-root": {
            padding: `${theme.spacing(3)} ${theme.spacing(4)}`,
            "& .card__header": {
                marginBottom: theme.spacing(2),
                "& .card__plan": {
                   fontWeight: "bolder",
                   color: theme.palette.primary.main,
                   paddingLeft: theme.spacing(1),
                   paddingTop: theme.spacing(1)
                },
            },
            "& .card__content": {
                "& .card__decoders": {
                    borderTop: `2px solid ${theme.palette.grey["400"]}`,
                    marginTop: theme.spacing(2),
                    paddingTop: theme.spacing(1),
                    "& .card__numbers-decoders": {
                        display: "flex",
                        alignItems: "flex-start",
                        justifyContent: "space-around",
                        marginBottom: theme.spacing(2),
                    },
                },
            },
            "& .card__image": {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: theme.spacing(1),
                marginBottom: theme.spacing(1),
                height: "60px",
                [theme.breakpoints.up("sm")]: {
                    height: "70px",
                },
                [theme.breakpoints.up("md")]: {
                    height: "80px",
                },
                img: {
                    width: "100%",
                    [theme.breakpoints.up("sm")]: {
                        width: "80%",
                    },
                    [theme.breakpoints.up("md")]: {
                        width: "75%",
                    },
                },
            },
        },
        "& .MuiCardActions-root": {
            padding: `${theme.spacing(3)} ${theme.spacing(4)}`,
            borderTop: `2px dashed ${theme.palette.grey["400"]}`,
            display: "block",
            marginBottom: theme.spacing(1),
            backgroundColor: theme.palette.grey["50"],
            "& .card__footer": {
                "& .card__prices": {
                    width: "100%",
                    display: "flex",
                    "&.card__prices--one": {
                        alignItems: "flex-start",
                        justifyContent: "space-around",
                    },
                    "&.card__prices--two": {
                        alignItems: "center",
                        justifyContent: "center",
                    },
                    "&.card__prices--quote": {
                        display: "block"
                    }
                },
                "& .card__button": {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: theme.spacing(2),
                },
            },
        },
        //!--------------------------

        //!Variaciones
        "&.card--quote": {
            "& .MuiCardContent-root": {
                "& .card__header": {
                    marginBottom: theme.spacing(1),
                }
            },
            "& .MuiCardActions-root": {
                borderTop: "none",
                padding: `${theme.spacing(1.5)} ${theme.spacing(4)} ${theme.spacing(2)}`,
                backgroundColor: theme.palette.grey["200"],
                marginBottom: theme.spacing(0)
            }
        },
        "&.card--quoteAdditional": {
            "& .MuiCardContent-root": {
                "& .card__header": {
                    marginBottom: theme.spacing(3),
                }
            }
        }
    },

    //Card Pequeño
    "&.card-special": {
        width: "100%",
        position: "relative",
        boxShadow: "none",
        border: `2px solid ${theme.palette.grey["400"]}`,
        backgroundColor: theme.palette.common.white,
        marginBottom: theme.spacing(.5),
        "& .MuiCardContent-root": {
            padding: `${theme.spacing(1)} ${theme.spacing(2)} ${theme.spacing(2)}`,
            [theme.breakpoints.up("sm")]: {
                padding: `${theme.spacing(1)} ${theme.spacing(3)} ${theme.spacing(2)}`,
            },
            [theme.breakpoints.up("md")]: {
                padding: `${theme.spacing(1)} ${theme.spacing(4)} ${theme.spacing(2)}`
            }
        },
    }
}));

export default StyledCard;
