import AppBar from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";

const StyledAppBar = styled(AppBar)(({theme}) => ({
    boxShadow: "none",
    borderBottom: 0,
    [theme.breakpoints.up("md")]: {
        borderBottom: `3px solid ${theme.palette.info.main}`,
    },
    "& .header__top": {
        minHeight: "52px",
        display: "flex",
        alignItem: "center",
        backgroundColor: theme.palette.common.white,
        color: theme.palette.common.black,
        // padding: `${theme.spacing(1)} 0`,
        "& .header__login": {
            display: "flex",
            alignItems: "center",
            color: theme.palette.grey["600"],
            padding: 0,
            "& .header__shopping-cart": {
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItem: "center",
                "& .header__quantity-shopping-cart": {
                    padding: theme.spacing(0.25, 0.5),
                    borderRadius: "40%",
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.common.white,
                    position: "absolute",
                    top: "-5%",
                    right: "-5%",
                    fontSize: ".7rem",
                },
            },
        },
    },
    "& .header__center": {
        padding: 0,
        display: "flex",
        "& .header__logo": {
            width: "80px",
            marginBottom: theme.spacing(1),
        },
        "& .header__search": {
            flex: 2,
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center"
        },
        "& .header__search-mobile": {
            flex: 1,
            textAlign: "right"
        },
        "& .header__options": {
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        },
        "& .header__options-item": {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            "&:nth-of-type(1)": {
                marginRight: theme.spacing(4)
            }
        }
    },
    "& .header__bottom": {
        // maxHeight: "175px",
        backgroundColor: theme.palette.common.white,
        color: theme.palette.common.black,
        position: "relative",
        "& .header__menu": {
            width: "100%",
            display: "none",
            [theme.breakpoints.up("md")]: {
                display: "flex"
            },
            "& .header__item": {
                flex: 1, 
                listStyle: "none",
                "& .header__sub-item": {
                    paddingLeft: theme.spacing(4),
                    cursor: "pointer",
                    display: "block"
                }
            }
        },
        "& .header__bottom-float": {
            backgroundColor: theme.palette.common.white, 
            position: "absolute", 
            minHeight: "16vh", 
            width: "100%", 
            zIndex: theme.zIndex.snackbar, 
            borderBottom: `3px solid ${theme.palette.info.main}`
        }
    },
}));

export default StyledAppBar
