import {RootReducerState} from "../store";
import {OrderHomePlan} from "../slices/reducerStateInterface";

export const selectIsLoading = (state: RootReducerState): boolean  => {
 return state.order.isLoading 
}
export const selectIsError = (state: RootReducerState): boolean  => {
 return state.order.isError 
}
export const selectMessage = (state: RootReducerState): string  => {
 return state.order.message 
}
export const selectOrderHomePlan = (state: RootReducerState): OrderHomePlan  => {
 return state.order.orderHomePlan 
}





