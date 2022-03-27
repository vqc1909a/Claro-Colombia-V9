import {createReducer, AnyAction, PayloadAction} from "@reduxjs/toolkit";
import initStates from "./initStates";
import * as ACTIONS from "../actions/cart";
import {CartReducerState} from "./reducerStateInterface";


interface CartSaveShippingAddressProps {
 address: string,
 price: number,
 isFree: boolean
}

const cartReducer = createReducer(initStates.cart, (builder) => {
    builder
        .addCase(
            ACTIONS.CART_ADD_ITEM_ACTION,
            (state: CartReducerState, action: AnyAction) => {
                console.log("Añadir Productos al carrito")
            }
        )
        .addCase(
            ACTIONS.CART_ADD_ITEMS_ACTION,
            (state: CartReducerState, action: PayloadAction<any[]>) => {
                console.log("Añadir Productos al carrito");
                const payload = action.payload;
                sessionStorage.setItem("cartItems", JSON.stringify(payload));
                const totalPrice = payload.reduce((a, b) => a + (b.comboPrice || b.unitPrice), 0);

                state.items = payload;
                state.itemsPrice = parseFloat((totalPrice / 1.18).toFixed(2)); 
                state.taxPrice = parseFloat(((0.18 * totalPrice) / 1.18).toFixed(2));
                state.totalPrice = totalPrice;
            }
        )
        .addCase(
            ACTIONS.CART_SAVE_SHIPPING_ADDRESS_ACTION,
            (state: CartReducerState, action: PayloadAction<CartSaveShippingAddressProps>) => {
                console.log("Guardar dirección de envio");
                const payload = action.payload;
                sessionStorage.setItem("shippingAddress", JSON.stringify(payload));
                state.shippingAddress = payload;
            }
        )
        .addCase(
            ACTIONS.RESET_CART_ACTION,
            (state: CartReducerState, action: PayloadAction<any>) => {
                console.log("Resetear carrito de compras");
                sessionStorage.removeItem("cartItems");

                state.items = [];
                state.itemsPrice = 0;
                state.taxPrice = 0;
                state.totalPrice = 0;
            }
        )
         .addCase(
            ACTIONS.UPDATE_NUMBER_PACKAGES_CART_ACTION,
            (state: CartReducerState, action: PayloadAction<number>) => {
               
                const payload = action.payload;
                let numberPackages = state.numberPackages += payload;
                console.log(numberPackages);

                if(numberPackages === 0){
                    state.numberPackages = 1;
                }else{
                    state.numberPackages = numberPackages;
                    // state.itemsPrice *= state.itemsPrice * numberPackages;
                    // state.taxPrice *= numberPackages;
                    // state.totalPrice *= numberPackages;
                }
            }
        )
});

export default cartReducer;
