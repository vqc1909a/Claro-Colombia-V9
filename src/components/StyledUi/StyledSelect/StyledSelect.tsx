import Select from "@mui/material/Select";
import {styled} from "@mui/material/styles"

const StyledSelect = styled(Select)(({theme}) => ({
 width: "100%", 
 borderRadius: "0px",
 backgroundColor: theme.palette.common.white
}))
export default StyledSelect