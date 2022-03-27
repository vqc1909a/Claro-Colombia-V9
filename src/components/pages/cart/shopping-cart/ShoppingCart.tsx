import {useState} from "react";
import { v4 as uuid } from 'uuid';

import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Hidden from "@mui/material/Hidden";

//! Mui Components
import StyledContainer from "components/StyledUi/StyledContainer/StyledContainer";
import StyledGrid from "components/StyledUi/StyledGrid";
import StyledCard from "components/StyledUi/StyledCard";
import StyledButton from "components/StyledUi/StyledButton";

//! Icons
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';

//! React Router Dom
import {Link as RouterLink, useOutletContext} from "react-router-dom";

//!Hooks
import useAppSelector from "utils/hooks/useAppSelector";
import useScrollToTop from "utils/hooks/useScrollToTop";


//!Selectors
import * as CARD_SELECTORS from "redux/selectors/cart";

//! Components
import ModifyOrRemoveThePackage from "./ModifyOrRemoveThePackage";
import PackageDetails from "./PackageDetails";
import AmountPackages from "./AmountPackages";
import PurchaseSummary from "./PurchaseSummary";

//! Widgets
import ItemCollapse from "components/widgets/ItemCollapse";

//!Actions
import * as CART_ACTIONS from "redux/actions/cart";

//!React Redux
import useAppDispatch from "utils/hooks/useAppDispatch";

//!React Router Dom 
import {useNavigate} from "react-router-dom";

//!Interfaces
import {ContextType} from "./interfaces";

interface ItemAdditionalInformation {
    _id: string,
    label: string,
    description: string,
    status: boolean
}
const ListAdditionalInformationDefault = [
    {
        _id: uuid(),
        label: "¿Consideraciones al momento de instalar tu servicio",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum illum, eos explicabo animi quo aut?. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum illum, eos explicabo animi quo aut?.",
        status: false
    },
    {
        _id: uuid(),
        label: "¿Que son los adicionales?",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum illum, eos explicabo animi quo aut?. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum illum, eos explicabo animi quo aut?.",
        status: false
    },
    {
        _id: uuid(),
        label: "¿Qué es cobertura?",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum illum, eos explicabo animi quo aut?. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum illum, eos explicabo animi quo aut?.",
        status: false,
    }
];



