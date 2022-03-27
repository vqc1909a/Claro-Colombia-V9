import LoadingButton from "@mui/lab/LoadingButton"
import { styled } from "@mui/material/styles";

const StyledLoadingButton = styled(LoadingButton)(({theme}) => ({
   margin: theme.spacing(1), 
   backgroundColor: theme.palette.primary.dark, 
   textTransform: "capitalize", 
   paddingTop: theme.spacing(1.5),
   paddingBottom: theme.spacing(1.5),
   paddingLeft: theme.spacing(5),
   paddingRight: theme.spacing(5)
}));

export default StyledLoadingButton
