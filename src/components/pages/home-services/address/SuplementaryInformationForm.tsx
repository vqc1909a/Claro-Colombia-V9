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
import {InformacionComplementariaArgs, ChangeEventArgs} from "./HomeServicesAddress";

const barrios = [
  {
    _id: uuid(),
    nombre: "Selecciona",
  },
  {
    _id: uuid(),
    nombre: "Bella Suiza",
  },
  {
    _id: uuid(),
    nombre: "Bellavista",
  },
  {
    _id: uuid(),
    nombre: "Bosa",
  },
  {
    _id: uuid(),
    nombre: "Campo Alegre",
  },
  {
    _id: uuid(),
    nombre: "Caney",
  }
];

const bloques = [
  {
    _id: uuid(),
    nombre: "Selecciona",
  },
  {
    _id: uuid(),
    nombre: "Bloque",
  },
  {
    _id: uuid(),
    nombre: "Interior",
  }
];

const numerosBloqueInterior = [
  {
    _id: uuid(),
    nombre: "Selecciona",
  },
  {
    _id: uuid(),
    nombre: "1",
  },
  {
    _id: uuid(),
    nombre: "2",
  },
  {
    _id: uuid(),
    nombre: "3",
  }
];

const tiposDeInmueble = [
  {
    _id: uuid(),
    nombre: "Selecciona",
  },
  {
    _id: uuid(),
    nombre: "Administración",
  },
  {
    _id: uuid(),
    nombre: "Apartamento",
  },
  {
    _id: uuid(),
    nombre: "Bodega",
  },
  {
    _id: uuid(),
    nombre: "Casa",
  }
];

const numerosDeInmueble = [
  {
    _id: uuid(),
    nombre: "Selecciona",
  },
  {
    _id: uuid(),
    nombre: "101",
  },
  {
    _id: uuid(),
    nombre: "102",
  },
  {
    _id: uuid(),
    nombre: "103",
  },
  {
    _id: uuid(),
    nombre: "201",
  },
  {
    _id: uuid(),
    nombre: "202",
  },
  {
    _id: uuid(),
    nombre: "203",
  },
  {
    _id: uuid(),
    nombre: "301",
  },
  {
    _id: uuid(),
    nombre: "302",
  },
  {
    _id: uuid(),
    nombre: "303",
  },
  {
    _id: uuid(),
    nombre: "Otro",
  }
];

interface SuplementaryInformationFormArgs {
 handleInformacionComplementaria: ChangeEventArgs,
 estadoInformacionComplementaria1: boolean,
 estadoInformacionComplementaria2: boolean,
 informacionComplementaria: InformacionComplementariaArgs
}


