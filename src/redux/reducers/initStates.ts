import {UserReducerState, HomeServicesPlansReducerState, Plan, CartReducerState} from "./reducerStateInterface";


const shippingAddress = sessionStorage.getItem('shippingAddress') ? JSON.parse(sessionStorage.getItem('shippingAddress') as string) : {
    address: "",
    price: 0,
    isFree: false,
} 

const homeServicesPlans = sessionStorage.getItem('homeServicesPlans') ? JSON.parse(sessionStorage.getItem('homeServicesPlans') as string) : [];


const cartItems = sessionStorage.getItem('cartItems') ? JSON.parse(sessionStorage.getItem('cartItems') as string) : [];
const totalPriceCartItems = cartItems.reduce((a: number, b: any) => a + (b.comboPrice || b.unitPrice), 0);

const userDefaultState: UserReducerState = {
 isLogged: localStorage.getItem('token') ? true : false,
 user: {},
 isError: false,
 isLoading: false,
 message: ""
};

const cartDefaultState: CartReducerState = {
    items: cartItems,
    itemsPrice: parseFloat((totalPriceCartItems / 1.18).toFixed(2)),
    taxPrice: parseFloat(((0.18 * totalPriceCartItems) / 1.18).toFixed(2)),
    numberPackages: 1,
    shippingAddress,
    totalPrice: totalPriceCartItems
};

const homeServicesPlansDefaultState:  HomeServicesPlansReducerState = {
    plans: homeServicesPlans,
    selectedPlans: homeServicesPlans.filter((plan: Plan) => plan.isSelected),
    isError: false,
    isLoading: false,
    message: ""
};

const initStates = {
 user: userDefaultState,
 homeServicesPlans: homeServicesPlansDefaultState,
 cart: cartDefaultState
}
export default initStates;