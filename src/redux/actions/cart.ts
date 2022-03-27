import {createAction} from "@reduxjs/toolkit";
import * as ACTIONTYPES from "../action-types/cart";

export const CART_ADD_ITEM_ACTION = createAction<string | any>(ACTIONTYPES.CART_ADD_ITEM);
export const CART_SAVE_SHIPPING_ADDRESS_ACTION = createAction<string | any>(ACTIONTYPES.CART_SAVE_SHIPPING_ADDRESS);
export const CART_ADD_ITEMS_ACTION = createAction<string | any>(ACTIONTYPES.CART_ADD_ITEMS);

export const RESET_CART_ACTION = createAction<string | any>(ACTIONTYPES.RESET_CART);
export const UPDATE_NUMBER_PACKAGES_CART_ACTION = createAction<string | any>(ACTIONTYPES.UPDATE_NUMBER_PACKAGES_CART);



