import styled from "@emotion/styled";

const StyledFooter = styled("footer")(({theme}: any) => ({
    minHeight: "10vh",
    backgroundColor: theme.palette.grey["300"],
    "& .footer__top": {
        backgroundColor: theme.palette.grey["300"],
        marginBottom: theme.spacing(3),
        paddingTop: theme.spacing(1)
    },
    "& .footer__bottom": {
        backgroundColor: theme.palette.common.black,
        paddingTop: theme.spacing(2.5),
        paddingBottom: theme.spacing(2.5),
        color: theme.palette.common.white,

        "& > .MuiContainer-root": {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            [theme.breakpoints.up("sm")]: {
                flexDirection: "row",
            },
            "& > .MuiBox-root": {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                [theme.breakpoints.up("sm")]: {
                    flexDirection: "row",
                },
                "& .footer__logo": {
                    width: "65px",
                    marginRight: theme.spacing(0),
                    marginBottom: theme.spacing(4),
                    [theme.breakpoints.up("sm")]: {
                        marginRight: theme.spacing(2),
                        marginBottom: theme.spacing(1),
                    },
                },
            },
        },
    },
}));
export default StyledFooter
