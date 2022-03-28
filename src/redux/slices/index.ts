import userReducer from "./user"
import homePlansReducer from "./homePlans"
import cartReducer from "./cart"

const rootReducer = {
 user: userReducer,
 homePlans: homePlansReducer,
 cart: cartReducer
}

export default rootReducer;
