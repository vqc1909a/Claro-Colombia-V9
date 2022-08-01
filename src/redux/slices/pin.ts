import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import INIT_STATES from "./initStates";
import {PinReducerState} from "./reducerStateInterface";

const pinSlice = createSlice({
	name: "pin",
	initialState: INIT_STATES.pin,
	reducers: {
		sendPinRequest(state: PinReducerState, action: PayloadAction) {
			console.log("Enviando Pin");
			state.stateSend.isLoading = true;
		},
        sendPinSuccess(state: PinReducerState, action: PayloadAction<{message: string}>) {
            console.log("Enviado Pin Exitoso");
            const {message} = action.payload;
            state.stateSend.hasSend = true;
			state.stateSend.isLoading = false;
            state.stateSend.isError = false;
            state.stateSend.message = message;
        },
        sendPinError(state: PinReducerState, action: PayloadAction<{message: string}>) {
            console.log("Enviado Pin Error");
            const {message} = action.payload;
            state.stateSend.hasSend = false;
            state.stateSend.isLoading = false;
            state.stateSend.isError = true;
            state.stateSend.message = message;
        },
        resetSendPin(state: PinReducerState, action: PayloadAction){
            state.stateSend.hasSend = false;
            state.stateSend.isLoading = false;
            state.stateSend.isError = false;
            state.stateSend.message = "";
        },
        resetMessageSendPin(state: PinReducerState, action: PayloadAction){
            state.stateSend.isLoading = false;
            state.stateSend.isError = false;
            state.stateSend.message = "";
        },
        verifyPinRequest(state: PinReducerState, action: PayloadAction) {
			console.log("Verificando Pin");
			state.stateVerify.isLoading = true;
		},
        verifyPinSuccess(state: PinReducerState, action: PayloadAction<{message: string}>) {
            console.log("Verificación de Pin Exitoso");
            const {message} = action.payload;
			state.stateVerify.isLoading = false;
            state.stateVerify.isError = false;
            state.stateVerify.message = message;
        },
        verifyPinError(state: PinReducerState, action: PayloadAction<{message: string}>) {
            console.log("Verificación de Pin Error");
            const {message} = action.payload;
            state.stateVerify.isLoading = false;
            state.stateVerify.isError = true;
            state.stateVerify.message = message
        },
        resetVerifyPin(state: PinReducerState, action: PayloadAction) {
			state.stateVerify.isLoading = false;
            state.stateVerify.isError = false;
            state.stateVerify.message = "";
        }

	},
});

export const {
	sendPinRequest,
    sendPinSuccess,
    sendPinError,
    resetSendPin,
    resetMessageSendPin,
    verifyPinRequest,
    verifyPinSuccess,
    verifyPinError,
    resetVerifyPin
} = pinSlice.actions;

export default pinSlice.reducer;
