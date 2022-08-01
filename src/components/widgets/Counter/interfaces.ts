// import {Dispatch, SetStateAction} from "react";

export interface CounterProps {
    value: number,
    // setValue: Dispatch<SetStateAction<number>>
    setValue: (number: number) => void,
    notShow: boolean
}