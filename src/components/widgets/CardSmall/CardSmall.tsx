import StyledCard from "components/StyledUi/StyledCard";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";

//!Helpers
import {separateThousands} from "utils/helpers/formatNumber";

//!Interfaces
import {CardSmallProps} from "./interfaces";

function CardSmall({totalPrice}: CardSmallProps) {
  return (
    <StyledCard sx={{backgroundColor: theme => theme.palette.primary.dark, color: theme => theme.palette.common.white, borderTop: theme => `5px solid ${theme.palette.secondary.light}`, width: "100%"}}>
        <CardContent sx={{px: 1, pt: .5, pb: 2}}>
            <Typography variant="overline" component="p">Paquete</Typography>                                    
            <Typography variant="body1" component="p" sx={{fontWeight: "bolder", lineHeight: 1.3}}>Arma Tu Play</Typography>
        </CardContent>
        <CardActions sx={{px: 1, pb: .5, borderTop: theme => `2px dashed ${theme.palette.common.white}`, display: "block"}}>
            <Typography variant="body1" component="p" sx={{fontWeight: "bolder"}}>${separateThousands(totalPrice)}</Typography>
            <Typography variant="overline" component="p" style={{margin: 0, fontSize: "0.5rem"}}>Mensuales</Typography>
            <Typography variant="overline" component="p" style={{margin: 0, fontSize: "0.5rem"}}>Impuestos Incluidos</Typography>
        </CardActions>
    </StyledCard>
  )
}

export default CardSmall