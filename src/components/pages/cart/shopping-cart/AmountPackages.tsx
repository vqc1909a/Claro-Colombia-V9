import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

//!Interfaces
import {AmountPackagesProps} from "./interfaces";

//!Widgets
import Counter from "components/widgets/Counter";



function AmountPackages({numberPackages, totalPrice, setNumberPackages}: AmountPackagesProps){

    return (
        <Box sx={{ display: "flex", alignItems: "flex-start", justifyContent: {xs: "space-around", md: "space-between"}, pt: {xs: 2, md: 0}}}>
            {/* Esto tiene que ponder en tu widget */}
            <Counter value={numberPackages} setValue={setNumberPackages}></Counter>
            {/* ------------------------------ */}

            <Box sx={{textAlign: "right"}}>
                <Typography
                    variant="body1"
                    component="p"
                    sx={{
                        fontWeight: "lighter",
                        mb: 0.5,
                        color: (theme) =>
                            theme.palette.grey["600"],
                    }}
                >
                    Sub-total
                </Typography>
                <Typography variant="h6" component="p" sx={{fontWeight: "bolder"}}>${totalPrice * numberPackages}</Typography>
            </Box>
        </Box>
    )
}
export default AmountPackages;