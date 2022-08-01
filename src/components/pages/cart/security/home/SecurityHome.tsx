
import {useState, useEffect} from "react";
import Fade from "@mui/material/Fade";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import ListItemButton from '@mui/material/ListItemButton';
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import Alert from '@mui/material/Alert';

//!Icons
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

//!StyledUi Components
import StyledListItemText from "components/StyledUi/StyledListItemText";
import StyledContainer from "components/StyledUi/StyledContainer";
import StyledButton from "components/StyledUi/StyledButton";
import StyledTextField from "components/StyledUi/StyledTextField";
import StyledLoadingButton from "components/StyledUi/StyledLoadingButton";

//!Selector
import * as CART_SELECTORS from "redux/selectors/cart";
import * as PIN_SELECTORS from "redux/selectors/pin";

//!Services
import * as USER_SERVICES from "api/services/user";

//!Actions
import * as PIN_ACTIONS from "redux/slices/pin";

//!React Router Dom
import {useNavigate} from "react-router-dom";

//!Hooks
import useAppSelector from "utils/hooks/useAppSelector";
import useAppDispatch from "utils/hooks/useAppDispatch";

//!Interfaces
import { ChangeEvent, FormEvent } from "interfaces";

// const ListAdditionalInformationDefault = [
//     {
//         _id: uuid(),
//         label: "Teléfono",
//         description: <CellPhones></CellPhones>,
//         status: false,
//         notIsOnlyText: true
//     },
//     {
//         _id: uuid(),
//         label: "Correo",
//         description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum illum, eos explicabo animi quo aut?. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum illum, eos explicabo animi quo aut?.",
//         status: false,
//         notIsOnlyText: true
//     }
// ];

