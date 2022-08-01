import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import INIT_STATES from "./initStates";
import {UserReducerState} from "./reducerStateInterface";

const userSlice = createSlice({
	name: "user",
	initialState: INIT_STATES.user,
	reducers: {
		loginRequest(state: UserReducerState, action: PayloadAction) {
			console.log("Logueandose");
			state.isLoading = true;
		},
		loginSuccess(
			state: UserReducerState,
			action: PayloadAction<{
				accessToken: string;
				user: {
					email: string;
					name: string;
					id: number;
				};
			}>
		) {
			console.log("Logueo Exitoso");
			const {accessToken, user} = action.payload;
			localStorage.setItem("token", JSON.stringify(accessToken));
			state.isLoading = false;
			state.isLogged = true;
			state.isError = false;
			state.user = user;
			state.message = "";
		},
		loginError(
			state: UserReducerState,
			action: PayloadAction<{message: string}>
		) {
			console.log("Logueo Fallido");
			const {message} = action.payload;
			localStorage.removeItem("token");
			state.isLoading = false;
			state.isLogged = false;
			state.isError = true;
			state.message = message;
		},
		registerRequest(state: UserReducerState, action: PayloadAction) {
			console.log("Registrandonos");
		},
		registerSucess(state: UserReducerState, action: PayloadAction) {
			console.log("Registro exitoso");
		},
		registerError(state: UserReducerState, action: PayloadAction) {
			console.log("Registro error");
		},
		getLoggedUserRequest(state: UserReducerState, action: PayloadAction) {
			console.log("Consiguiendo Usuario Logueado");
			state.isLoading = true;
		},
		getLoggedUserSuccess(
			state: UserReducerState,
			action: PayloadAction<{
				email: string;
				password: string;
				name: string;
				id: number;
			}>
		) {
			console.log("Consiguiendo Usuario Logueado Exitoso");
			const {password, ...user} = action.payload;
			state.user = user;
			state.isLoading = false;
			state.isError = false;
			state.message = "";
		},
		getLoggedUserError(
			state: UserReducerState,
			action: PayloadAction<{message: string}>
		) {
			console.log("Consiguiendo Usuario Logueado Error");
			const {message} = action.payload;
			state.isLoading = false;
			state.isLogged = false;
			state.isError = true;
			state.message = message;
		},
	},
});

export const {
	loginRequest,
	loginSuccess,
	loginError,
	registerRequest,
	registerSucess,
	registerError,
	getLoggedUserRequest,
	getLoggedUserSuccess,
	getLoggedUserError,
} = userSlice.actions;

export default userSlice.reducer;
