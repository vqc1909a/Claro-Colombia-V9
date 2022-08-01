
import {useState, useEffect} from "react";

import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from "@mui/material/Link";

//! StyledUi Components
import StyledContainer from "components/StyledUi/StyledContainer/StyledContainer";
import StyledGrid from "components/StyledUi/StyledGrid";
import StyledInputLabel from "components/StyledUi/StyledInputLabel";
import StyledTextField from "components/StyledUi/StyledTextField";
import StyledButton from "components/StyledUi/StyledButton";
import StyledSelect from "components/StyledUi/StyledSelect";


//!React Router Dom
import {Link as RouterLink, useNavigate, useOutletContext} from "react-router-dom";

//! Hooks
import useAppSelector from "utils/hooks/useAppSelector";
import useScrollToTop from "utils/hooks/useScrollToTop";
import useForm from "utils/hooks/useForm";

//!Widgets

//!Components
import PurchaseSummary from "../PurchaseSummary";

//!Selectors
import * as CART_SELECTORS from "redux/selectors/cart";

//! Actions
import * as CART_ACTIONS from "redux/slices/cart";

//!Hooks
import useAppDispatch from "utils/hooks/useAppDispatch";

//! Interfaces
import { FormEvent, ChangeEvent } from "interfaces";
import { InstallationDataState, PersonalDataState} from "./interfaces";
import {ContextType} from "../interfaces";

