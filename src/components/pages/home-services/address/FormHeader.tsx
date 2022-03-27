import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import {FormHeaderArgs} from "./interfaces";

const FormHeader = ({number, description}: FormHeaderArgs) => (
  <Typography
    variant="body1"
    component="p"
    sx={{
      display: "flex",
      alignItems: "center",
      marginBottom: 3,
      fontWeight: "bolder"
    }}
  >
    <Box
      component="span"
      sx={{
        display: "inline-block",
        border: (theme) =>
          `3px solid ${theme.palette.primary.main}`,
        borderRadius: "50%",
        color: (theme) => theme.palette.primary.main,
        typography: "h5",
        fontWeight: "bolder",
        mr: 1,
        px: 1
      }}
    >
      {number}
    </Box>
    {description}
  </Typography>
)
export default FormHeader