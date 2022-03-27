import Grid from "@mui/material/Grid";
import {styled} from "@mui/material/styles";

const StyledGrid = styled(Grid)(({theme}) => ({
    "&.hero": {
        "& .hero__intro": {
            h1: {
                fontWeight: "bolder",
            },
        },
        "& .hero__content": {
            width: "100%",
            height: "100%"
        },
    },

    "&.home-section": {
        "& .home-section__feature": {
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1),
            width: "100%",
            "& .home-section__item": {
                border: `2px solid ${theme.palette.primary.dark}`,
                cursor: "pointer",
                "&--cellphones": {
                    height: "42vh",
                    [theme.breakpoints.up("sm")]: {
                        height: "47vh",
                    },
                    [theme.breakpoints.up("md")]: {
                        height: "52vh",
                    },
                },
                "&--sim": {
                    border: 0,
                    height: "42vh",
                    [theme.breakpoints.up("sm")]: {
                        height: "47vh",
                    },
                    [theme.breakpoints.up("md")]: {
                        height: "52vh",
                    },
                },
                "&--plans": {
                    border: 0,
                    height: "27vh",
                    [theme.breakpoints.up("sm")]: {
                        height: "30vh",
                    },
                    [theme.breakpoints.up("md")]: {
                        height: "32vh",
                    },
                },
            }
        }
    }
}));
export default StyledGrid;
