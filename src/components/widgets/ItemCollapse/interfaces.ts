import {Dispatch, SetStateAction} from "react";

export interface ItemCollapse {
    item: any,
    setItems: Dispatch<SetStateAction<any[]>> 
}
