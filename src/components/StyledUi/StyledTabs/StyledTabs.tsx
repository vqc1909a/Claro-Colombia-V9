import Tabs from "@mui/material/Tabs";
import {styled} from "@mui/material/styles"

const StyledTabs = styled(Tabs)(({theme}) => ({
    borderBottom: `2px solid ${theme.palette.grey["500"]}`,
    " .MuiTabs-indicator": {
        height: "7px",
    },
    " .MuiButtonBase-root": {
        padding: 0,
        paddingBottom: theme.spacing(1.5),
        paddingTop: theme.spacing(1.5),
        textTransform: "capitalize",
        fontSize: theme.spacing(2.5),
        minHeight: "initial",
        fontWeight: "bolder",
    },
    " .Mui-selected": {
        color: `${theme.palette.secondary.dark} !important`,
    },
}));
export default StyledTabs