function CartSecurityHome() {
    let navigate = useNavigate();
    let dispatch = useAppDispatch();

    const {personalData} = useAppSelector(CART_SELECTORS.selectUserInformation);
    const isLoadingSendPIN = useAppSelector(PIN_SELECTORS.selectIsLoadingStateSend);
    const isErrorSendPIN = useAppSelector(PIN_SELECTORS.selectIsErrorStateSend);
    const messageSendPIN = useAppSelector(PIN_SELECTORS.selectMessageStateSend);
    const hasSendPIN = useAppSelector(PIN_SELECTORS.selectHasSendStateSend);
    const isLoadingVerifyPIN = useAppSelector(PIN_SELECTORS.selectIsLoadingStateVerify);
    const isErrorVerifyPIN = useAppSelector(PIN_SELECTORS.selectIsErrorStateVerify);
    const messageVerifyPIN = useAppSelector(PIN_SELECTORS.selectMessageStateVerify);

    const [isCollapseCellphone, setIsCollapseCellphone] = useState<boolean>(false);
    const [isCollapseEmail, setIsCollapseEmail] = useState<boolean>(false);
    const [userAuthenticationData, setUserAuthenticationData] = useState<{cellphone: string, email: string}>({
        "cellphone": "",
        "email": ""
    });
    const [isEmptyUserAuthenticationData, setIsEmptyUserAuthenticationData] = useState(false);
    const [PIN, setPIN] = useState("");
    const {cellphone, email} = userAuthenticationData;


    const handleChangeUserAuthenticationData: ChangeEvent = (e) => {
        setUserAuthenticationData(state => ({...state, [e.target.name]: e.target.value}));
    }

    const handleIsCollapseCellphone = () => {
        setIsEmptyUserAuthenticationData(false);
        setIsCollapseCellphone(state => !state);
        setIsCollapseEmail(false);
        setUserAuthenticationData(state => ({...state, "email": ""}))
    }

    const handleIsCollapseEmail = () => {
        setIsEmptyUserAuthenticationData(false);
        setIsCollapseEmail(state => !state);
        setIsCollapseCellphone(false);
        setUserAuthenticationData(state => ({...state, "cellphone": ""}))
    }

    const handleSubmitSendPIN = async () => {
        let isEmptyUserAuthenticationData = Object.values(userAuthenticationData).every(value => value === "");
        if(isEmptyUserAuthenticationData){
            setIsEmptyUserAuthenticationData(true);
        }else{
            setIsEmptyUserAuthenticationData(false);
            dispatch(PIN_ACTIONS.sendPinRequest());
            try{    
                const {data} = cellphone ? await USER_SERVICES.sendSMS({cellphone}) : await USER_SERVICES.sendEmail({email});
                dispatch(PIN_ACTIONS.sendPinSuccess({message: data.message}))
            }catch(err: any){
                const message = err.response ? err.response.data.message : err.message
                console.log(message);
                dispatch(PIN_ACTIONS.sendPinError({message}))
            }
        }
    }

    const handleChangePIN: ChangeEvent = (e) => {
        setPIN(e.target.value)
    }

    const handleSubmitVerifyPIN: FormEvent = async (e) => {
        e.preventDefault();
        dispatch(PIN_ACTIONS.resetMessageSendPin());
        dispatch(PIN_ACTIONS.verifyPinRequest())
        try{
            const {data} = cellphone ? await USER_SERVICES.verifySMS({cellphone, pin: PIN}) : await USER_SERVICES.verifyEmail({email, pin: PIN});
            dispatch(PIN_ACTIONS.verifyPinSuccess({message: data.message}));
            navigate("/cart/security/redirection");
        }catch(err: any){
            const message = err.response ? err.response.data.message : err.message
            console.log(message);
            dispatch(PIN_ACTIONS.verifyPinError({message}));
        }
    }

    useEffect(() => {
        dispatch(PIN_ACTIONS.resetSendPin());
        dispatch(PIN_ACTIONS.resetVerifyPin());

        //eslint-disable-next-line
    }, [])

	return (
		<Fade in={true} timeout={1000} easing="ease-in-out">
			<Box
				sx={{
					minHeight: "80vh",
                    backgroundColor: (theme) => theme.palette.common.white,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
				}}
			>
                <StyledContainer className="container-services">

                    <Box sx={{textAlign: "center", mb: 3}}>
                        <Typography component="p" variant="h5" sx={{mb: 1.5}}>AUTENTICACIÓN DE USUARIO</Typography>
                        <Typography component="p" variant="h6" sx={{fontWeight: "bolder", mb: 1.5}}>Método: PIN</Typography>
                        <Typography component="p" variant="h6" sx={{mb: 1.5}}>Cliente: {personalData.firstname} {personalData.lastname}</Typography>
                    </Box>

                    <Box sx={{width: {xs: "100%", md: "60%"}, mx: "auto", mb: 3}}>
                        {/* Cellphone */}
                        <Box>
                            <ListItemButton
                                onClick={handleIsCollapseCellphone}
                                sx={{px: {xs: 2, md: 2}, border: "1px dashed black"}}
                            >
                                {isCollapseCellphone ? <ExpandLess sx={{mr: 2}}/> : <ExpandMore sx={{mr: 2}}/>}
                                <StyledListItemText primary={"Teléfono"} />
                            </ListItemButton>

                            <Collapse in={isCollapseCellphone} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding sx={(theme) => ({borderLeft: `1px solid ${theme.palette.grey["300"]}`, borderRight: `1px solid ${theme.palette.grey["300"]}`, borderBottom: `1px solid ${theme.palette.grey["300"]}`})}>
                                    <Box sx={{py: 2, px: 6}}>
                                        <RadioGroup
                                            aria-labelledby="demo-radio-buttons-group-label"
                                            name="cellphone"
                                            value={cellphone}
                                            onChange={handleChangeUserAuthenticationData}
                                            // defaultValue="female"
                                        >
                                            <FormControlLabel value={personalData.cellphone} control={<Radio />} label={personalData.cellphone} />
                                            {personalData.additionalCellphone
                                                ?
                                                <FormControlLabel value={personalData.additionalCellphone} control={<Radio />} label={personalData.additionalCellphone} />
                                                :
                                                ""
                                            }
                                        </RadioGroup>
                                    </Box>
                                </List>
                            </Collapse>
                        </Box>

                        {/* Email */}
                        <Box>
                            <ListItemButton
                                onClick={handleIsCollapseEmail}
                                sx={{px: {xs: 2, md: 2}, border: "1px dashed black"}}
                            >
                                {isCollapseEmail ? <ExpandLess sx={{mr: 2}}/> : <ExpandMore sx={{mr: 2}}/>}
                                <StyledListItemText primary={"Correo"} />
                            </ListItemButton>

                            <Collapse in={isCollapseEmail} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding sx={(theme) => ({borderLeft: `1px solid ${theme.palette.grey["300"]}`, borderRight: `1px solid ${theme.palette.grey["300"]}`, borderBottom: `1px solid ${theme.palette.grey["300"]}`})}>
                                    <Box sx={{py: 2, px: 6}}>
                                        <RadioGroup
                                            aria-labelledby="demo-radio-buttons-group-label"
                                            name="email"
                                            value={email}
                                            onChange={handleChangeUserAuthenticationData}
                                            // defaultValue="female"
                                        >
                                            <FormControlLabel value={personalData.email} control={<Radio />} label={personalData.email} />
                                        </RadioGroup>
                                    </Box>
                                </List>
                            </Collapse>
                        </Box>
                        {/* Alerta de Campos vacíos */}
                        {
                            isEmptyUserAuthenticationData
                            ?
                            <Alert severity="error" sx={{mt: 1}}>Seleccione un método de autenticación</Alert>
                            :
                            ""
                        }
                        {/* Alerta de Error y Exito de Envío */}
                        {
                            (!isErrorSendPIN && messageSendPIN)
                            ?
                            <Alert severity="success" sx={{mt: 1}}>{messageSendPIN}</Alert>
                            :
                            ""
                        }
                        {
                            (isErrorSendPIN && messageSendPIN)
                            ?
                            <Alert severity="error" sx={{mt: 1}}>{messageSendPIN}</Alert>
                            :
                            ""
                        }
                        {/* Alerta de Error de Verificación */}
                        {
                            (isErrorVerifyPIN && messageVerifyPIN)
                            ?
                            <Alert severity="error" sx={{mt: 1}}>{messageVerifyPIN}</Alert>
                            :
                            ""
                        }

                        {/* Buttons */}
                        <Box sx={{display: "flex", alignItems: "center", justifyContent: "center", py: 3}}>
                            <StyledLoadingButton disabled={hasSendPIN} variant="contained" className="button-small" sx={{typography: "body1", margin: 0, borderRadius: "10px"/* , mr: 3 */}} onClick={handleSubmitSendPIN} loading={isLoadingSendPIN}>Enviar PIN</StyledLoadingButton>
                           {/*  <StyledButton disabled={hasSendPIN} variant="contained" className="button-small" sx={{typography: "body1", margin: 0, borderRadius: "10px"}}>Cancelar</StyledButton> */}
                        </Box>
                        <Box component="form" onSubmit={handleSubmitVerifyPIN} autoComplete="off">
                            {/* Field PIN */}
                            {
                                hasSendPIN
                                ?
                                 <Box sx={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                                    <Typography variant="body1" component="p" sx={{mr: 2}}>*Ingrese PIN</Typography>
                                    <StyledTextField className="field-normal" value={PIN} onChange={handleChangePIN} name="pin" type="text" required></StyledTextField>
                                </Box>
                                :
                                ""
                            }
                           
                            {/* Mensaje de autenticación de usuario */}
                            {/* {
                                messageHasSendPIN.message
                                ?
                                    messageHasSendPIN.status === 200
                                    ?
                                    <Alert severity="success" sx={{mt: 1}}>{messageHasSendPIN.message}</Alert>
                                    :
                                    <Alert severity="error" sx={{mt: 1}}>{messageHasSendPIN.message}</Alert>

                                :
                                ""
                            } */}

                            {/* Button Back and Validate */}
                            <Box sx={{display: "flex", alignItems: "center", justifyContent: "center", py: 3}}>
                                <StyledButton variant="contained" className="button-small" sx={{typography: "body1", margin: 0, borderRadius: "10px", width: "100%", backgroundColor: theme => theme.palette.grey["600"], mr: hasSendPIN ? 2 : 0}} onClick={() => navigate("/cart/user-information")}>Regresar</StyledButton>
                                {
                                    hasSendPIN
                                    ?
                                    <StyledLoadingButton type="submit" variant="contained" className="button-small" sx={{typography: "body1", borderRadius: "10px", width: "100%"}} loading={isLoadingVerifyPIN}>Validar</StyledLoadingButton>
                                    :
                                    ""
                                }
                            </Box>
                        </Box>

                    </Box>
                    
                </StyledContainer>
			</Box>				
		</Fade>
	);
}

export default CartSecurityHome;
