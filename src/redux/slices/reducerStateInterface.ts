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


export interface UserInformation {
    personalData: {
        email: string,
        firstname: string,
        lastname: string,
        cellphone: string,
        additionalCellphone: string,
        documentType: string,
        documentNumber: string
    },
    installationData: {
        whoReceives: string,
        nameOtherPerson: string
    }
}

export interface TermsContract{
    acceptTermsContract: boolean,
    acceptClauseContract: boolean, 
    acceptReceiveDigitalInvoice: boolean
}

export interface InstallationSchedule{
    date: string,
    time: string
}

export interface OrderHomePlan {
    orderNumber: string,
    orderDate: string,
    items: Plan[],
    itemsPrice: number,
    taxPrice: number,
    totalPrice: number,
    numberPackages: number,
    shippingAddress: ShippingAddress,
    userInformation: UserInformation,
    termsContract: TermsContract,
    installationSchedule: InstallationSchedule
}

//!Interfaces de cada uno de los reducers
export interface UserReducerState {
 isLogged: boolean,
 user: any,
 isError: boolean,
 isLoading: boolean,
 message: string
}

export interface HomePlansReducerState {
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
    totalPrice: number,
    userInformation: UserInformation,
    termsContract: TermsContract,
    installationSchedule: InstallationSchedule
}

export interface PinReducerState {
    stateSend: {
        hasSend: boolean,
        isLoading: boolean,
        isError: boolean,
        message: string
    },
    stateVerify: {
        isLoading: boolean,
        isError: boolean,
        message: string
    }
}

export interface OrderReducerState {
    orderHomePlan: OrderHomePlan,
    isError: boolean,
    isLoading: boolean,
    message: string
}

