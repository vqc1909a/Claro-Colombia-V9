import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import initStates from "./initStates";
import {CartReducerState, ShippingAddress} from "./reducerStateInterface";

const cartSlice = createSlice({
	name: "cart",
	initialState: initStates.cart,
	reducers: {
		addItem(state: CartReducerState, action: PayloadAction) {
			console.log("Añadir Producto al carrito");
		},
		addItems(state: CartReducerState, action: PayloadAction<any[]>) {
			console.log("Añadir Productos al carrito");
			const payload = action.payload;
			sessionStorage.setItem("cartItems", JSON.stringify(payload));
			const totalPrice = payload.reduce(
				(a, b) => a + (b.comboPrice || b.unitPrice),
				0
			);
			state.items = payload;
			state.itemsPrice = parseFloat((totalPrice / 1.18).toFixed(2));
			state.taxPrice = parseFloat(
				((0.18 * totalPrice) / 1.18).toFixed(2)
			);
			state.totalPrice = totalPrice;
		},
		saveShippingAddress(
			state: CartReducerState,
			action: PayloadAction<ShippingAddress>
		) {
			console.log("Guardar dirección de envio");
			const payload = action.payload;
			sessionStorage.setItem("shippingAddress", JSON.stringify(payload));
			state.shippingAddress = payload;
		},
		resetItems(state: CartReducerState, action: PayloadAction) {
			console.log("Resetear carrito de compras");
			sessionStorage.removeItem("cartItems");

			state.items = [];
			state.itemsPrice = 0;   
			state.taxPrice = 0;
			state.totalPrice = 0;
		},
		updateNumberPackages(state: CartReducerState, action: PayloadAction<number>) {
			const payload = action.payload;
			let numberPackages = state.numberPackages += payload;
			if(numberPackages === 0){
				state.numberPackages = 1;
			}else{
				state.numberPackages = numberPackages;
			}

		},
	},
});

export const { addItem, addItems, saveShippingAddress, resetItems, updateNumberPackages } = cartSlice.actions;

export default cartSlice.reducer;
