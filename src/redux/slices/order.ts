import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import INIT_STATES from "./initStates";
import {OrderReducerState, OrderHomePlan} from "./reducerStateInterface";

const orderSlice = createSlice({
	name: "order",
	initialState: INIT_STATES.order,
	reducers: {
		createOrderRequest(state: OrderReducerState, action: PayloadAction) {
			console.log("Crear orden");
			state.isLoading = true;
		},
		createOrderSuccess(state: OrderReducerState, action: PayloadAction<{message: string, order: OrderHomePlan}>) {
			console.log("Crear orden exitoso");
			const {message, order} = action.payload;
			state.isLoading = false;
			state.isError = false;
			state.orderHomePlan = order;
			state.message = message;
		},
		createOrderError(state: OrderReducerState, action: PayloadAction<{message: string}>) {
			console.log("Crear orden Error");
			const {message} = action.payload;
			state.isLoading = false;
			state.isError = true;
			state.message = message;
		}
	},
});

export const { createOrderRequest, createOrderSuccess, createOrderError } = orderSlice.actions;

export default orderSlice.reducer;
