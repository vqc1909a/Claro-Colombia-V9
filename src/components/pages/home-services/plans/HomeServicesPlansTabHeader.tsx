import {HomeServicesPlansTabHeaderArgs} from "./interfaces";
import Box from "@mui/material/Box";

const HomeServicesPlansTabHeader = ({title}: HomeServicesPlansTabHeaderArgs) => {
  return (
     <Box
        component="p"
        sx={{
            typography: {xs: "body1", sm: "h6"},
            mb: {xs: 1, sm: 3},
            mt: 0,
            textAlign: {
                xs: "center",
                sm: "initial",
            },
        }}
        style={{fontWeight: "bolder"}}
    >
        Te ofrecemos los siguientes planes {title}:
    </Box>
  )
}

export default HomeServicesPlansTabHeader