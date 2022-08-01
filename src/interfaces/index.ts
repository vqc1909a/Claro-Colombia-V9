import { SelectChangeEvent } from '@mui/material/Select';
import {Dispatch, SetStateAction} from "react";


export type SetValue<T extends Object> = Dispatch<SetStateAction<T>>

export interface ChangeEvent {
    (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void;
}

export interface ChangeEventSelect {
    (event: SelectChangeEvent<any>): void;
}

export interface FormEvent {
    (event: React.FormEvent<HTMLFormElement>): any;
}
