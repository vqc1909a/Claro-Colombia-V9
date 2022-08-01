import {useEffect} from "react";

import Fade from "@mui/material/Fade";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";


//!Mui Components
import StyledImage from "components/StyledUi/StyledImage"
import StyledContainer from "components/StyledUi/StyledContainer"

//!React Router Dom
import {useNavigate, useOutletContext} from "react-router-dom";

//!Selector
import * as CART_SELECTORS from "redux/selectors/cart";

//!Hooks
import useAppSelector from "utils/hooks/useAppSelector";
import useScrollToTop from "utils/hooks/useScrollToTop";

//!Interfaces
import {ContextType} from "../../interfaces";

function CartSecurityRedirection() {
    const {personalData} = useAppSelector(CART_SELECTORS.selectUserInformation);
    const {setNumberStep} = useOutletContext<ContextType>();

	let navigate = useNavigate();

	useScrollToTop();
	useEffect(() => {
		setNumberStep(4);
		setTimeout(() => {
			navigate("/cart/contracting-services");
		}, 5000);
		
		//eslint-disable-next-line
	}, [])
	return (
		<Fade in={true} timeout={1000} easing="ease-in-out">
			<Box
				sx={{
					minHeight: {xs: "80vh", md: "70vh"},
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
                    backgroundColor: theme => theme.palette.common.white,
                    py: {xs: 5, sm: 8, md: 10}
				}}
			>
                <Box sx={{width: {xs: "90%", sm: "75%", md: "60%"}, mx: "auto", background: theme => theme.palette.grey["500"], alignSelf: "stretch", textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center", py: 4}}>
                    <StyledContainer>
                        <Box sx={{mb: 4}}>
                            <Typography component="p" variant="h5" sx={{mb: 1.5}}>AUTENTICACIÓN DE USUARIO</Typography>
                            <Typography component="p" variant="h6" sx={{fontWeight: "bolder", mb: 1.5}}>Método: PIN</Typography>
                            <Typography component="p" variant="h6" sx={{mb: 1.5}}>Cliente: {personalData.firstname} {personalData.lastname}</Typography>
                        </Box>

                        <Typography component="p" variant="h5" sx={{mb: 2}}>Redirigiendo...</Typography>

                        <Box sx={{width: {xs: "40%", sm: "30%", md: "20%"}, mx: "auto"}}>
                            <StyledImage src={`${window.location.origin}/images/security/logo2clarosinfondo.png`} alt="Logo Claro" />
                        </Box>
                    </StyledContainer>		
                </Box>
			</Box>				
		</Fade>
	);
}

export default CartSecurityRedirection;
