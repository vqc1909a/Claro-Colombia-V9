
import {useState} from "react";

import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from "@mui/material/Link";
import CardContent from "@mui/material/CardContent";

//! StyledUi Components
import StyledContainer from "components/StyledUi/StyledContainer/StyledContainer";
import StyledGrid from "components/StyledUi/StyledGrid";
import StyledInputLabel from "components/StyledUi/StyledInputLabel";
import StyledTextField from "components/StyledUi/StyledTextField";
import StyledButton from "components/StyledUi/StyledButton";
import StyledCard from "components/StyledUi/StyledCard";


//!React Router Dom
import {Link as RouterLink, useNavigate} from "react-router-dom";

//! Hooks
import useAppSelector from "utils/hooks/useAppSelector";
import useScrollToTop from "utils/hooks/useScrollToTop";

//!Widgets
import CardSmall from "components/widgets/CardSmall";

//!Selectors
import * as CARD_SELECTORS from "redux/selectors/cart";


let sizeWidth: number = window.innerWidth;
interface InstallationDataState {
    whoreceives: string,
    nameotherperson: string
} 

interface PersonalDataState {
    email: string,
    firstname: string,
    lastname: string,
    cellphone: number,
    additionalcellphone: number,
    documenttype: string,
    documentnumber: number
} 



