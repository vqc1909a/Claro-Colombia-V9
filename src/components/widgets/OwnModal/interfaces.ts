import {SetValue} from "interfaces";

export interface ModalProps {
    openModal: boolean,
    setOpenModal: SetValue<boolean>,
    children: React.ReactNode
}