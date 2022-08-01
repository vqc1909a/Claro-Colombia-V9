import {RootReducerState} from "../store";
import {ShippingAddress, UserInformation, TermsContract, InstallationSchedule, CartReducerState} from "../slices/reducerStateInterface";

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

export const selectUserInformation = (state: RootReducerState): UserInformation  => {
 return state.cart.userInformation 
}

export const selectTermsContract = (state: RootReducerState): TermsContract  => {
 return state.cart.termsContract 
}

export const selectInstallationSchedule = (state: RootReducerState): InstallationSchedule => {
    return state.cart.installationSchedule
}

export const selectCart = (state: RootReducerState): CartReducerState => {
    return state.cart
}