function UserInformation(){
    let plans = useAppSelector(CARD_SELECTORS.selectItems);
    let plansPrice = useAppSelector(CARD_SELECTORS.selectItemsPrice);
    let taxPrice = useAppSelector(CARD_SELECTORS.selectTaxPrice);
    let numberPackages = useAppSelector(CARD_SELECTORS.selectNumberPackages);
    let shippingAddress = useAppSelector(CARD_SELECTORS.selectShippingAddress);
    let totalPrice = useAppSelector(CARD_SELECTORS.selectTotalPrice);

    let {address, isFree, price} = shippingAddress;


    const navigate = useNavigate();
    const [{email, firstname, lastname, cellphone, additionalcellphone, documenttype, documentnumber}, setPersonalData] = useState<PersonalDataState>({
        email: "",
        firstname: "",
        lastname: "",
        cellphone: 999999999,
        additionalcellphone: 999999999,
        documenttype: "",
        documentnumber: 999999999
    });


    const [{whoreceives, nameotherperson}, setInstallationData] = useState<InstallationDataState>({
        whoreceives: "iam",
        nameotherperson: ""
    });

    const [acceptTerms, setAcceptTerms] = useState(false);

    //! Functions

    const handleChangePersonalData = (e: React.ChangeEvent<HTMLInputElement>) => {
          setPersonalData(previousValue => ({
            ...previousValue,
            [e.target.name]: e.target.value
        }));
    }
    const handleChangeInstallationData = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInstallationData(previousValue => ({
            ...previousValue,
            [e.target.name]: e.target.value
        }));
    };
    
    const handleChangeAcceptTerms = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAcceptTerms(event.target.checked)
    };

    //! Functions
    const reportWindowSize = () => {
        sizeWidth = window.innerWidth;
        console.log(sizeWidth);
    }
    window.addEventListener('resize', reportWindowSize);

    //!Effects
    useScrollToTop();

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
                        <StyledGrid item xs={12} sx={{mx: {xs: 0, md: 4}}}>
                            <StyledGrid container spacing={4}>
                                {/* Formulario */}
                                <StyledGrid item xs={12} md={7} sx={{mb: {xs: 0, md: 8}}}>
                                    <Box sx={{width: "100%"/* , pr: {xs: 0, md: 16}} */}}>
                                        {/* Form Datos Personales*/}
                                        <Box sx={{mb: 5, pr: {xs: 0, md: 10}}}>
                                            <Typography variant="h4" component="h1" sx={{mb: 4}}>Datos Personales</Typography>
                                            <Box
                                                component="form"
                                                sx={{
                                                    "& .MuiTextField-root": {m: 1},
                                                }}
                                                autoComplete="off"
                                            >
                                                <StyledGrid container spacing={3}>
                                                    {/* Correo Electrónico */}
                                                    <StyledGrid item xs={12}>
                                                        <StyledInputLabel htmlFor="email">
                                                            * Correo electrónico (Este será tu usuario)
                                                        </StyledInputLabel>
                                                        <StyledTextField
                                                            id="email"
                                                            value={email}
                                                            onChange={handleChangePersonalData}
                                                            name="email"
                                                            type="email"
                                                            placeholder="Ej. carrera@hotmail.com"
                                                        >
                                                        </StyledTextField>
                                                    </StyledGrid>

                                                    {/* Nombre */}
                                                    <StyledGrid item xs={12} sm={6}>
                                                        <StyledInputLabel htmlFor="firstname">
                                                            * Nombre
                                                        </StyledInputLabel>
                                                        <StyledTextField
                                                            id="firstname"
                                                            value={firstname}
                                                            onChange={handleChangePersonalData}
                                                            name="firstname"
                                                            placeholder="Ej. Andrea"
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
                                                            placeholder="2145677899"
                                                        >
                                                        </StyledTextField>
                                                    </StyledGrid>

                                                    {/* Teléfono Adicional */}
                                                    <StyledGrid item xs={12} sm={6}>
                                                        <StyledInputLabel htmlFor="additionalcellphone">
                                                            Teléfono Adicional
                                                        </StyledInputLabel>
                                                        <StyledTextField
                                                            id="additionalcellphone"
                                                            value={additionalcellphone}
                                                            onChange={handleChangePersonalData}
                                                            name="additionalcellphone"
                                                            type="number"
                                                            placeholder="2145677899"
                                                        >
                                                        </StyledTextField>
                                                    </StyledGrid>

                                                    {/* Tipo de Documento */}
                                                    <StyledGrid item xs={12} sm={6}>
                                                        <StyledInputLabel htmlFor="documenttype">
                                                            * Tipo de documento
                                                        </StyledInputLabel>
                                                        <StyledTextField
                                                            id="documenttype"
                                                            select
                                                            value={documenttype}
                                                            onChange={handleChangePersonalData}
                                                            name="documenttype"
                                                            placeholder="Tipo de Documento"
                                                        >
                                                            <MenuItem
                                                                value=""
                                                            >
                                                                ---Seleccionar Tipo de Documento---
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
                                                        </StyledTextField>
                                                    </StyledGrid>

                                                    {/* Número de Documento */}
                                                    <StyledGrid item xs={12} sm={6}>
                                                        <StyledInputLabel htmlFor="documentnumber">
                                                            Número de documento
                                                        </StyledInputLabel>
                                                        <StyledTextField
                                                            id="documentnumber"
                                                            value={documentnumber}
                                                            type="number"
                                                            onChange={handleChangePersonalData}
                                                            name="documentnumber"
                                                            placeholder="Ej. 2145677899"
                                                        >
                                                        </StyledTextField> 
                                                    </StyledGrid>
                                                </StyledGrid>
                                            </Box>
                                        </Box>
                                        
                                        {/* Form Datos de Instalación*/}
                                        <Box sx={{mb: 5}}>
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
                                            <Divider></Divider>
                                            <Box sx={{py: 2}}>
                                                <Box
                                                    component="form"
                                                    sx={{
                                                        "& .MuiTextField-root": {m: 1},
                                                    }}
                                                    autoComplete="off"
                                                    >
                                                    <StyledGrid container spacing={3}>
                                                        {/* Quién Recibe */}
                                                        <StyledGrid item xs={12} md={6}>
                                                            <FormControl sx={{width: "100%"}}>
                                                                <FormLabel id="whoreceives" sx={{ml: 2, mb: 1.5}} color="info">* Quién recibe</FormLabel>
                                                                
                                                                <RadioGroup
                                                                    row 
                                                                    aria-labelledby="whoreceives"
                                                                    name="whoreceives"
                                                                    value={whoreceives}
                                                                    onChange={handleChangeInstallationData}
                                                                    sx={{height: "100%", display: "flex", justifyContent: "space-around", alignItems: "center"}}
                                                                >
                                                                    <FormControlLabel value="iam" control={<Radio color="info"/>} label="Yo" />
                                                                    <FormControlLabel value="otherperson" control={<Radio color="info" />} label="Otra persona" />
                                                                </RadioGroup>
                                                            </FormControl>
                                                        </StyledGrid>

                                                        {/* Nombre de la persona que recibe */}
                                                        <StyledGrid item xs={12} md={6}>
                                                            <StyledInputLabel htmlFor="nameotherperson">
                                                                Nombre de la persona que recibe
                                                            </StyledInputLabel>
                                                            <StyledTextField
                                                                id="nameotherperson"
                                                                value={nameotherperson}
                                                                onChange={handleChangeInstallationData}
                                                                name="nameotherperson"
                                                                type="text"
                                                            >
                                                            </StyledTextField>
                                                        </StyledGrid>
                                                    </StyledGrid>
                                                </Box>
                                            </Box>
                                            <Divider></Divider>

                                            {/* Aceptar Términos */}
                                            <FormControlLabel control={<Checkbox value={acceptTerms} onChange={handleChangeAcceptTerms} color="info" name="acceptterms"/>} label={<Box component="p" sx={{typography: "body2"}}>Acepto <Link component={RouterLink} to="/" underline="always" sx={{color: theme => theme.palette.info.main, mt: 2}}>términos y condiciones de la tienda online</Link> y autorizo <Link component={RouterLink} to="/" underline="always" sx={{color: theme => theme.palette.info.main}}>el tratamiento de datos personales*</Link></Box>} />
                                        </Box>
                                        
                                        {/* Buttons */}
                                        <Box sx={{display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: {xs: "column", md: "row"}}}>
                                            <StyledButton variant="outlined" className="button-large button-outlined" color="info" sx={{typography: "body2", m: 0, order: {xs: 2, md: 1}, width: {xs: "100%", sm: "initial"}}} onClick={() => navigate("/cart")}>{"< Volver"}</StyledButton>
                                            <StyledButton variant="contained" className="button-large" sx={{typography: "body2", m: 0, order: {xs: 1, md: 2}, mb: {xs: 2, md: 0}, width: {xs: "100%", sm: "initial"}}} onClick={() => navigate("/seguridad")}>{"Continuar"}</StyledButton>
                                        </Box>
                                    </Box>
                                </StyledGrid>

                                {/* Resumen de Compra */}
                                <StyledGrid item xs={12} md={5}>
                                    <StyledCard className={`card-services-container ${sizeWidth >= 1024 ? "card-services-container--shopping-cart" : ""}`}>
                                            <CardContent className="card-services-container__content">
                                                <Typography variant="h5" component="p" sx={{mb: 2, fontWeight: "bolder"}}>Resumen de Compra</Typography>
                                                
                                                <StyledGrid container spacing={3}>
                                                    <StyledGrid item xs={12} sm={4}>
                                                        <CardSmall totalPrice={totalPrice * numberPackages}></CardSmall>
                                                    </StyledGrid>

                                                    <StyledGrid item xs={12} sm={8}>
                                                        <Box sx={{mb: 2}}>
                                                            <Typography variant="h6" component="p">Paquete Arma tu Play</Typography>
                                                            <Typography variant="body2" component="p">
                                                            {plans.filter(plan => plan.category !== "adicionales").map(plan => `${plan.category.charAt(0).toUpperCase()}${plan.category.slice(1)} ${plan.plan} | `
                                                            )}
                                                            adicionales: {plans.filter(plan => plan.category === "adicionales").map(plan => `${plan.subcategory} ${plan.plan} | `)}
                                                            </Typography>
                                                        </Box>

                                                        <Typography variant="h6" component="p" sx={{fontWeight: "bolder"}}>Precio ${totalPrice * numberPackages}</Typography>
                                                        <Typography variant="h6" component="p" sx={{fontWeight: "bolder"}}>Cant. {numberPackages}</Typography>
                                                    </StyledGrid>

                                                    <StyledGrid item xs={12}>
                                                        <Box sx={{py: 2, my: 2, borderBottom: theme => `2px solid ${theme.palette.grey["400"]}`, borderTop: theme => `2px solid ${theme.palette.grey["300"]}` }}
                                                        >
                                                            <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2}}>
                                                                <Typography variant="body1" component="p" sx={{fontWeight: "bolder"}} >Subtotal</Typography>
                                                                <Typography variant="body1" component="p" sx={{fontWeight: "bolder"}} >${plansPrice * numberPackages}</Typography>
                                                            </Box>
                                                            <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1}}>
                                                                <Typography variant="body1" component="p" >Impuestos</Typography>
                                                                <Typography variant="body1" component="p" >${taxPrice *  numberPackages}</Typography>
                                                            </Box>
                                                            <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2}}>
                                                                <Typography variant="body1" component="p" >Instalación {isFree ? "Gratis": ""}</Typography>
                                                                <Typography variant="body1" component="p" >${price}</Typography>
                                                            </Box>
                                                            <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                                                                <Typography variant="h6" component="p" sx={{fontWeight: "bolder"}}>TOTAL:</Typography>
                                                                <Typography variant="h6" component="p" sx={{fontWeight: "bolder"}}>${totalPrice * numberPackages}</Typography>
                                                            </Box>
                                                        </Box>
                                                    </StyledGrid>
                                                </StyledGrid>

                                            </CardContent>
                                    </StyledCard>
                                </StyledGrid>
                            </StyledGrid>
                        </StyledGrid>
                      
                    </StyledGrid>
                </StyledContainer>
            </Box>
        </Fade>

    );
};

export default UserInformation;
