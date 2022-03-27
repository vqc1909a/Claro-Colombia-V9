// import {Dispatch, SetStateAction} from "react";

export interface CounterArgs {
    value: number,
    // setValue: Dispatch<SetStateAction<number>>
    setValue: (number: number) => void
}