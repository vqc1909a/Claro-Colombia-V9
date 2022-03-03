import Card from "@mui/material/Card";
import {styled} from "@mui/material/styles";

const StyledCard = styled(Card)(({theme}) => ({
 boxShadow: theme.shadows['5'], 
 textAlign: "center",
 borderRadius: "8px",
 "&.card-services": {
  textAlign: "initial",
  marginBottom: theme.spacing(8),
  "& .card-services__content": {
   paddingLeft: theme.spacing(2),
   paddingRight: theme.spacing(3),
   paddingTop: theme.spacing(3),
   paddingBottom: theme.spacing(3),
   [theme.breakpoints.up("sm")]: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(5),
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
   },
   "& .card-services__suggestion": {
     marginBottom: theme.spacing(3),
     display: "flex",
     padding: theme.spacing(0),
     boxShadow: theme.shadows['0'],
     borderRadius: "5px",
     [theme.breakpoints.up("md")]: {
      padding: theme.spacing(2),
      boxShadow: theme.shadows['6']
     }
   }
  },
  "&.card-services--welcome": {
    background: "linear-gradient(to top, #e4e4e4 10%, #ffffff 25%)"
  }
 }
}))

export default StyledCard;