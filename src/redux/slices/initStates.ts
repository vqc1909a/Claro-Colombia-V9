import {UserReducerState, HomePlansReducerState, Plan, CartReducerState, PinReducerState, OrderReducerState} from "./reducerStateInterface";


//! Session Storage
const shippingAddress = sessionStorage.getItem('shippingAddress') ? JSON.parse(sessionStorage.getItem('shippingAddress') as string) : {
    address: "",
    price: 0,
    isFree: false,
} 
const homePlans = sessionStorage.getItem('homePlans') ? JSON.parse(sessionStorage.getItem('homePlans') as string) : [];
const cartItems = sessionStorage.getItem('cartItems') ? JSON.parse(sessionStorage.getItem('cartItems') as string) : [];
//! ------------------------

//!Helpers
const totalPriceCartItems = cartItems.reduce((a: number, b: any) => a + (b.comboPrice || b.unitPrice), 0);
//! ------------------------


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
    totalPrice: totalPriceCartItems,
    numberPackages: 1,
    shippingAddress,
    userInformation: {
        personalData: {
            email: "",
            firstname: "",
            lastname: "",
            cellphone: "",
            additionalCellphone: "",
            documentType: "",
            documentNumber: ""
        },
        installationData: {
            whoReceives: "",
            nameOtherPerson: ""
        }
    },
    termsContract: {
        acceptTermsContract: false,
        acceptClauseContract: false, 
        acceptReceiveDigitalInvoice: false
    },
    installationSchedule: {
        date: "",
        time: ""
    }
};

const homePlansDefaultState: HomePlansReducerState = {
    plans: homePlans,
    selectedPlans: homePlans.filter((plan: Plan) => plan.isSelected),
    isError: false, 
    isLoading: false,
    message: ""
};

const pinDefaultState: PinReducerState = {
    stateSend: {
        hasSend: false,
        isLoading: false,
        isError: false,
        message: ""
    },
    stateVerify: {
        isLoading: false,
        isError: false,
        message: ""
    }
}

const orderDefaultState: OrderReducerState = {
    orderHomePlan: {
        orderNumber: "0",
        orderDate: "",
        items: [],
        itemsPrice: 0,
        taxPrice: 0,
        totalPrice: 0,
        numberPackages: 1,
        shippingAddress: {
            address: "",
            price: 0,
            isFree: false,
        },
        userInformation: {
            personalData: {
                email: "",
                firstname: "",
                lastname: "",
                cellphone: "",
                additionalCellphone: "",
                documentType: "",
                documentNumber: ""
            },
            installationData: {
                whoReceives: "",
                nameOtherPerson: ""
            }
        },
        termsContract: {
            acceptTermsContract: false,
            acceptClauseContract: false, 
            acceptReceiveDigitalInvoice: false
        },
        installationSchedule: {
            date: "",
            time: ""
        }
    },
    isError: false, 
    isLoading: false,
    message: ""
}

const initStates = {
 user: userDefaultState,
 homePlans: homePlansDefaultState,
 cart: cartDefaultState,
 pin: pinDefaultState,
 order: orderDefaultState,
}
export default initStates;