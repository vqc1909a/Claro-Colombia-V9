export interface Plan {
    subcategory: string;
    image: string;
    idImage: string;
    benefits: string[];
    comboPrice: number;
    isActive: boolean;
    _id: string;
    category: string;
    plan: string;
    unitPrice: number;
    createdAt: string;
    updatedAt: string;
    isSelected: boolean
}

export interface ShippingAddress {
    address: string,
    price: number,
    isFree: boolean,
}

//!Interfaces de cada uno de los reducers
export interface UserReducerState {
 isLogged: boolean,
 user: any,
 isError: boolean,
 isLoading: boolean,
 message: string
}

export interface HomeServicesPlansReducerState {
    plans: Plan[],
    selectedPlans: Plan[],
    isError: boolean,
    isLoading: boolean,
    message: string
}

export interface CartReducerState {
    items: Plan[],
    itemsPrice: number,
    taxPrice: number,
    numberPackages: number,
    shippingAddress: ShippingAddress,
    totalPrice: number    
}