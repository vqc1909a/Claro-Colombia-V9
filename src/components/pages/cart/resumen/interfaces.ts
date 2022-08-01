import {Plan, ShippingAddress} from "redux/slices/reducerStateInterface";
import {Dispatch, SetStateAction} from "react";

export interface ModifyOrRemoveThePackageProps {
    totalPrice: number
}

export interface AmountPackagesProps extends ModifyOrRemoveThePackageProps{
    // setNumberPackages: Dispatch<SetStateAction<number>>,
    // plans: Plan[],
    numberPackages: number
}

export interface PackageDetailsProps extends ModifyOrRemoveThePackageProps{
    plans: Plan[]
}

export interface PurchaseSummaryProps extends ModifyOrRemoveThePackageProps {
    plansPrice: number,
    taxPrice: number,
    shippingAddress: ShippingAddress
}

export interface ContextType {
    setNumberStep: Dispatch<SetStateAction<number>>
}

export interface ItemAdditionalInformation {
    _id: string,
    label: string,
    description: string,
    status: boolean
}