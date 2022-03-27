import {Plan, ShippingAddress} from "redux/reducers/reducerStateInterface";
import {Dispatch, SetStateAction} from "react";

export interface ModifyOrRemoveThePackageProps {
    totalPrice: number
    numberPackages: number
}

export interface AmountPackagesProps extends ModifyOrRemoveThePackageProps{
    setNumberPackages: (number: number) => void
    // setNumberPackages: Dispatch<SetStateAction<number>>,
    // plans: Plan[],
}

export interface PackageDetailsProps extends ModifyOrRemoveThePackageProps{
    plans: Plan[]
}

export interface PurchaseSummaryProps extends ModifyOrRemoveThePackageProps {
    plansPrice: number,
    taxPrice: number,
    shippingAddress: ShippingAddress,
    handleCart(): void
}

export interface ContextType {
    setNumberStep: Dispatch<SetStateAction<number>>
}