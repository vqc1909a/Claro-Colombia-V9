import {createAction} from "@reduxjs/toolkit";
import * as ACTIONTYPES from "../action-types/homeServicesPlans";

export const GET_HOME_SERVICES_PLANS_REQUEST_ACTION = createAction<string | any>(ACTIONTYPES.GET_HOME_SERVICES_PLANS_REQUEST);
export const GET_HOME_SERVICES_PLANS_SUCCESS_ACTION = createAction<string | any>(ACTIONTYPES.GET_HOME_SERVICES_PLANS_SUCCESS);
export const GET_HOME_SERVICES_PLANS_ERROR_ACTION = createAction<string | any>(ACTIONTYPES.GET_HOME_SERVICES_PLANS_ERROR);

export const TOGGLE_SELECTED_HOME_SERVICES_PLANS_ACTION = createAction<string | any>(ACTIONTYPES.TOGGLE_SELECTED_HOME_SERVICES_PLANS);
export const RESET_SELECTED_HOME_SERVICES_PLANS_ACTION = createAction<string | any>(ACTIONTYPES.RESET_SELECTED_HOME_SERVICES_PLANS);
export const GET_SELECTED_HOME_SERVICES_PLANS_ACTION = createAction<string | any>(ACTIONTYPES.GET_SELECTED_HOME_SERVICES_PLANS);





