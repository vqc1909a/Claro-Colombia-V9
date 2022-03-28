import {RootReducerState} from "../store";
import {Plan} from "../slices/reducerStateInterface";

export const selectPlans = (state: RootReducerState): Plan[]  => {
 return state.homePlans.plans 
}

export const selectSelectedPlans = (state: RootReducerState): Plan[]  => {
 return state.homePlans.selectedPlans 
}

export const selectIsError = (state: RootReducerState): boolean => {
 return state.homePlans.isError 
}

export const selectIsLoading = (state: RootReducerState): boolean => {
 return state.homePlans.isLoading 
}

export const selectMessage = (state: RootReducerState): string => {
 return state.homePlans.message 
}


