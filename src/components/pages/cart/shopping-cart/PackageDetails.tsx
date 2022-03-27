import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Hidden from "@mui/material/Hidden";

//!Interfaces
import {PackageDetailsProps} from "./interfaces";


function PackageDetails({plans, totalPrice, numberPackages}: PackageDetailsProps){
    return (
    <Box sx={{pt: {xs: 2, md: 0}}}>
        <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2}}>
            <Typography variant="h6" component="p" sx={{fontWeight: "bolder"}}>Paquete Arma Tu Play</Typography>
            <Hidden mdDown>
                <Typography variant="h5" component="p" sx={{fontWeight: "lighter"}}>${totalPrice * numberPackages}</Typography>
            </Hidden>
        </Box>
        <Box>
            {plans.filter(plan => plan.category !== "adicionales").map(plan => (
                <Box sx={{mb: 2}} key={plan._id}>
                    <Typography variant="body2" sx={{fontWeight: "bolder"}}>{`${plan.category.charAt(0).toUpperCase()}${plan.category.slice(1)}`} {plan.plan}</Typography>
                    <Typography variant="body2" sx={{textAlign: "justify"}}>{plan.benefits.map(benefit => `${benefit} | `)}</Typography>
                </Box>
            ))}

            {plans.filter(plan => plan.category === "adicionales").length
            ?
            <Box sx={{mb: 2}}>
                <Typography variant="body2" sx={{fontWeight: "bolder"}}>Adicionales para tu hogar</Typography>

                <Typography variant="body2" sx={{textAlign: "justify"}}>{plans.filter(plan => plan.isSelected && plan.category === "adicionales").map(plan => `${plan.subcategory} ${plan.plan} | `)}</Typography>
            </Box>
            :   
            ""
            }
        </Box>
    </Box>
    )
}

export default PackageDetails