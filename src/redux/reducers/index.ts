import userReducer from "./user"
import homeServicesPlansReducer from "./homeServicesPlans"
import cartReducer from "./cart";
import {UserReducerState, HomeServicesPlansReducerState, CartReducerState} from "./reducerStateInterface";

export interface RootReducerState {
 user: UserReducerState,
 homeServicesPlans: HomeServicesPlansReducerState,
 cart: CartReducerState
}


const rootReducer = {
 user: userReducer,
 homeServicesPlans: homeServicesPlansReducer,
 cart: cartReducer
}

export default rootReducer;
