
import {useState, useEffect} from "react";

import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Hidden from '@mui/material/Hidden';



//! StyledUi Components
import StyledContainer from "components/StyledUi/StyledContainer/StyledContainer";
import StyledGrid from "components/StyledUi/StyledGrid";
import StyledButton from "components/StyledUi/StyledButton";


//!React Router Dom
import {useNavigate, useOutletContext} from "react-router-dom";

//! Hooks
import useScrollToTop from "utils/hooks/useScrollToTop";

//!Widgets

//!Components
import PurchaseSummary from "../PurchaseSummary";

//!Actions
import * as CART_ACTIONS from "redux/slices/cart";

//!Selectors
import * as CART_SELECTORS from "redux/selectors/cart";


//!Hooks
import useAppDispatch from "utils/hooks/useAppDispatch";
import useAppSelector from "utils/hooks/useAppSelector";
import useForm from "utils/hooks/useForm";

//! Interfaces
import { FormEvent } from "interfaces";
import { TermsContract } from "redux/slices/reducerStateInterface";
import {ContextType} from "../interfaces";

function CartContractingServices(){
    //! Selectors
    const {setNumberStep} = useOutletContext<ContextType>();

    const {personalData} = useAppSelector(CART_SELECTORS.selectUserInformation);
    const {firstname, lastname} = personalData;
    const termsContractData = useAppSelector(CART_SELECTORS.selectTermsContract);
    
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    //! States

    const {acceptTermsContract, acceptClauseContract, acceptReceiveDigitalInvoice, form: termsContract, handleChangeRadio} = useForm<TermsContract>(termsContractData)

    const [isFormCompleted, setIsFormCompleted] = useState<boolean>(false);
        

    const handleSubmit: FormEvent = (event) => {
        event.preventDefault();
        setNumberStep(5);
        dispatch(CART_ACTIONS.saveTermsContract(termsContract));
        navigate("/cart/installation-schedule")
    }
    

    //!Effects
    useScrollToTop();

    //!Comprobar que los campos checked esten completos
    useEffect(() => {
        (Object.values(termsContract).every(term => term)) ? setIsFormCompleted(true) : setIsFormCompleted(false);

        //eslint-disable-next-line
    }, [termsContract]);

    return (
        <Fade in={true} timeout={1000} easing="ease-in-out">
            <Box
                sx={{
                    minHeight: "100vh",
                    backgroundColor: (theme) => theme.palette.common.white
                }}
            >
                <StyledContainer className="container-services">
                    <StyledGrid container spacing={4}>
                        <StyledGrid item xs={12} /* sx={{mx: {xs: 0, md: 4}}} */>
                            <Box sx={{display: {xs: "block", md: "flex"}}}>
                                {/* Contratación Servicios Fijos */}
                                <Box sx={{flex: 8, mb: 6, mr: {xs: 0, md: 6}}} /* sx={{pr: {xs: 0, md: 8}}} */>
                                    {/* Contratación Servicios */}
                                    <Box sx={{mb: 3}}>
                                        <Typography variant="h4" component="h1" sx={{mb: 4}}>Contratación Servicios Fijos</Typography>
                                        <Typography variant="h5" component="h2" sx={{fontWeight: "bolder", mb: {xs: 1, md: 1.5}}}>Contrato {firstname} {lastname}</Typography>

                                        <Box sx={{display: "flex", alignItems: "flex-start", flexDirection: {xs: "column", md: "row"}, borderBottom: theme => ({xs: "none",  md: `2px solid ${theme.palette.grey["300"]}`})}}>
                                            <Box sx={{flex: 5, order: {xs: 2, md: 1}, mr: {xs: 0, md: 3}, alignSelf: "stretch"}}>
                                                <Typography variant="body1" component="p" sx={{textAlign: "justify"}}>En forma previa a cada servicio, el usuario deberá leer, entender y aceptar todas las condiciones establecidas en Términos y Condiciones Generales y en las políticas de Privacidad de Claro. Este contrato se perfecciona al momento de la entrega.</Typography>
                                            </Box>
                                            <Box sx={{flex: 2, order: {xs: 1, md: 2}, alignSelf: "stretch"}}>
                                                <Hidden mdDown>
                                                    <Box sx={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
                                                        <StyledButton variant="contained" color="info" className="button-small" sx={{width: "100%", typography: "body2", m: 0, mb: 2}}>Descargar contrato</StyledButton>
                                                        <StyledButton variant="contained" color="info" className="button-small" sx={{width: "100%", typography: "body2", m: 0, mb: 2}}>Descargar claúsula permanencia</StyledButton>
                                                    </Box>
                                                </Hidden>
                                                <Hidden mdUp>
                                                    <Box sx={{mb: 3}}>
                                                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", py: 2, borderBottom: theme => `1px solid ${theme.palette.grey["300"]}`}}>
                                                            <Box sx={{flex: 1}}>
                                                                <Typography variant="body1" component="p" sx={{fontWeight: "bolder"}}>Contrato {firstname} {lastname}</Typography>
                                                            </Box>

                                                            <Box sx={{flex: 1}}>
                                                                <StyledButton variant="contained" color="info" className="button-small" sx={{width: "100%", typography: "body2", m: 0}}>Descargar</StyledButton>
                                                            </Box>
                                                        </Box>
                                                        
                                                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", py: 2, borderBottom: theme => `1px solid ${theme.palette.grey["300"]}`}}>
                                                            <Box sx={{flex: 1}}>
                                                                <Typography variant="body1" component="p" sx={{fontWeight: "bolder"}}>Claúsula Permanencia {firstname} {lastname}</Typography>
                                                            </Box>

                                                            <Box sx={{flex: 1}}>
                                                                <StyledButton variant="contained" color="info" className="button-small" sx={{width: "100%", typography: "body2", m: 0}}>Descargar</StyledButton>
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                </Hidden>
                                            </Box>

                                            {/* <Hidden mdUp>
                                                <Typography variant="body1" component="p" sx={{textAlign: "justify", mb: 1}}>En forma previa a cada servicio, el usuario deberá leer, entender y aceptar todas las condiciones establecidas en Términos y Condiciones Generales y en las políticas de Privacidad de Claro. Este contrato se perfecciona al momento de la entrega.</Typography>
                                            </Hidden> */}
                                        </Box>
                                    </Box>
                                    
                                    {/* Form Aceptar Terminos*/}
                                    <Box component="form" onSubmit={handleSubmit} autoComplete="off">
                                        <Box sx={{width: "100%", mb: 3}}>
                                            <FormControlLabel sx={{mb: 1}} control={<Checkbox value={acceptTermsContract} onChange={handleChangeRadio} color="info" name="acceptTermsContract" required/>} label={<Box component="div" sx={{typography: "body2", fontWeight: "bolder"}}>Con esta firma acepta los términos y condiciones del contrato</Box>}/>

                                            <FormControlLabel sx={{mb: 1}} control={<Checkbox value={acceptClauseContract} onChange={handleChangeRadio} color="info" name="acceptClauseContract" required/>} label={<Box component="div" sx={{typography: "body2", fontWeight: "bolder"}}>Con esta firma acepta la claúsula de permanencia del contrato</Box>}/>

                                            <FormControlLabel sx={{mb: 1}} control={<Checkbox value={acceptReceiveDigitalInvoice} onChange={handleChangeRadio} color="info" name="acceptReceiveDigitalInvoice" required/>} label={<Box component="div" sx={{typography: "body2", fontWeight: "bolder"}}>Con esta firma acepta recibir la factura solamente por medio digital</Box>}/>

                                        </Box>
                                        
                                        {/* Buttons */}
                                        <Box sx={{display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: {xs: "column", md: "row"}}}>
                                            <StyledButton variant="outlined" className="button-large button-outlined" color="info" sx={{typography: "body2", m: 0, order: {xs: 2, md: 1}, width: {xs: "100%", md: "initial"}}} onClick={() => navigate("/cart/user-information")}>{"< Volver"}</StyledButton>

                                            <StyledButton variant="contained" disabled={!isFormCompleted ? true : false} type="submit" sx={{typography: "body2", m: 0, order: {xs: 1, md: 2}, mb: {xs: 2, md: 0}, width: {xs: "100%", md: "initial"}}}>{"Agendar Instalación"}</StyledButton>
                                        </Box>
                                    </Box>
                                </Box>

                                {/* Resumen de Compra */}
                                <Box sx={{flex: 4, mb: 6}}>
                                   <PurchaseSummary></PurchaseSummary>
                                </Box>
                            </Box>
                        </StyledGrid>
                      
                    </StyledGrid>
                </StyledContainer>
            </Box>
        </Fade>

    );
};

export default CartContractingServices;
