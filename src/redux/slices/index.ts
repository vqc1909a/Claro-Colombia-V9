import userReducer from "./user";
import homePlansReducer from "./homePlans";
import cartReducer from "./cart";
import pinReducer from "./pin";
import orderReducer from "./order";

const rootReducer = {
 user: userReducer,
 homePlans: homePlansReducer,
 cart: cartReducer,
 pin: pinReducer,
 order: orderReducer
}

export default rootReducer;
