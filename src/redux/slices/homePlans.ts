import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import initStates from "./initStates";
import {Plan, HomePlansReducerState} from "./reducerStateInterface";

const homePlansSlice = createSlice({
	name: "homePlans",
	initialState: initStates.homePlans,
	reducers: {
		getHomePlansRequest(state: HomePlansReducerState, action: PayloadAction) {
			console.log("Obteniendo planes de servicios hogar")
			state.isLoading = true;
		},
		getHomePlansSuccess(state: HomePlansReducerState, action: PayloadAction<Plan[]>) {
			console.log("Obteniendo planes de servicios hogar exitoso")
			const payload = action.payload;
			state.plans = payload;
			state.isLoading = false;
			state.isError = false;
			state.message = ""
		},
		getHomePlansError(state: HomePlansReducerState, action: PayloadAction<{message: string}>) {
			console.log("Obteniendo planes de servicios hogar error")
			const {message} = action.payload
			state.isLoading = false; 
			state.isError = true;
			state.message = message
		},
		toggleSelectedHomePlan(state: HomePlansReducerState, action: PayloadAction<string>) {
			console.log("Cambiar Estado Seleccionado de Plan")
			const _id = action.payload;
			const plan = state.plans.find(plan => plan._id === _id);
			//!Aserción de que exista el plan
			if(plan){
				plan.isSelected = !plan.isSelected;
			}
		},
		resetSelectedHomePlans(state: HomePlansReducerState, action: PayloadAction) {
			console.log("Reseteando Planes Seleccionados");
			sessionStorage.removeItem("homePlans")
			state.plans = state.plans.map(plan => ({...plan, isSelected: false}));
		},
		getSelectedHomePlans(state: HomePlansReducerState, action: PayloadAction<Plan[]>) {
			console.log("Actualizando planes");
			const payload = action.payload;
			state.selectedPlans = payload;
		}
	
	},
});

export const {
	getHomePlansRequest,
	getHomePlansSuccess,
	getHomePlansError,
	toggleSelectedHomePlan,
	resetSelectedHomePlans,
	getSelectedHomePlans
} = homePlansSlice.actions;

export default homePlansSlice.reducer;
