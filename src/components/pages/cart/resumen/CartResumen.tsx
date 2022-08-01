import Fade from "@mui/material/Fade";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import AlertTitle from '@mui/material/AlertTitle';
import Link from '@mui/material/Link';
import Tooltip from '@mui/material/Tooltip';



//!StyledUi Components
import StyledContainer from "components/StyledUi/StyledContainer";
import StyledCard from "components/StyledUi/StyledCard";
import StyledGrid from "components/StyledUi/StyledGrid";
import StyledAlert from "components/StyledUi/StyledAlert";
import StyledButton from "components/StyledUi/StyledButton";



//!Components
import ModifyOrRemoveThePackage from "./ModifyOrRemoveThePackage";
import PackageDetails from "./PackageDetails";
import AmountPackages from "./AmountPackages";
import PurchaseSummary from "./PurchaseSummary";

//!Icons
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';

//!Hooks
import useScrollToTop from "utils/hooks/useScrollToTop";
import useAppSelector from "utils/hooks/useAppSelector";

//!Selectors
import * as CART_SELECTORS from "redux/selectors/cart";
import * as ORDER_SELECTORS from "redux/selectors/order";

//!Helpers
import {formatDateDBToUser, formatDateDBToUserExtended} from "utils/helpers/formatDate";

//!React Router Dom
import {Link as RouterLink} from "react-router-dom";

