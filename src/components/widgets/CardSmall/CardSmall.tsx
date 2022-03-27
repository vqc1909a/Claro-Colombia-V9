import StyledCard from "components/StyledUi/StyledCard";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";

//!Interfaces
import {CardSmallProps} from "./interfaces";

function CardSmall({totalPrice}: CardSmallProps) {
  return (
    <StyledCard sx={{backgroundColor: theme => theme.palette.primary.dark, color: theme => theme.palette.common.white, borderTop: theme => `5px solid ${theme.palette.secondary.light}`, width: "100%"}}>
        <CardContent sx={{p: 1, pb: 2}}>
            <Typography variant="overline" component="p">Paquete</Typography>                                    
            <Typography variant="h6" component="p" sx={{fontWeight: "bolder"}}>Arma <br></br>Tu Play</Typography>
        </CardContent>
        <CardActions sx={{p: 1, borderTop: theme => `2px dashed ${theme.palette.common.white}`, display: "block"}}>
            <Typography variant="h6" component="p" sx={{fontWeight: "bolder"}}>${totalPrice}</Typography>
            <Typography variant="overline" component="p" style={{margin: 0}}>Mensuales</Typography>
            <Typography variant="overline" component="p" style={{margin: 0}}>Impuestos Incluidos</Typography>
        </CardActions>
    </StyledCard>
  )
}

export default CardSmall