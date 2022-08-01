import {Plan, ShippingAddress} from "redux/slices/reducerStateInterface";
import {Dispatch, SetStateAction} from "react";

export interface ModifyOrRemoveThePackageProps {
    totalPrice: number
}

export interface AmountPackagesProps extends ModifyOrRemoveThePackageProps{
    numberPackages: number,
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

export interface ItemAdditionalInformation {
    _id: string,
    label: string,
    description: string,
    status: boolean
}