function CartUserInformation(){
    //! Selectors
    let {personalData: personalInformation, installationData: installationInformation} = useAppSelector(CART_SELECTORS.selectUserInformation);
    let {address} = useAppSelector(CART_SELECTORS.selectShippingAddress);

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const {setNumberStep} = useOutletContext<ContextType>();

    //! States
    const {email, firstname, lastname, cellphone, additionalCellphone, documentType, documentNumber, form: personalData, handleChange: handleChangePersonalData, handleChangeSelect: handleChangePersonalDataSelect} = useForm<PersonalDataState>(personalInformation);

    const {whoReceives, nameOtherPerson, form: installationData, handleChange: handleChangeInstallationData} = useForm<InstallationDataState>(installationInformation);


    const [acceptTerms, setAcceptTerms] = useState<boolean>(false);
    const [isFormCompleted, setIsFormCompleted] = useState<boolean>(false);
    
        
    const handleChangeAcceptTerms: ChangeEvent = (event) => {
        setAcceptTerms((event.target as HTMLInputElement).checked)
    };

    const handleSubmit: FormEvent = (event) => {
        event.preventDefault();
        dispatch(CART_ACTIONS.saveUserInformation({
            personalData,
            installationData
        }));
        setNumberStep(3);
        navigate("/cart/security/welcome")
    }
    

    //!Effects
    useScrollToTop();

    //!Comprobar que los campos del formulario esten completos
    useEffect(() => {
        const {additionalCellphone, ...newPersonalData} = personalData;
        const valuesPersonalData = Object.values(newPersonalData);

        let valuesInstallationData: string[];
        if(whoReceives === "iAm"){
            let {nameOtherPerson, ...newInstallationData} = installationData;
            valuesInstallationData = Object.values(newInstallationData);
        }else{
            valuesInstallationData = Object.values(installationData);
        }

        (!valuesPersonalData.some(value => value === "") && !valuesInstallationData.some(value => value === "") && acceptTerms) ? setIsFormCompleted(true) : setIsFormCompleted(false);

        //eslint-disable-next-line
    }, [personalData, installationData, acceptTerms])

    return (
        <Fade in={true} timeout={1000} easing="ease-in-out">
            <Box
                sx={{
                    minHeight: "100vh",
                    backgroundColor: (theme) => theme.palette.common.white
                }}
            >
                {/* Personal Information */}
                <StyledContainer className="container-services">
                    <StyledGrid container spacing={4}>
                        <StyledGrid item xs={12} /* sx={{mx: {xs: 0, md: 4}}} */>
                            <Box sx={{display: {xs: "block", md: "flex"}}}>
                                {/* Formulario */}
                                <Box sx={{flex: 8, mb: 6, mr: {xs: 0, md: 6}}}>
                                    <Box component="form" onSubmit={handleSubmit} autoComplete="off" sx={{width: "100%"/* , pr: {xs: 0, md: 16}} */}}>
                                        {/* Form Datos Personales */}
                                        <Box sx={{mb: 4, pr: {xs: 0, md: 20}}}>
                                            <Typography variant="h4" component="h1" sx={{mb: 4}}>Datos Personales</Typography>
                                             <StyledGrid container spacing={3}>
                                                {/* Correo Electrónico */}
                                                <StyledGrid item xs={12}>
                                                    <StyledInputLabel htmlFor="email">
                                                        Correo electrónico (Este será tu usuario)
                                                    </StyledInputLabel>
                                                    <StyledTextField
                                                        id="email"
                                                        value={email}
                                                        onChange={handleChangePersonalData}
                                                        name="email"
                                                        type="email"
                                                        placeholder="Ej. carrera@hotmail.com" 
                                                        required
                                                    >
                                                    </StyledTextField>
                                                </StyledGrid>

                                                {/* Nombre */}
                                                <StyledGrid item xs={12} sm={6}>
                                                    <StyledInputLabel htmlFor="firstname">
                                                        Nombre
                                                    </StyledInputLabel>
                                                    <StyledTextField
                                                        id="firstname"
                                                        value={firstname}
                                                        onChange={handleChangePersonalData}
                                                        name="firstname"
                                                        placeholder="Ej. Andrea"
                                                        required
                                                    >
                                                    </StyledTextField>
                                                </StyledGrid>

                                                {/* Primer Apellido */}
                                                <StyledGrid item xs={12} sm={6}>
                                                    <StyledInputLabel htmlFor="lastname">
                                                        * Primer Apellido
                                                    </StyledInputLabel>
                                                    <StyledTextField
                                                        id="lastname"
                                                        value={lastname}
                                                        onChange={handleChangePersonalData}
                                                        name="lastname"
                                                        placeholder="Ej. Carrera"
                                                        required
                                                    ></StyledTextField>
                                                </StyledGrid>

                                                {/* Teléfono móvil */}
                                                <StyledGrid item xs={12} sm={6}>
                                                    <StyledInputLabel htmlFor="cellphone">
                                                        * Teléfono móvil
                                                    </StyledInputLabel>
                                                    <StyledTextField
                                                        id="cellphone"
                                                        value={cellphone}
                                                        onChange={handleChangePersonalData}
                                                        name="cellphone"
                                                        type="number"
                                                        required
                                                    >
                                                    </StyledTextField>
                                                </StyledGrid>

                                                {/* Teléfono Adicional */}
                                                <StyledGrid item xs={12} sm={6}>
                                                    <StyledInputLabel htmlFor="additionalCellphone">
                                                        Teléfono Adicional
                                                    </StyledInputLabel>
                                                    <StyledTextField
                                                        id="additionalCellphone"
                                                        value={additionalCellphone}
                                                        onChange={handleChangePersonalData}
                                                        name="additionalCellphone"
                                                        type="number"
                                                    >
                                                    </StyledTextField>
                                                </StyledGrid>

                                                {/* Tipo de Documento */}
                                                <StyledGrid item xs={12} sm={6}>
                                                    <StyledInputLabel htmlFor="documentType">
                                                        * Tipo de documento
                                                    </StyledInputLabel>
                                                    <StyledSelect
                                                        id="documentType"
                                                        value={documentType}
                                                        onChange={handleChangePersonalDataSelect}
                                                        name="documentType"
                                                        placeholder="Tipo de Documento"
                                                        required
                                                        displayEmpty={true}
                                                    >
                                                        <MenuItem value="" selected disabled>
                                                            Seleccionar Tipo de Documento
                                                        </MenuItem>

                                                        <MenuItem
                                                            value="citizenshipCard"
                                                        >
                                                            Cédula de ciudadanía
                                                        </MenuItem>
                                                        <MenuItem
                                                            value="dni"
                                                        >
                                                            DNI
                                                        </MenuItem>
                                                    </StyledSelect>
                                                </StyledGrid>

                                                {/* Número de Documento */}
                                                <StyledGrid item xs={12} sm={6}>
                                                    <StyledInputLabel htmlFor="documentNumber">
                                                        Número de documento
                                                    </StyledInputLabel>
                                                    <StyledTextField
                                                        id="documentNumber"
                                                        value={documentNumber}
                                                        type="number"
                                                        onChange={handleChangePersonalData}
                                                        name="documentNumber"
                                                        placeholder="Ej. 2145677899"
                                                        required
                                                    >
                                                    </StyledTextField> 
                                                </StyledGrid>
                                            </StyledGrid>
                                        </Box>
                                        
                                        {/* Form Datos de Instalación*/}
                                        <Box sx={{mb: {xs: 4, md: 6}, pr: {xs: 0, md: 10}}}>
                                            {/* Datos de tu instalación */}
                                            <Box sx={{mb: 3}}>
                                                <Typography variant="h4" component="h2">Datos de Instalación</Typography>
                                                <Typography variant="body1" component="p">Esta es la dirección seleccionada en tu cotización</Typography>
                                            </Box>
                                            {/* Dirección */}
                                            <Box sx={{mb: 3}}>
                                                <Typography variant="h6" component="p" sx={{fontWeight: "bolder"}}>Dirección</Typography>
                                                <Typography variant="h6" component="p">{address}</Typography>
                                                {/* <Typography variant="h6" component="p">Suba, Pinar, Bogotá, Cundimarca</Typography> */}
                                            </Box>
                                            {/* Quien Recibe y nombre de la persona     */}
                                            <Box sx={{py: 2, mb: 2, borderTop: theme => `1px solid ${theme.palette.grey[300]}`, borderBottom: theme => `1px solid ${theme.palette.grey[300]}`}}>
                                                <StyledGrid container spacing={3}>
                                                    {/* Quién Recibe */}
                                                    <StyledGrid item xs={12} md={6}>
                                                        <FormControl sx={{width: "100%"}}>
                                                            <FormLabel id="whoReceives" sx={{ml: 2, mb: 1.5}} color="info">* Quién recibe</FormLabel>
                                                            
                                                            <RadioGroup
                                                                row 
                                                                aria-labelledby="whoReceives"
                                                                name="whoReceives"
                                                                value={whoReceives}
                                                                onChange={handleChangeInstallationData}
                                                                sx={{height: "100%", display: "flex", justifyContent: "space-around", alignItems: "center"}}
                                                            >
                                                                <FormControlLabel value="iAm" control={<Radio color="info"/>} label="Yo" />
                                                                <FormControlLabel value="otherPerson" control={<Radio color="info" />} label="Otra persona" />
                                                            </RadioGroup>
                                                        </FormControl>
                                                    </StyledGrid>

                                                    {/* Nombre de la persona que recibe */}
                                                    <StyledGrid item xs={12} md={6}>
                                                        <StyledInputLabel htmlFor="nameOtherPerson">
                                                            Nombre de la persona que recibe
                                                        </StyledInputLabel>
                                                        <StyledTextField
                                                            id="nameOtherPerson"
                                                            value={nameOtherPerson}
                                                            onChange={handleChangeInstallationData}
                                                            name="nameOtherPerson"
                                                            type="text"
                                                            error={whoReceives === "otherPerson" ? true : false}
                                                        >
                                                        </StyledTextField>
                                                    </StyledGrid>
                                                </StyledGrid>
                                            </Box>

                                            {/* Aceptar Términos */}
                                            <FormControlLabel control={<Checkbox value={acceptTerms} onChange={handleChangeAcceptTerms} color="info" name="acceptterms" required/>} label={<Box component="span" sx={{typography: "body2", lineHeight: 1}}>Acepto <Link component={RouterLink} to="/" underline="always" sx={{color: theme => theme.palette.info.main, mt: 2}}>términos y condiciones de la tienda online</Link> y autorizo <Link component={RouterLink} to="/" underline="always" sx={{color: theme => theme.palette.info.main}}>el tratamiento de datos personales*</Link></Box>} />
                                        </Box>
                                        
                                        {/* Buttons */}
                                        <Box sx={{display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: {xs: "column", md: "row"}}}>
                                            <StyledButton variant="outlined" className="button-large button-outlined" color="info" sx={{typography: "body2", m: 0, order: {xs: 2, md: 1}, width: {xs: "100%", sm: "initial"}}} onClick={() => navigate("/cart")}>{"< Volver"}</StyledButton>

                                            <StyledButton variant="contained" disabled={!isFormCompleted ? true : false} type="submit" className="button-large" sx={{typography: "body2", m: 0, order: {xs: 1, md: 2}, mb: {xs: 2, md: 0}, width: {xs: "100%", sm: "initial"}}}>{"Continuar"}</StyledButton>
                                        </Box>
                                    </Box>
                                </Box>

                                {/* Resumen de Compra */}
                                <Box sx={{flex: 4,  mb: 6}}>
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

export default CartUserInformation;
