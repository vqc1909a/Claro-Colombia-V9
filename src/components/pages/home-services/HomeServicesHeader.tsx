import Hidden from "@mui/material/Hidden";
import Box from "@mui/material/Box";

function Header() {
  return (
    <Box sx={{pl: {xs: 0, md: 4 }, mb: 4, pt: { xs: 4, sm: 8, md: 16 }}}>
      <Box
        component="h1"
        sx={{ typography: {xs: "h3", sm: "h3", md: "h4"}, m: 0 }} style={{fontWeight: "bolder"}}
      >
        <Box
          component="span"
          sx={{
            display: "inline-block",
            color: (theme) => theme.palette.primary.main
          }}
        >
          Bienvenido 
        </Box>{" "}<Hidden mdUp><br></br></Hidden>
        a Arma Tu Play
      </Box>
      <Box
        component="p"
        sx={{
          typography: {xs: "body1", md: "h5"},
          mt: {xs: 1, md: 0}
        }}
      >
        Descubre la mejor combinación{" "}
        <Hidden mdUp>
          <br />
        </Hidden>
        de entretenimiento {" "}
        <Hidden mdDown>
          <br />
        </Hidden>con los servicios de Claro hogar.
      </Box>
    </Box>
  );
}
export default Header;
