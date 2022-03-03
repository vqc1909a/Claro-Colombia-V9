import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export interface FormHeaderArgs {
  number: number,
  description: string
}

const FormHeader = ({number, description}: FormHeaderArgs) => (
  <Typography
    variant="body2"
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
        fontSize: "1.5rem",
        mr: 1,
        px: 1.25
      }}
    >
      {number}
    </Box>
    {description}
  </Typography>
)
export default FormHeader