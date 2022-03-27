import Tabs from "@mui/material/Tabs";
import {styled} from "@mui/material/styles"

const StyledTabsMobile = styled(Tabs)(({theme}) => ({
    backgroundColor: theme.palette.common.white,
    borderBottom: "none",
    borderTop: `2px solid ${theme.palette.grey["500"]}`,
    position: "relative",
    " .MuiTabs-indicator": {
        height: "7px",
        position: "absolute",
        top: 0,
    },
    " .MuiButtonBase-root": {
        padding: 0,
        paddingBottom: theme.spacing(1.5),
        paddingTop: theme.spacing(1.5),
        textTransform: "capitalize",
        fontSize: theme.spacing(2),
        minHeight: "initial",
        fontWeight: "bolder",
    },
    " .Mui-selected": {
        color: `${theme.palette.secondary.dark} !important`,
    },
}));
export default StyledTabsMobile
