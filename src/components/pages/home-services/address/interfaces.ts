import { SelectChangeEvent } from '@mui/material/Select';

export interface InformacionComplementariaArgs {
    barrio: string;
    bloqueInterior: string;
    numeroBloqueInterior: string;
    tipoInmueble: string;
    numeroTipoInmueble: string;
    inmuebleOtro: string;
    informacionAdicional: string;
}

export interface InformacionBasicaArgs {
    departamento: string;
    ciudad: string;
    centroPoblado: string;
    estrato: string;
    direccion: string;
    detallesDireccion1: string;
    detallesDireccion2: string;
    detallesDireccion3: string;
}

export interface ChangeEventArgs {
    (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement> | SelectChangeEvent): void;
}

// export interface ChangeEventSelectArgs {
//     (event: SelectChangeEvent): void;
// }

export interface FormHeaderArgs {
  number: number,
  description: string
}

export interface BasicInformationFormArgs {
 handleInformacionBasica: any,
 informacionBasica: InformacionBasicaArgs   
}

export interface ComplementaryInformationFormArgs {
 handleInformacionComplementaria: any,
 estadoInformacionComplementaria1: boolean,
 estadoInformacionComplementaria2: boolean,
 informacionComplementaria: InformacionComplementariaArgs
}