import LoadingButton from "@mui/lab/LoadingButton"
import { styled } from "@mui/material/styles";

const StyledLoadingButton = styled(LoadingButton)(({theme}) => ({
   // margin: theme.spacing(1), 
   backgroundColor: theme.palette.primary.dark, 
   textTransform: "capitalize", 
   paddingTop: theme.spacing(1.5),
   paddingBottom: theme.spacing(1.5),
   paddingLeft: theme.spacing(6),
   paddingRight: theme.spacing(6),
   "&.button-small": {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
   },
   "&.button-large": {
      paddingLeft: theme.spacing(12),
      paddingRight: theme.spacing(12),
   },
   "&.button-outlined": {
      backgroundColor: "initial"
   }
}));

export default StyledLoadingButton