const SuplementaryInformationForm = ({handleInformacionComplementaria, estadoInformacionComplementaria1, estadoInformacionComplementaria2, informacionComplementaria}: SuplementaryInformationFormArgs) => {

  const {
    barrio,
    bloqueInterior,
    numeroBloqueInterior,
    tipoInmueble,
    numeroTipoInmueble,
    inmuebleOtro,
    informacionAdicional
  } = informacionComplementaria;

 return (
  <Box sx={{ mb: 2 }}>
   <FormHeader number={2} description={"Diligencia la información complementaria de tu dirección."}></FormHeader>
   <StyledGrid container spacing={3}>
     {estadoInformacionComplementaria1 && (
       <>
         {/* Barrio */}
         <StyledGrid item xs={12} sm={6}>
           <StyledInputLabel
             htmlFor="barrio"
           >
             Barrio *
           </StyledInputLabel>
           <TextField
             id="barrio"
             select
             value={barrio}
             onChange={(e) =>
               handleInformacionComplementaria(e)
             }
             name="barrio"
             style={{ width: "100%" }}
           >
             {barrios.map((barrio) => (
               <MenuItem
                 key={barrio._id}
                 value={barrio.nombre}
               >
                 {barrio.nombre}
               </MenuItem>
             ))}
           </TextField>
         </StyledGrid>
         {/* Bloque o Interior */}
         <StyledGrid item xs={6} sm={3}>
           <StyledInputLabel
             htmlFor="bloqueInterior"
           >
             Bloque o interior *
           </StyledInputLabel>
           <TextField
             id="bloqueInterior"
             select
             value={bloqueInterior}
             onChange={(e) =>
               handleInformacionComplementaria(e)
             }
             name="bloqueInterior"
             style={{ width: "100%" }}
           >
             {bloques.map((bloque) => (
               <MenuItem
                 key={bloque._id}
                 value={bloque.nombre}
               >
                 {bloque.nombre}
               </MenuItem>
             ))}
           </TextField>
         </StyledGrid>
         {/* Numero Bloque o Interior */}
         <StyledGrid item xs={6} sm={3}>
           <StyledInputLabel
             htmlFor="numeroBloqueInterior"
           >
             Número *
           </StyledInputLabel>
           <TextField
             id="numeroBloqueInterior"
             select
             value={numeroBloqueInterior}
             onChange={(e) =>
               handleInformacionComplementaria(e)
             }
             name="numeroBloqueInterior"
             style={{ width: "100%" }}
           >
             {numerosBloqueInterior.map((numero) => (
               <MenuItem
                 key={numero._id}
                 value={numero.nombre}
               >
                 {numero.nombre}
               </MenuItem>
             ))}
           </TextField>
         </StyledGrid>
       </>
     )}
     {estadoInformacionComplementaria2 && (
       <>
         {/* Tipo de Inmueble */}
         <StyledGrid item xs={12} sm={6}>
           <StyledInputLabel
             htmlFor="tipoInmueble"
           >
             Tipo de Inmueble *
           </StyledInputLabel>
           <TextField
             id="tipoInmueble"
             select
             value={tipoInmueble}
             onChange={(e) =>
               handleInformacionComplementaria(e)
             }
             name="tipoInmueble"
             style={{ width: "100%" }}
           >
             {tiposDeInmueble.map((tipo) => (
               <MenuItem
                 key={tipo._id}
                 value={tipo.nombre}
               >
                 {tipo.nombre}
               </MenuItem>
             ))}
           </TextField>
         </StyledGrid>
         {/* Numero de Tipo de Inmueble */}
         <StyledGrid item xs={6} sm={3}>
           <StyledInputLabel
             htmlFor="numeroTipoInmueble"
           >
             Número *
           </StyledInputLabel>
           <TextField
             id="numeroTipoInmueble"
             select
             value={numeroTipoInmueble}
             onChange={(e) =>
               handleInformacionComplementaria(e)
             }
             name="numeroTipoInmueble"
             style={{ width: "100%" }}
           >
             {numerosDeInmueble.map((numero) => (
               <MenuItem
                 key={numero._id}
                 value={numero.nombre}
               >
                 {numero.nombre}
               </MenuItem>
             ))}
           </TextField>
         </StyledGrid>
         {/* Si el numero de tipo de inmueble es otro */}
         {numeroTipoInmueble === "Otro" && (
           <StyledGrid item xs={6} sm={3}>
             <StyledInputLabel
               htmlFor="inmuebleOtro"
             >
               Otro - Cuál? *
             </StyledInputLabel>
             <TextField
               error
               id="inmuebleOtro"
               value={inmuebleOtro}
               onChange={(e) =>
                 handleInformacionComplementaria(e)
               }
               name="inmuebleOtro"
               style={{ width: "100%" }}
             ></TextField>
           </StyledGrid>
         )}
       </>
     )}
     {/* Infomración Adicional */}
     <StyledGrid item xs={12}>
       <StyledInputLabel
         htmlFor="informacionAdicional"
       >
         Información adicional para tu instalación:
       </StyledInputLabel>
       <TextField
         id="informacionAdicional"
         value={informacionAdicional}
         onChange={(e) =>
           handleInformacionComplementaria(e)
         }
         name="informacionAdicional"
         style={{ width: "100%" }}
         helperText="Ej. Vereda la Estancia"
       ></TextField>
     </StyledGrid>
   </StyledGrid>
  </Box>
 )
}

export default SuplementaryInformationForm