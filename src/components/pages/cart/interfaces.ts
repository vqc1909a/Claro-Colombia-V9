import {Dispatch, SetStateAction} from "react";

export interface ContextType {
    setNumberStep: Dispatch<SetStateAction<number>>
}