function CartResumen() {
    const {orderNumber, items: plans, orderDate, itemsPrice: plansPrice, taxPrice, totalPrice, numberPackages, shippingAddress, userInformation } = useAppSelector(ORDER_SELECTORS.selectOrderHomePlan);

    let {personalData, installationData} = userInformation;
    let {address} = shippingAddress;
    let {firstname, lastname} = personalData;
    let {whoReceives, nameOtherPerson} = installationData;

    let {date, time} = useAppSelector(CART_SELECTORS.selectInstallationSchedule);

    useScrollToTop();

    return (
    <Fade in={true} timeout={1000} easing="ease-in-out">
        <Box sx={{ minHeight: "100vh", backgroundColor: (theme) => theme.palette.common.white}}>
            <StyledContainer className="container-services">
                <Box sx={{textAlign: "center", mb: 4, px: {xs: 0, md: 4}, mt: 6}}>
                    <Typography variant="h6" component="p" sx={{mb: 3}}><b>Bienvenido a Claro, </b>en las próximas horas puedes empezar a disfrutar de tus servicios. El cargo fijo mensual lo verás reflejado en tu próxima factura, así como el periodo proporcional desde la activación hasta tu fecha de corte.</Typography>
                    <CheckCircleIcon fontSize="large" color="success" sx={{fontSize: "3.5rem"}}></CheckCircleIcon>
                    <Typography variant="h4" component="p" sx={{mb: 2}}>Tu pedido está en alistamiento</Typography>
                    <Typography variant="body1" component="p" sx={{mb: .5, fontWeight: "bolder"}}>Tu número de pedido: {orderNumber}</Typography>
                    <Typography variant="body1" component="p" sx={{mb: 2, fontWeight: "bolder"}}>Día de Compra: {formatDateDBToUser(orderDate)}</Typography>
                    <Typography variant="body1" component="p" >Recibirás vía correo electrónico tu comprobante de confirmación y podrás darle el seguimiento a través de tu status de pedido</Typography>
                </Box>

                {/* Carrito de Compras Resumen */}
                <StyledCard variant="outlined" className="card-services-container card-services-container--shopping-cart" style={{marginBottom: "2rem"}}/* sx={{mx: {xs: 0, md: 4}}} */>
                    <CardContent className="card-services-container__content">
                        <Box sx={{display: "flex", flexDirection: {xs: "column", md: "row"}}}>

                            <StyledGrid container spacing={3}>   
                                {/* Detalles del Paquete */}
                                <StyledGrid item xs={12} md={5}>
                                    {/* Modificar o Eliminar el Paquete */}
                                    <Box sx={{display: "flex"}}>

                                        <ModifyOrRemoveThePackage totalPrice={totalPrice}></ModifyOrRemoveThePackage>
                                        <PackageDetails plans={plans} totalPrice={totalPrice}></PackageDetails>
                                    </Box>
                                </StyledGrid>
                                
                                {/* Cantidad de Paquetes */}
                                <StyledGrid item xs={12} md={3}>
                                    <AmountPackages numberPackages={numberPackages} totalPrice={totalPrice}></AmountPackages>
                                </StyledGrid>

                                {/* Resumen de Compra */}
                                <StyledGrid item xs={12} md={4}>
                                    <PurchaseSummary totalPrice={totalPrice} plansPrice={plansPrice} taxPrice={taxPrice} shippingAddress={shippingAddress}></PurchaseSummary>                     
                                </StyledGrid>
                            </StyledGrid>
                        </Box>
                    </CardContent>
                </StyledCard>

                {/* Alerta de Aviso */}
                <StyledAlert severity="error" sx={{mb: 4}}>
                    <AlertTitle>* Recuerda que si autorizas a terceros debes presentar los documentos correspondientes para poder realizar la transacción y recibir tu produto</AlertTitle>
                    <strong>Tu contrato será enviado durante los siguientes 30 días calendario al correo: carrera@hotmail.com</strong>
                </StyledAlert>

                {/* Información de instlación y pago */}
                <Box sx={{mb: 3, px: {xs: 0, md: 4}, pb: 3, borderBottom: theme => `2px solid ${theme.palette.grey["300"]}`}}>
                    <Typography component="p" sx={{typography: {xs: "h5", md: "h6"}, mb: 3}} style={{fontWeight: "bolder"}}>Información de instalación y pago</Typography>
                    <Typography variant="body1" component="p" sx={{fontWeight: "bolder", mb: 3}}>Cliente: {firstname} {lastname}</Typography>

                    <StyledGrid container spacing={4}>
                        <StyledGrid item xs={12} md={3}>
                            <Typography variant="body2" component="p" sx={{fontWeight: "bolder", mb: {xs: 1, md: 2}}}>Dirección de la instalación</Typography>
                            <Typography variant="body1" component="p">{address}</Typography>
                        </StyledGrid>
                        <StyledGrid item xs={12} md={3}>
                            <Typography variant="body2" component="p" sx={{fontWeight: "bolder", mb: {xs: 1, md: 2}}}>Método de pago</Typography>
                            <Box sx={{display: "flex", alignItems: "flex-start"}}>
                                <DescriptionOutlinedIcon sx={{mr: 1}}></DescriptionOutlinedIcon>
                                <Typography variant="body1">Pago con cargo a la factura</Typography>
                            </Box>
                        </StyledGrid>
                        <StyledGrid item xs={12} md={3}>
                            <Typography variant="body2" component="p" sx={{fontWeight: "bolder", mb: {xs: 1, md: 2}}}>Fecha y horario de atención</Typography>
                            <Typography variant="body1" component="p">Instalación Estimada: <b>{formatDateDBToUserExtended(date)} de {time}</b></Typography>
                        </StyledGrid>
                        <StyledGrid item xs={12} md={3}>
                            <Typography variant="body2" component="p" sx={{fontWeight: "bolder", mb: {xs: 1, md: 2}}}>Quien recibe</Typography>
                            <Typography variant="body1" component="p">{whoReceives === "otherPerson" ? nameOtherPerson : `${firstname} ${lastname}`}</Typography>
                        </StyledGrid>
                    </StyledGrid>
                </Box>

                {/* Términos y Condiciones */}
                <Box sx={{display: "flex", justifyContent: "space-between", alignItems: {xs: "flex-start", md: "center"}, flexDirection: {xs: "column", md: "row"}, mb: {xs: 6, md: 10}}}>
                    <Box sx={{display: "flex", alignItems: "center", mb: {xs: 2, md: 0}}}>
                        <Tooltip title="Términos y Condiciones" placement="top">
                            <HelpOutlineOutlinedIcon fontSize="medium" sx={{mr: 2}}></HelpOutlineOutlinedIcon>
                        </Tooltip>
                        <Link component={RouterLink} underline="always" to="" sx={{color: theme => theme.palette.common.black}} variant="body2">
                            Términos y Condiciones
                        </Link>
                    </Box>
                    <Box sx={{display: "flex", alignItems: "center"}}>
                        <Tooltip title="¿Necesitas ayuda con tu pedido?" placement="top">
                            <HelpOutlineOutlinedIcon fontSize="medium" sx={{mr: 2}}></HelpOutlineOutlinedIcon>
                        </Tooltip>
                        <Box component="span" sx={{typography: "body2"}}>
                            ¿Necesitas ayuda con tu pedido?
                            <Link component={RouterLink} underline="always" to="" sx={{color: theme => theme.palette.common.black, ml: .5}}>
                                Escríbenos a tiendavirtual@claro.com.co
                            </Link>

                        </Box>
                    </Box>

                </Box>

                {/* Buttons */}
                <Box sx={{display: "flex", flexDirection: {xs: "column", md: "row"}, justifyContent: "space-between", alignItems: "center", mb: 8}}>
                    <StyledButton variant="outlined" className="button-outlined" color="info" sx={{typography: "body2", order: {xs: 2, md: 1}, width: {xs: "100%", md: "initial"}}}>
                        {"Descarga detalle de pedido >"}
                    </StyledButton>

                    <StyledButton variant="contained" sx={{typography: "body2", order: {xd: 1, md: 2}, width: {xs: "100%", md: "initial"}, mb: {xs: 2, md: 0}}}>
                        Regresar a la tienda
                    </StyledButton>
                </Box>

            </StyledContainer>
        </Box>            
    </Fade>
  )
}

export default CartResumen