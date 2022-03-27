import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const StyledButton = styled(Button)(({theme}) => ({
   margin: theme.spacing(1), 
   backgroundColor: theme.palette.primary.dark, 
   textTransform: "capitalize", 
   paddingTop: theme.spacing(1.5),
   paddingBottom: theme.spacing(1.5),
   paddingLeft: theme.spacing(6),
   paddingRight: theme.spacing(6),
   "&.button-large": {
      paddingLeft: theme.spacing(12),
      paddingRight: theme.spacing(12),
   },
   "&.button-outlined": {
      backgroundColor: "initial"
   }
}));

export default StyledButton
