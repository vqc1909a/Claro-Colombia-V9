import {useEffect} from "react";

import Fade from "@mui/material/Fade";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Hidden from "@mui/material/Hidden";

//!Mui Components
import StyledImage from "components/StyledUi/StyledImage"
import StyledContainer from "components/StyledUi/StyledContainer"

//!React Router Dom
import {useNavigate} from "react-router-dom";


function CartSecurityWelcome() {
	let navigate = useNavigate();

	useEffect(() => {
		setTimeout(() => {
			navigate("/cart/security");
		}, 5000)

		//eslint-disable-next-line
	},[])

	return (
		<Fade in={true} timeout={1000} easing="ease-in-out">
			<Box
				sx={{
					minHeight: "100vh",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
                    backgroundColor: theme => theme.palette.primary.main,
					textAlign: "center"
				}}
			>
				<StyledContainer>
					<Box sx={{width: {xs: "35%", sm: "20%", md: "15%"}, mx: "auto", mb: 2}}>
						<StyledImage src={`${window.location.origin}/images/security/logo2clarosinfondo.png`} alt="Logo Claro" />
					</Box>
					<Typography component="p" sx={{typography: {xs: "body1", sm: "h6", md: "h5"}, color: theme => theme.palette.common.white, textAlign: "center", mb: 4}}>"Actualmente estamos redireccionando al portal de autenticación de identidad,<Hidden mdDown><br /></Hidden>por favor no actualices ni cierres esta página"</Typography>
				</StyledContainer>
			
			</Box>				
		</Fade>
	);
}

export default CartSecurityWelcome;
