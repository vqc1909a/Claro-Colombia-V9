import {PurchaseSummaryProps} from "./interfaces"

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

//!Helpers
import {separateThousands} from "utils/helpers/formatNumber";

function PurchaseSummary({totalPrice, plansPrice, taxPrice, shippingAddress}: PurchaseSummaryProps){
    let {isFree, price} = shippingAddress;

     return (
        <Box sx={(theme) => ({pl: {xs: 0, md: 3}, borderLeft: {xs: "none", md: `2px solid ${theme.palette.grey['300']}`}, height: "100%", pt: {xs: 2, md: 0}, borderTop: {xs: `2px solid ${theme.palette.grey['300']}`,md: 0}})}>
            <Typography component="p" sx={{mb: 2, fontWeight: "bolder", typography: {xs: "h4", md: "h5"}}} style={{fontWeight: "bolder"}}>Resumen de Compra</Typography>

            {/* SubTotal 1 */}
            <Box sx={{display: "flex", alignItems: "center", justifyContent: "space-between", mb: 2}}>
                <Typography variant="h6" sx={{mb: .5, color: theme => theme.palette.grey['500']}}>SubTotal (1)</Typography>

                <Typography variant="h6" sx={{mb: .5, color: theme => theme.palette.grey['700']}}>${separateThousands(plansPrice)}</Typography>                                                
            </Box>

            {/* Impuestos */}
            <Box sx={{display: "flex", alignItems: "center", justifyContent: "space-between", mb: 1}}>
                <Typography variant="h6" sx={{mb: .5, color: theme => theme.palette.grey['500']}}>Impuestos</Typography>

                <Typography variant="h6" sx={{mb: .5, color: theme => theme.palette.grey['700']}}>${separateThousands(taxPrice)}</Typography>                                                
            </Box>
            
            {/* Instalación Gratis */}
            <Box sx={{display: "flex", alignItems: "center", justifyContent: "space-between", mb: 2}}>
                <Typography variant="h6" sx={{mb: .5, color: theme => theme.palette.grey['500']}}>Instalación {isFree ? "Gratis": ""}</Typography>

                <Typography variant="h6" sx={{mb: .5, color: theme => theme.palette.grey['700']}}>${separateThousands(price)}</Typography>                                                
            </Box>

            {/* Total */}
            <Box sx={{display: "flex", alignItems: "center", justifyContent: "space-between", mb: {xs: 0, md: 4}}}>
                <Typography variant="h6" sx={{mb: .5, fontWeight: "bolder"}}>Total</Typography>
                <Typography variant="h6" sx={{mb: .5, fontWeight: "bolder"}}>${separateThousands(totalPrice)}</Typography>                                                
            </Box>
        </Box> 
    ) 
}
export default PurchaseSummary