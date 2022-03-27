
import {ModifyOrRemoveThePackageProps} from "./interfaces"

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";


//! Widgets
import CardSmall from "components/widgets/CardSmall";

//! Icons
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';


function ModifyOrRemoveThePackage({totalPrice, numberPackages}: ModifyOrRemoveThePackageProps){

     return (
        <Box sx={{pr: {xs: 0, md: 4}}}>
            <Typography component="p" sx={{mb: 2, textAlign: {xs: "center", md: "initial"}, typography: {xs: "h4", md: "h5"}}} style={{fontWeight: "bolder"}} >Productos</Typography>
            <Box sx={{width: "120px", ml: {xs: "auto", md: 1.5}, mb: 2, mr: "auto"}}>
                <CardSmall totalPrice={totalPrice * numberPackages}></CardSmall>
            </Box>                                           

            <Box sx={{ml: {xs: 0, md: 1.5}, textAlign: {xs: "center", md: "initial"}}}>
                <Button variant="text" startIcon={<CreateOutlinedIcon></CreateOutlinedIcon>} color="info" size="small" sx={{textTransform: "capitalize", textDecoration: "underline"}}>Modificar</Button>
            </Box>
            <Box sx={{ml: {xs: 0, md: 1.5}, textAlign: {xs: "center", md: "initial"}}}>
                <Button variant="text" startIcon={<DeleteOutlineOutlinedIcon></DeleteOutlineOutlinedIcon>} color="info" size="small" sx={{textTransform: "capitalize", textDecoration: "underline"}}>Eliminar</Button>
            </Box>
        </Box>
    )
}
export default ModifyOrRemoveThePackage