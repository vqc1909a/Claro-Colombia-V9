import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

//!Components
import FormHeader from "./FormHeader";

//!StyledUi
import StyledGrid from "components/StyledUi/StyledGrid";
import StyledInputLabel from "components/StyledUi/StyledInputLabel";

//!Uuids
import { v4 as uuid } from 'uuid';

//!Interfaces
import {InformacionBasicaArgs, ChangeEventArgs} from "./HomeServicesAddress";


const departamentos = [
  {
    _id: uuid(),
    nombre: "Selecciona"
  },
  {
    _id: uuid(),
    nombre: "Antioquía",
  },
  {
    _id: uuid(),
    nombre: "Arauca",
  },
  {
    _id: uuid(),
    nombre: "Atlántico",
  },
  {
    _id: uuid(),
    nombre: "Bolívar",
  }
];

const ciudades = [
  {
    _id: uuid(),
    idDepartamento: "Selecciona",
    nombre: "Selecciona"
  },
  {
    _id: uuid(),
    idDepartamento: "Antioquía",
    nombre: "Selecciona"
  },
  {
    _id: uuid(),
    idDepartamento: "Antioquía",
    nombre: "Medellín"
  },
  {
    _id: uuid(),
    idDepartamento: "Antioquía",
    nombre: "Bello"
  },
  {
    _id: uuid(),
    idDepartamento: "Antioquía",
    nombre: "Itaguí"
  },
  {
    _id: uuid(),
    idDepartamento: "Antioquía",
    nombre: "Envigado"
  },
  {
    _id: uuid(),
    idDepartamento: "Antioquía",
    nombre: "Apartadó"
  },
  {
    _id: uuid(),
    idDepartamento: "Arauca",
    nombre: "Selecciona"
  },
  {
    _id: uuid(),
    idDepartamento: "Arauca",
    nombre: "Arauca"
  },
  {
    _id: uuid(),
    idDepartamento: "Arauca",
    nombre: "Arauquita"
  },
  {
    _id: uuid(),
    idDepartamento: "Arauca",
    nombre: "Cravo Norte"
  },
  {
    _id: uuid(),
    idDepartamento: "Arauca",
    nombre: "Puerto Rondón"
  },
  {
    _id: uuid(),
    idDepartamento: "Atlántico",
    nombre: "Selecciona"
  },
  {
    _id: uuid(),
    idDepartamento: "Atlántico",
    nombre: "Barranquilla"
  },
  {
    _id: uuid(),
    idDepartamento: "Atlántico",
    nombre: "Baranoa"
  },
  {
    _id: uuid(),
    idDepartamento: "Atlántico",
    nombre: "Campo de la Cruz"
  },
  {
    _id: uuid(),
    idDepartamento: "Atlántico",
    nombre: "Candelaria"
  },
  {
    _id: uuid(),
    idDepartamento: "Atlántico",
    nombre: "Galapa"
  },
  {
    _id: uuid(),
    idDepartamento: "Bolívar",
    nombre: "Selecciona"
  },
  {
    _id: uuid(),
    idDepartamento: "Bolívar",
    nombre: "Cartagena de Indias"
  },
  {
    _id: uuid(),
    idDepartamento: "Bolívar",
    nombre: "Magangué"
  },
  {
    _id: uuid(),
    idDepartamento: "Bolívar",
    nombre: "El Carmen de Bolívar"
  },
  {
    _id: uuid(),
    idDepartamento: "Bolívar",
    nombre: "Turbaco"
  },
  {
    _id: uuid(),
    idDepartamento: "Bolívar",
    nombre: "Arjona"
  }
];

const estratos = [
  {
    _id: uuid(),
    nombre: "Selecciona",
  },
  {
    _id: uuid(),
    nombre: "Estrato 1",
  },
  {
    _id: uuid(),
    nombre: "Estrato 2",
  },
  {
    _id: uuid(),
    nombre: "Estrato 3",
  },
  {
    _id: uuid(),
    nombre: "Estrato 4",
  },
  {
    _id: uuid(),
    nombre: "Estrato 5",
  },
  {
    _id: uuid(),
    nombre: "Estrato 6",
  }
];

const direcciones = [
  {
    _id: uuid(),
    nombre: "Selecciona",
  },
  {
    _id: uuid(),
    nombre: "Avenida",
  },
  {
    _id: uuid(),
    nombre: "Calle",
  },
  {
    _id: uuid(),
    nombre: "Carrera",
  },
  {
    _id: uuid(),
    nombre: "Transversal",
  }
];

interface BasicInformationFormArgs {
 handleInformacionBasica: ChangeEventArgs,
 informacionBasica: InformacionBasicaArgs
}

