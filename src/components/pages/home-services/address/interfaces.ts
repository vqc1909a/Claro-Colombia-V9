import { ChangeEvent, ChangeEventSelect } from "interfaces";

export interface BasicInformationState {
    departamento: string;
    ciudad: string;
    centroPoblado: string;
    estrato: string;
    direccion: string;
    detallesDireccion1: string;
    detallesDireccion2: string;
    detallesDireccion3: string;
}

export interface ComplementaryInformationState {
    barrio: string;
    bloqueInterior: string;
    numeroBloqueInterior: string;
    tipoInmueble: string;
    numeroTipoInmueble: string;
    inmuebleOtro: string;
    informacionAdicional: string;
}

export interface ShippingAddressState {
    address: string
    price: number,
    isFree: boolean
}

export interface FormHeaderProps {
  number: number,
  description: string
}

export interface BasicInformationFormProps {
 handleChange: ChangeEvent,
 handleChangeSelect: ChangeEventSelect,
 state: BasicInformationState   
}

export interface ComplementaryInformationFormProps {
 handleChange: ChangeEvent,
 handleChangeSelect: ChangeEventSelect,
 isActiveState1: boolean,
 isActiveState2: boolean,
 state: ComplementaryInformationState
}