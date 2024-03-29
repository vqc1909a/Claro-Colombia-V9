import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";

const StyledContainer = styled(Container)(({theme}) => ({
 // Por defecto el padding a los laterales es de 24px => theme.spacing(3) => 1.5rem
 [theme.breakpoints.down('sm')]: {
  "&.container-hero": {
   paddingLeft: 0, 
   paddingRight: 0,
  }  
 },
 [theme.breakpoints.up('md')]: {
  paddingLeft: "3rem", 
  paddingRight: "3rem",
  "&.container-home": {
   paddingLeft: "6rem", 
   paddingRight: "6rem"
  },
  "&.container-services": {
   paddingLeft: "1rem", 
   paddingRight: "1rem",
  }
 }
}))

export default StyledContainer