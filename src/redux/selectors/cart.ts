import {RootReducerState} from "../store";
import {ShippingAddress} from "../reducers/reducerStateInterface";

export const selectItems = (state: RootReducerState): any[]  => {
 return state.cart.items 
}

export const selectItemsPrice = (state: RootReducerState): number  => {
 return state.cart.itemsPrice 
}

export const selectTaxPrice = (state: RootReducerState): number  => {
 return state.cart.taxPrice 
}

export const selectNumberPackages = (state: RootReducerState): number  => {
 return state.cart.numberPackages 
}

export const selectShippingAddress = (state: RootReducerState): ShippingAddress  => {
 return state.cart.shippingAddress 
}

export const selectTotalPrice = (state: RootReducerState): number  => {
 return state.cart.totalPrice 
}