const BasicInformationForm = ({handleInformacionBasica, informacionBasica}: BasicInformationFormArgs) => {

 const {
   departamento,
   ciudad,
   centroPoblado,
   estrato,
   direccion,
   detallesDireccion1,
   detallesDireccion2,
   detallesDireccion3
 } = informacionBasica;

 return (
  <Box sx={{ mb: 4 }}>
   <FormHeader number={1} description={"Diligencia la información básica de tu dirección."}></FormHeader>
   <StyledGrid container spacing={3}>
     {/* Departamento */}
     <StyledGrid item xs={12} sm={6}>
       <StyledInputLabel
         htmlFor="departamento"
       >
         * Departamento 
       </StyledInputLabel>
       <TextField
         id="departamento"
         select
         value={departamento}
         onChange={(e) => handleInformacionBasica(e)}
         name="departamento"
         style={{ width: "100%" }}
       >
         {departamentos.map((departamento) => (
           <MenuItem
             key={departamento._id}
             value={departamento.nombre}
           >
             {departamento.nombre}
           </MenuItem>
         ))}
       </TextField>
     </StyledGrid>
     {/* Ciudad */}
     <StyledGrid item xs={12} sm={6}>
       <StyledInputLabel
         htmlFor="ciudad"
       >
         * Ciudad
       </StyledInputLabel>
       <TextField
         id="ciudad"
         select
         value={ciudad}
         onChange={(e) => handleInformacionBasica(e)}
         name="ciudad"
         style={{ width: "100%" }}
       >
         {ciudades.filter(ciudad => ciudad.idDepartamento === departamento).map((ciudad) => (
           <MenuItem
             key={ciudad._id}
             value={ciudad.nombre}
           >
             {ciudad.nombre}
           </MenuItem>
         ))}
       </TextField>
     </StyledGrid>
     {/* Centro Poblado */}
     <StyledGrid item xs={6}>
       <StyledInputLabel
         htmlFor="centroPoblado"
       >
         Centro Poblado (opcional)
       </StyledInputLabel>
       <TextField
         id="centroPoblado"
         value={centroPoblado}
         onChange={(e) => handleInformacionBasica(e)}
         name="centroPoblado"
         style={{ width: "100%" }}
       ></TextField>
     </StyledGrid>
     {/* Estrato */}
     <StyledGrid item xs={6}>
       <StyledInputLabel
         htmlFor="estrato"
       >
         * Estrato
       </StyledInputLabel>
       <TextField
         id="estrato"
         select
         value={estrato}
         onChange={(e) => handleInformacionBasica(e)}
         name="estrato"
         style={{ width: "100%" }}
       >
         {estratos.map((estrato) => (
           <MenuItem
             key={estrato._id}
             value={estrato.nombre}
           >
             {estrato.nombre}
           </MenuItem>
         ))}
       </TextField>
     </StyledGrid>
     {/* Dirección */}
     <StyledGrid item xs={12} sm={6}>
       <StyledInputLabel
         htmlFor="direccion"
       >
         * Dirección
       </StyledInputLabel>
       <TextField
         id="direccion"
         select
         value={direccion}
         onChange={(e) => handleInformacionBasica(e)}
         name="direccion"
         style={{ width: "100%" }}
         placeholder="Placeholder"
       >
         {direcciones.map((direccion) => (
           <MenuItem
             key={direccion._id}
             value={direccion.nombre}
           >
             {direccion.nombre}
           </MenuItem>
         ))}
       </TextField>
     </StyledGrid>
     {/* Detalle Dirección */}
     <StyledGrid item xs={12} sm={6}>
       <StyledInputLabel
         htmlFor="detallesDireccion1"
       >
         * Detalle dirección
       </StyledInputLabel>
       <Box
         sx={{
           display: "flex",
           justifyContent: "space-between"
         }}
       >
         <TextField
           id="detallesDireccion1"
           name="detallesDireccion1"
           helperText="Ej. 123B Sur B"
           value={detallesDireccion1}
           onChange={(e) => handleInformacionBasica(e)}
         ></TextField>
         <Box
           component="span"
           sx={{
             display: "inline-block",
             mt: 3
           }}
         >
           #
         </Box>
         <TextField
           id="detallesDireccion2"
           name="detallesDireccion2"
           helperText="Ej. 23B Bis"
           value={detallesDireccion2}
           onChange={(e) => handleInformacionBasica(e)}
         ></TextField>
         <Box
           component="span"
           sx={{
             display: "inline-block",
             mt: 3
           }}
         >
           -
         </Box>
         <TextField
           id="detallesDireccion3"
           name="detallesDireccion3"
           helperText=" "
           value={detallesDireccion3}
           onChange={(e) => handleInformacionBasica(e)}
         ></TextField>
       </Box>
     </StyledGrid>
   </StyledGrid>
  </Box>
 )
}

export default BasicInformationForm