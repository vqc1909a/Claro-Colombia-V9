import Alert from "@mui/material/Alert";
import { styled } from "@mui/material/styles";

const StyledAlert = styled(Alert)(({theme}) => ({
   "& .MuiTypography-root": {
       color: theme.palette.error.main
   }
}));

export default StyledAlert
