import {createReducer, AnyAction} from "@reduxjs/toolkit";
import initStates from "./initStates";
import * as ACTIONS from "../actions/user";
import {UserReducerState} from "./reducerStateInterface";


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


const userReducer = createReducer(initStates.user, (builder) => {
    builder
        .addCase(
            ACTIONS.USER_LOGIN_REQUEST_ACTION,
            (state: UserReducerState, action: AnyAction) => {
                console.log("Logueandose")
                state.isLoading = true;
            }
        )
        .addCase(
            ACTIONS.USER_LOGIN_SUCCESS_ACTION,
            (state: UserReducerState, action: AnyAction) => {
                console.log("Logueo Exitoso")
                const payload = action.payload
                state.isLoading = false;
                state.isLogged = true;
                state.isError = false;
                state.user = payload.user
                state.message = ""
            }
        )
        .addCase(
            ACTIONS.USER_LOGIN_ERROR_ACTION,
            (state: UserReducerState, action: AnyAction) => {
                console.log("Logueo Fallido")
                const payload = action.payload;

                state.isLoading = false;
                state.isLogged = false;
                state.isError = true;
                state.message = payload.message
            }
        )

        .addCase(
            ACTIONS.USER_REGISTER_REQUEST_ACTION,
            (state: UserReducerState, action: AnyAction) => {
                console.log("Registrandonos");
            }
        )
        .addCase(
            ACTIONS.USER_REGISTER_SUCCESS_ACTION,
            (state: UserReducerState, action: AnyAction) => {
                console.log("Registro exitoso");
            }
        )
        .addCase(
            ACTIONS.USER_REGISTER_ERROR_ACTION,
            (state: UserReducerState, action: AnyAction) => {
                console.log("Registro error");
            }
        )
        .addCase(
            ACTIONS.GET_LOGGED_USER_REQUESTED_ACTION,
            (state: UserReducerState, action: AnyAction) => {
                console.log("Consiguiendo Usuario Logueado")
                state.isLoading = true;
            }
        )
        .addCase(
            ACTIONS.GET_USER_LOGGED_SUCCESS_ACTION,
            (state: UserReducerState, action: AnyAction) => {
                console.log("Consiguiendo Usuario Logueado Exitoso")
                const {password, ...payload} = action.payload;
                state.user = payload
                state.isLoading = false;
                state.isError = false;
                state.message = ""
            }
        )
        .addCase(
            ACTIONS.GET_USER_LOGGED_ERROR_ACTION,
            (state: UserReducerState, action: AnyAction) => {
                console.log("Consiguiendo Usuario Logueado Error")
                const payload = action.payload;
                state.isLoading = false;
                state.isLogged = false;
                state.isError = true;
                state.message = payload.message
            }
        );
});

export default userReducer;
