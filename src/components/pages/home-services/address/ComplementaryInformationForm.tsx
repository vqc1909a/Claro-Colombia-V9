import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";

//!Components
import FormHeader from "./FormHeader";

//!StyledUi
import StyledGrid from "components/StyledUi/StyledGrid";
import StyledInputLabel from "components/StyledUi/StyledInputLabel";
import StyledTextField from "components/StyledUi/StyledTextField";
import StyledSelect from "components/StyledUi/StyledSelect";



//!Uuids
import { v4 as uuid } from 'uuid';


//!Interfaces
import {ComplementaryInformationFormArgs} from "./interfaces";

const barrios = [
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


const ComplementaryInformationForm = ({handleInformacionComplementaria, estadoInformacionComplementaria1, estadoInformacionComplementaria2, informacionComplementaria}: ComplementaryInformationFormArgs) => {

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
           <StyledSelect
             id="barrio"
             value={barrio}
             onChange={handleInformacionComplementaria}
             name="barrio"
             displayEmpty={true}
           >
              <MenuItem value="" selected disabled>
                  Selecciona
              </MenuItem>
             {barrios.map((barrio) => (
               <MenuItem
                 key={barrio._id}
                 value={barrio.nombre}
               >
                 {barrio.nombre}
               </MenuItem>
             ))}
           </StyledSelect>
         </StyledGrid>

         {/* Bloque o Interior */}
         <StyledGrid item xs={6} sm={3}>
           <StyledInputLabel
             htmlFor="bloqueInterior"
           >
             Bloque o interior *
           </StyledInputLabel>
           <StyledSelect
             id="bloqueInterior"
             value={bloqueInterior}
             onChange={handleInformacionComplementaria}
             name="bloqueInterior"
             displayEmpty={true}

           >
              <MenuItem value="" selected disabled>
                Selecciona
              </MenuItem>
             {bloques.map((bloque) => (
               <MenuItem
                 key={bloque._id}
                 value={bloque.nombre}
               >
                 {bloque.nombre}
               </MenuItem>
             ))}
           </StyledSelect>
         </StyledGrid>

         {/* Numero Bloque o Interior */}
         <StyledGrid item xs={6} sm={3}>
           <StyledInputLabel
             htmlFor="numeroBloqueInterior"
           >
             Número *
           </StyledInputLabel>
           <StyledSelect
             id="numeroBloqueInterior"
             value={numeroBloqueInterior}
             onChange={handleInformacionComplementaria}
             name="numeroBloqueInterior"
             displayEmpty={true}
           >
              <MenuItem value="" selected disabled>
                Selecciona
              </MenuItem>
             {numerosBloqueInterior.map((numero) => (
               <MenuItem
                 key={numero._id}
                 value={numero.nombre}
               >
                 {numero.nombre}
               </MenuItem>
             ))}
           </StyledSelect>
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
           <StyledSelect
             id="tipoInmueble"
             value={tipoInmueble}
             onChange={(e) =>
               handleInformacionComplementaria(e)
             }
             name="tipoInmueble"
             displayEmpty={true}
           >
              <MenuItem value="" selected disabled>
                Selecciona
              </MenuItem>
             {tiposDeInmueble.map((tipo) => (
               <MenuItem
                 key={tipo._id}
                 value={tipo.nombre}
               >
                 {tipo.nombre}
               </MenuItem>
             ))}
           </StyledSelect>
         </StyledGrid>
         {/* Numero de Tipo de Inmueble */}
         <StyledGrid item xs={6} sm={3}>
           <StyledInputLabel
             htmlFor="numeroTipoInmueble"
           >
             Número *
           </StyledInputLabel>
           <StyledSelect
             id="numeroTipoInmueble"
             value={numeroTipoInmueble}
             onChange={(e) =>
               handleInformacionComplementaria(e)
             }
             name="numeroTipoInmueble"
             displayEmpty={true}
           >
              <MenuItem value="" selected disabled>
                Selecciona
              </MenuItem>
             {numerosDeInmueble.map((numero) => (
               <MenuItem
                 key={numero._id}
                 value={numero.nombre}
               >
                 {numero.nombre}
               </MenuItem>
             ))}
           </StyledSelect>
         </StyledGrid>
         {/* Si el numero de tipo de inmueble es otro */}
         {numeroTipoInmueble === "Otro" && (
           <StyledGrid item xs={6} sm={3}>
             <StyledInputLabel
               htmlFor="inmuebleOtro"
             >
               Otro - Cuál? *
             </StyledInputLabel>
             <StyledTextField
               error
               id="inmuebleOtro"
               value={inmuebleOtro}
               onChange={(e) =>
                 handleInformacionComplementaria(e)
               }
               name="inmuebleOtro"
             ></StyledTextField>
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
       <StyledTextField
         id="informacionAdicional"
         value={informacionAdicional}
         onChange={(e) =>
           handleInformacionComplementaria(e)
         }
         name="informacionAdicional"
         helperText="Ej. Vereda la Estancia"
       ></StyledTextField>
     </StyledGrid>
   </StyledGrid>
  </Box>
 )
}

export default ComplementaryInformationForm