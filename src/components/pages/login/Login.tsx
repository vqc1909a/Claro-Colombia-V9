
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Paper from "@mui/material/Paper"
import Link from "@mui/material/Link"
import Alert from '@mui/material/Alert';
import Fade from '@mui/material/Fade';

//! StyledUi Components
import StyledContainer from "components/StyledUi/StyledContainer"
import StyledGrid from "components/StyledUi/StyledGrid"
import StyledTextField from "components/StyledUi/StyledTextField"
import StyledInputLabel from "components/StyledUi/StyledInputLabel"
import StyledLoadingButton from "components/StyledUi/StyledLoadingButton"

//! React Router Dom
import {Link as RouterLink, useNavigate} from "react-router-dom";
import StyledImage from "components/StyledUi/StyledImage"

//!Redux
import useAppDispatch from "utils/hooks/useAppDispatch";
import {useSelector} from "react-redux";

//! Interfaces
import {FormEvent} from "interfaces";
import {FormLoginState} from "./interfaces"

//!Hooks
import useForm from "utils/hooks/useForm";
import useScrollToTop from "utils/hooks/useScrollToTop";

//!Actions
import * as USER_ACTIONS from "redux/slices/user";

//!Services
import * as USER_SERVICES from "api/services/user";

//!Selectors
import * as USER_SELECTORS from "redux/selectors/user";

function Login(){
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const isLoading = useSelector(USER_SELECTORS.selectIsLoading);
    const isError = useSelector(USER_SELECTORS.selectIsError);
    const message = useSelector(USER_SELECTORS.selectMessage);

    const {email, password, form, handleChange} = useForm<FormLoginState>({
        email: "",
        password: ""
    })      

    const handleSubmit: FormEvent = async (event) => {
        event.preventDefault();
        
        let user = form;        
        try{
            dispatch(USER_ACTIONS.loginRequest());
            const {data} = await USER_SERVICES.loginUser({user});
            dispatch(USER_ACTIONS.loginSuccess({...data}));

            //! Verificar si hay planes de servicios hogar y redirigir al carrito, caso contrario redirigir al home, no olvidar cuando cierrres sesión eliminara este key del storage
            let isHomeServicesPlans: boolean = sessionStorage.getItem("homePlans") ? true : false;
            return !isHomeServicesPlans ? navigate("/") : navigate("/cart") 

        }catch(err: any){
            const message = err.response ? err.response.data : err.message;
            dispatch(USER_ACTIONS.loginError({message}));
        }

    }

    //! Effects
    useScrollToTop();

    return (
        <Fade in={true} timeout={1000} easing="ease-in-out">
            <Box sx={{ minHeight: "140vh", display: "flex", justifyContent: "center", alignItems: "center", pb: 18, backgroundImage: "url('images/login/background4.jpg')", backgroundPosition: "center center", backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
                    <StyledContainer>
                        <Typography variant="h2" component="h1" sx={{mb: 2, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bolder", cursor: "pointer" }} onClick={() => navigate("/")}>
                            Tienda
                            <Box sx={{width: {xs: "120px", sm: "150px", md: "175px"}, ml: 2, mb: 2}}>
                                <StyledImage
                                    src="/icons/claroperulogo2.svg"
                                    alt="claro-peru-logo"
                                    sx={{"& path": {color: "black"}}}
                                ></StyledImage>
                            </Box>
                        </Typography>
                        <Paper elevation={6} sx={{
                            maxWidth: "600px", 
                            margin: "0 auto",
                            py: {xs: 3, sm: 4}  
                        }}>
                            <Typography variant="h4" component="h2" sx={{color: (theme) => theme.palette.grey['500'], mb: 4, textAlign: "center"}}>
                                Inicio de Sesión                    
                            </Typography>

                            

                            <Box component="form" onSubmit={handleSubmit} sx={(theme) => ({
                            "& .MuiTextField-root": { m: 1},
                            paddingLeft: theme.spacing(3),
                            paddingRight: theme.spacing(5),
                            [theme.breakpoints.up("sm")]: {
                                paddingLeft: theme.spacing(6),
                                paddingRight: theme.spacing(8),
                            },
                            [theme.breakpoints.up("md")]: {
                                paddingLeft: theme.spacing(12),
                                paddingRight: theme.spacing(14),
                            }
                            })} autoComplete="off">
                                {isError ? <Alert sx={{mb: 1}} severity="error">{message}</Alert>: ""}
                                <StyledGrid container spacing={3} sx={{mb: 5}}>
                                    <StyledGrid item xs={12}>
                                        <StyledInputLabel
                                            htmlFor="email"
                                            sx={{
                                                typography: "h6"
                                            }}
                                        >                                    
                                            Correo electrónico 
                                        </StyledInputLabel>
                                        <StyledTextField
                                            id="email"
                                            value={email}
                                            required
                                            onChange={handleChange}
                                            name="email"
                                        ></StyledTextField>
                                    </StyledGrid>
                                    <StyledGrid item xs={12}>
                                        <StyledInputLabel
                                            htmlFor="password"
                                            sx={{
                                                typography: "h6"
                                            }}
                                        >
                                            <Typography variant="h6" component="span">
                                                Contraseña 
                                            </Typography>
                                        </StyledInputLabel>
                                        <StyledTextField
                                            id="password"
                                            value={password}
                                            required
                                            onChange={handleChange}
                                            name="password"
                                        ></StyledTextField>
                                    </StyledGrid>    
                                </StyledGrid>

                                <StyledLoadingButton
                                    type="submit"
                                    loading={isLoading}
                                    variant="contained"
                                    sx={{typography: "body1", width: "100%", mb: 3}}
                                >
                                    Continuar
                                </StyledLoadingButton>
                                
                                <Link component={RouterLink} to="/olvidado" underline="none" sx={{
                                    typography: "h6",
                                    color: (theme) => theme.palette.info.main,   
                                    display: "block",
                                    textAlign: "center"                     
                                }} >¿Has olvidado tu contraseña?</Link>

                                <Link component={RouterLink} to="/signup" underline="none" sx={{
                                    typography: "h6",
                                    color: (theme) => theme.palette.info.main,   
                                    display: "block",
                                    textAlign: "center"                     
                                }} ><Box component="span" sx={{color: (theme) => theme.palette.grey['700']}}>¿No tienes una cuenta?</Box> Regístrate</Link>
                            </Box>
                        </Paper>
                    </StyledContainer>
            </Box>
        </Fade> 
    )
}
export default Login