function ShoppingCart(){
    let dispatch = useAppDispatch();
    let navigate = useNavigate();
    const {setNumberStep} = useOutletContext<ContextType>();

    let plans = useAppSelector(CARD_SELECTORS.selectItems);
    let plansPrice = useAppSelector(CARD_SELECTORS.selectItemsPrice);
    let taxPrice = useAppSelector(CARD_SELECTORS.selectTaxPrice);
    let numberPackages = useAppSelector(CARD_SELECTORS.selectNumberPackages);
    let shippingAddress = useAppSelector(CARD_SELECTORS.selectShippingAddress);
    let totalPrice = useAppSelector(CARD_SELECTORS.selectTotalPrice);

    //!States
    const [listAdditionalInformation, setListAdditionalInformation] = useState<ItemAdditionalInformation[]>(ListAdditionalInformationDefault);

    //!Functions
    const setNumberPackages = (number: number): void => {
        dispatch(CART_ACTIONS.UPDATE_NUMBER_PACKAGES_CART_ACTION(number))
    }
    const handleCart = (): void => {
        setNumberStep(state => state + 1);
        navigate("/cart/personal-information")
    }


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
                 {/* Shopping Cart Content Desktop */}
                <StyledContainer className="container-services">
                    <StyledGrid container spacing={0}>
                        {/* Shopping Cart Header */}
                        <Box sx={{/* mx: {xs: 0, md: 4}, */ my: 3, display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%"}}>
                            <Typography variant="h4" component="h1" >Carrito de Compra</Typography>
                            <Link component={RouterLink} to="/servicios-hogar-cotizacion" color="info.main" underline="hover">{"< Regresar"}</Link>
                        </Box>

                        {/* Shopping Cart Content */}
                        <StyledGrid item xs={12} /* sx={{mx: {xs: 0, md: 4}}} */>
                            {/* Shopping Cart Content Desktop */}
                            <Hidden mdDown>
                                <StyledCard variant="outlined" className="card-services-container card-services-container--shopping-cart">
                                    <CardContent className="card-services-container__content">
                                        <Box sx={{display: "flex", flexDirection: "row"}}>
                                            {/* Modificar o Eliminar el Paquete */}
                                            <ModifyOrRemoveThePackage totalPrice={totalPrice} numberPackages={numberPackages}></ModifyOrRemoveThePackage>

                                            <StyledGrid container spacing={4} sx={{flex: 1}}>   
                                                {/* Detalles del Paquete */}
                                                <StyledGrid item xs={12} md={5} sx={{marginTop: 8}}>
                                                    <PackageDetails plans={plans} totalPrice={totalPrice} numberPackages={numberPackages}></PackageDetails>
                                                </StyledGrid>
                                                
                                                {/* Cantidad de Paquetes */}
                                                <StyledGrid item xs={12} md={3} sx={{marginTop: 4}}>
                                                    <AmountPackages numberPackages={numberPackages} totalPrice={totalPrice} setNumberPackages={setNumberPackages} ></AmountPackages>
                                                </StyledGrid>

                                                {/* Resumen de Compra */}
                                                <StyledGrid item xs={12} md={4}>
                                                    <PurchaseSummary totalPrice={totalPrice} plansPrice={plansPrice} taxPrice={taxPrice} numberPackages={numberPackages} shippingAddress={shippingAddress} handleCart={handleCart}></PurchaseSummary>                     
                                                </StyledGrid>
                                            </StyledGrid>
                                        </Box>
                                    </CardContent>
                                </StyledCard>
                            </Hidden>
                           
                        </StyledGrid>
                    </StyledGrid>
                </StyledContainer>

                 {/* Shopping Cart Content Mobile */}
                <Hidden mdUp>
                    <Box sx={{backgroundColor: theme => theme.palette.grey["100"], py: {xs: 4, md: 0}}}>
                        <StyledContainer className="container-services">
                            <ModifyOrRemoveThePackage totalPrice={totalPrice} numberPackages={numberPackages}></ModifyOrRemoveThePackage>
                            <PackageDetails plans={plans} totalPrice={totalPrice} numberPackages={numberPackages}></PackageDetails>
                            <AmountPackages numberPackages={numberPackages} totalPrice={totalPrice} setNumberPackages={setNumberPackages} ></AmountPackages>
                        </StyledContainer>
                    </Box>
                    <Box sx={{backgroundColor: theme => theme.palette.common.white}}>
                        <StyledContainer className="container-services">
                            <PurchaseSummary totalPrice={totalPrice} plansPrice={plansPrice} taxPrice={taxPrice} numberPackages={numberPackages} shippingAddress={shippingAddress} handleCart={handleCart}></PurchaseSummary>                   
                        </StyledContainer>
                    </Box>

                    <Box sx={{position: "sticky", bottom: "0%", pb: 2, mb: 4}}>
                        <StyledContainer className="container-services">
                            <StyledButton variant="contained" sx={{margin: 0, width: "100%", typography: "body2"}} onClick={handleCart}>
                                Comprar
                            </StyledButton>
                        </StyledContainer>    
                    </Box>
                </Hidden>
                
                {/* Información adicional */}
                <StyledContainer className="container-services">
                    <StyledCard className="card-services-container card-services-container-special">
                        <CardContent>
                            <Box sx={{display: "flex", alignItems: "center", justifyContent: "flex-start", mb: 1}}>
                                <MessageOutlinedIcon fontSize="large" sx={{mr: 2}}></MessageOutlinedIcon>
                                <Typography component="p" sx={{typography: {xs: "h5", md: "h6"}}} style={{fontWeight: "bolder"}}>Información importante para tu instalación</Typography>
                            </Box>
                            <Typography variant="body1" sx={{textAlign: "justify"}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum illum, eos explicabo animi quo aut?</Typography>
                        </CardContent>
                        {listAdditionalInformation.map(item => (
                            <ItemCollapse key={item._id} item={item} setItems={setListAdditionalInformation}/>
                        ))}
                        
                    </StyledCard>
                </StyledContainer>
            </Box>
        </Fade>

    );
};

export default ShoppingCart;
