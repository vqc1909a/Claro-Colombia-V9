import {createReducer, AnyAction} from "@reduxjs/toolkit";
import initStates from "./initStates";
import * as ACTIONS from "../actions/homeServicesPlans";
import {Plan, HomeServicesPlansReducerState} from "./reducerStateInterface";


// type ActionProps = 
// | {
//   type: "LOGIN_REQUESTED",
//   payload: {
//     email: string,
//     password: string
//   }
//   } 
// | {
//   type: "LOGIN_SUCCESS",
//   payload: any
//   } 
// | {
//   type: "LOGIN_ERROR",
//   payload: any
//   }


const homeServicesPlansReducer = createReducer(initStates.homeServicesPlans, (builder) => {
    builder
        .addCase(
            ACTIONS.GET_HOME_SERVICES_PLANS_REQUEST_ACTION,
            (state: HomeServicesPlansReducerState, action: AnyAction) => {
                console.log("Obteniendo planes de servicios hogar")
                state.isLoading = true;
            }
        )
        .addCase(
            ACTIONS.GET_HOME_SERVICES_PLANS_SUCCESS_ACTION,
            (state: HomeServicesPlansReducerState, action: AnyAction) => {
                console.log("Obteniendo planes de servicios hogar exitoso")
                const payload = action.payload;
                state.plans = payload;
                state.isLoading = false;
                state.isError = false;
                state.message = ""
            }
        )
        .addCase(
            ACTIONS.GET_HOME_SERVICES_PLANS_ERROR_ACTION,
            (state: HomeServicesPlansReducerState, action: AnyAction) => {
                console.log("Obteniendo planes de servicios hogar error")
                const payload = action.payload
                state.isLoading = false; 
                state.isError = true;
                state.message = payload.message
            }
        )
        .addCase(
            ACTIONS.TOGGLE_SELECTED_HOME_SERVICES_PLANS_ACTION,
            (state: HomeServicesPlansReducerState, action: AnyAction) => {
                console.log("Cambiar Seleccionado de Plan")
                const payload = action.payload;
                const plan: Plan | any = state.plans.find(plan => plan._id === payload.id);
                plan.isSelected = !plan.isSelected;
            }
        )
        .addCase(
            ACTIONS.RESET_SELECTED_HOME_SERVICES_PLANS_ACTION,
            (state: HomeServicesPlansReducerState, action: AnyAction) => {
                console.log("Reseteando Planes Seleccionados");
                sessionStorage.removeItem("homeServicesPlans")
                state.plans = state.plans.map(plan => ({...plan, isSelected: false}));
            }
        )
        .addCase(
            ACTIONS.GET_SELECTED_HOME_SERVICES_PLANS_ACTION,
            (state: HomeServicesPlansReducerState, action: AnyAction) => {
                console.log("Actualizando planes");
                const payload = action.payload;
                state.selectedPlans = payload;
            }
        )

        
});

export default homeServicesPlansReducer;
