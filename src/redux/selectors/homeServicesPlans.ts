import {RootReducerState} from "../reducers";
import {Plan} from "../reducers/reducerStateInterface";

export const selectPlans = (state: RootReducerState): Plan[]  => {
 return state.homeServicesPlans.plans 
}

export const selectSelectedPlans = (state: RootReducerState): Plan[]  => {
 return state.homeServicesPlans.selectedPlans 
}

export const selectIsError = (state: RootReducerState): boolean => {
 return state.homeServicesPlans.isError 
}

export const selectIsLoading = (state: RootReducerState): boolean => {
 return state.homeServicesPlans.isLoading 
}

export const selectMessage = (state: RootReducerState): string => {
 return state.homeServicesPlans.message 
}


