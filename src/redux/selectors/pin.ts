import {RootReducerState} from "../store";

export const selectIsLoadingStateSend = (state: RootReducerState) => {
 return state.pin.stateSend.isLoading 
}

export const selectIsErrorStateSend = (state: RootReducerState) => {
 return state.pin.stateSend.isError
}

export const selectMessageStateSend = (state: RootReducerState) => {
 return state.pin.stateSend.message 
}

export const selectHasSendStateSend = (state: RootReducerState) => {
 return state.pin.stateSend.hasSend 
}

export const selectIsLoadingStateVerify = (state: RootReducerState) => {
 return state.pin.stateVerify.isLoading 
}

export const selectIsErrorStateVerify = (state: RootReducerState) => {
 return state.pin.stateVerify.isError
}

export const selectMessageStateVerify = (state: RootReducerState) => {
 return state.pin.stateVerify.message 
}







