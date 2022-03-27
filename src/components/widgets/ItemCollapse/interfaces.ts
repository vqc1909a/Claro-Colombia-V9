import {Dispatch, SetStateAction} from "react";

export interface ItemCollapseProps {
    item: any,
    setItems: Dispatch<SetStateAction<any[]>> 
}
