
import {ModifyOrRemoveThePackageProps} from "./interfaces"

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";


//! Widgets
import CardSmall from "components/widgets/CardSmall";

function ModifyOrRemoveThePackage({totalPrice}: ModifyOrRemoveThePackageProps){

     return (
        <Box sx={{pr: {xs: 0, md: 3}}}>
            <Typography component="p" sx={{mb: 3, textAlign: {xs: "center", md: "initial"}, typography: {xs: "h4", md: "h5"}}} style={{fontWeight: "bolder"}} >Productos</Typography>
            <Box sx={{width: {xs: "100px", md: "120px"}, pl: {xs: 0, md: 1.5}, mb: 2, mx: "auto"}}>
                <CardSmall totalPrice={totalPrice}></CardSmall>
            </Box>                                           
        </Box>
    )
}
export default ModifyOrRemoveThePackage