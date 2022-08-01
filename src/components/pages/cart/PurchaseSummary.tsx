import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";

//! StyledUi Components
import StyledCard from "components/StyledUi/StyledCard";

//!Widgets
import CardSmall from "components/widgets/CardSmall";

//! Hooks
import useAppSelector from "utils/hooks/useAppSelector";

//!Selectors
import * as CART_SELECTORS from "redux/selectors/cart";

//!Helpers
import {formatLetterToCapitalize} from "utils/helpers/formatLetter";
import {separateThousands} from "utils/helpers/formatNumber";


//!Events
let sizeWidth: number = window.innerWidth;
const reportWindowSize = () => {
    sizeWidth = window.innerWidth;
    console.log(sizeWidth);
}
window.addEventListener('resize', reportWindowSize);


function PurchaseSummary(){

    //! Selectors
    let plans = useAppSelector(CART_SELECTORS.selectItems);
    let plansPrice = useAppSelector(CART_SELECTORS.selectItemsPrice);
    let taxPrice = useAppSelector(CART_SELECTORS.selectTaxPrice);
    let numberPackages = useAppSelector(CART_SELECTORS.selectNumberPackages);
    let {isFree, price} = useAppSelector(CART_SELECTORS.selectShippingAddress);
    let totalPrice = useAppSelector(CART_SELECTORS.selectTotalPrice);

    return (
    <StyledCard className={`card-services-container ${sizeWidth >= 1024 ? "card-services-container--shopping-cart" : ""}`}>
        <CardContent className="card-services-container__content">
            <Typography variant="h5" component="p" sx={{mb: 2, fontWeight: "bolder"}}>Resumen de Compra</Typography>
            
            <Box sx={{display: "flex", alignItems: "flex-start"}}>
                <Box sx={{flex: 2, mr: 1.5}}>
                    <CardSmall totalPrice={totalPrice}></CardSmall>
                </Box>
                <Box sx={{flex: 4}}>
                    <Box sx={{mb: 3}}>
                        <Typography variant="h6" component="p">Paquete Arma tu Play</Typography>
                        <Typography variant="body2" component="p">
                        {plans.filter(plan => plan.category !== "adicionales").map(plan => `${formatLetterToCapitalize(plan.category)} ${plan.plan} | `
                        )}
                        adicionales: {plans.filter(plan => plan.category === "adicionales").map(plan => `${plan.subcategory} ${plan.plan} | `)}
                        </Typography>
                    </Box>

                    <Typography variant="h6" component="p" sx={{fontWeight: "bolder"}}>Precio ${separateThousands(totalPrice)}</Typography>
                    <Typography variant="h6" component="p" sx={{fontWeight: "bolder"}}>Cant. {numberPackages}</Typography>
                </Box>
            </Box>

            <Box sx={{py: 2, my: 2, borderBottom: theme => `2px solid ${theme.palette.grey["400"]}`, borderTop: theme => `2px solid ${theme.palette.grey["300"]}` }}
                    >
                <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2}}>
                    <Typography variant="body1" component="p" sx={{fontWeight: "bolder"}} >Subtotal</Typography>
                    <Typography variant="body1" component="p" sx={{fontWeight: "bolder"}} >${separateThousands(plansPrice)}</Typography>
                </Box>
                <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1}}>
                    <Typography variant="body1" component="p" >Impuestos</Typography>
                    <Typography variant="body1" component="p" >${separateThousands(taxPrice)}</Typography>
                </Box>
                <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2}}>
                    <Typography variant="body1" component="p" >Instalación {isFree ? "Gratis": ""}</Typography>
                    <Typography variant="body1" component="p" >${separateThousands(price)}</Typography>
                </Box>
                <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                    <Typography variant="h6" component="p" sx={{fontWeight: "bolder"}}>TOTAL:</Typography>
                    <Typography variant="h6" component="p" sx={{fontWeight: "bolder"}}>${separateThousands(totalPrice)}</Typography>
                </Box>
            </Box>

        </CardContent>
    </StyledCard>
  )
}

export default PurchaseSummary