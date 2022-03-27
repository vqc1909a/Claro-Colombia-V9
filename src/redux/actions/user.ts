import {createAction} from "@reduxjs/toolkit";
import * as ACTIONTYPES from "../action-types/user";

export const USER_LOGIN_REQUEST_ACTION = createAction<string | any>(ACTIONTYPES.USER_LOGIN_REQUEST);
export const USER_LOGIN_SUCCESS_ACTION = createAction<string | any>(ACTIONTYPES.USER_LOGIN_SUCCESS);
export const USER_LOGIN_ERROR_ACTION = createAction<string | any>(ACTIONTYPES.USER_LOGIN_ERROR);

export const USER_REGISTER_REQUEST_ACTION = createAction<string | any>(ACTIONTYPES.USER_REGISTER_REQUEST);
export const USER_REGISTER_SUCCESS_ACTION = createAction<string | any>(ACTIONTYPES.USER_REGISTER_SUCCESS);
export const USER_REGISTER_ERROR_ACTION = createAction<string | any>(ACTIONTYPES.USER_REGISTER_ERROR);

export const GET_LOGGED_USER_REQUESTED_ACTION = createAction<string | any>(ACTIONTYPES.GET_USER_LOGGED_REQUEST);
export const GET_USER_LOGGED_SUCCESS_ACTION = createAction<string | any>(ACTIONTYPES.GET_USER_LOGGED_SUCCESS);
export const GET_USER_LOGGED_ERROR_ACTION = createAction<string | any>(ACTIONTYPES.GET_USER_LOGGED_ERROR);


