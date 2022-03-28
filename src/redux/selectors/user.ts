import {RootReducerState} from "../store";

export const selectIsLogged = (state: RootReducerState) => {
 return state.user.isLogged 
}

export const selectUser = (state: RootReducerState) => {
 return state.user.user 
}

export const selectIsError = (state: RootReducerState) => {
 return state.user.isError 
}

export const selectIsLoading = (state: RootReducerState) => {
 return state.user.isLoading 
}

export const selectMessage = (state: RootReducerState) => {
 return state.user.message 
}


