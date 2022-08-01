import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";

//!Components
import FormHeader from "./FormHeader";

//!StyledUi
import StyledGrid from "components/StyledUi/StyledGrid";
import StyledInputLabel from "components/StyledUi/StyledInputLabel";
import StyledTextField from "components/StyledUi/StyledTextField";
import StyledSelect from "components/StyledUi/StyledSelect"


//!Uuids
import {v4 as uuid} from "uuid";

//!Interfaces
import {BasicInformationFormProps} from "./interfaces";

const departamentos = [
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
    },
];

const ciudades = [
    {
        _id: uuid(),
        idDepartamento: "Antioquía",
        nombre: "Medellín",
    },
    {
        _id: uuid(),
        idDepartamento: "Antioquía",
        nombre: "Bello",
    },
    {
        _id: uuid(),
        idDepartamento: "Antioquía",
        nombre: "Itaguí",
    },
    {
        _id: uuid(),
        idDepartamento: "Antioquía",
        nombre: "Envigado",
    },
    {
        _id: uuid(),
        idDepartamento: "Antioquía",
        nombre: "Apartadó",
    },
    {
        _id: uuid(),
        idDepartamento: "Arauca",
        nombre: "Arauca",
    },
    {
        _id: uuid(),
        idDepartamento: "Arauca",
        nombre: "Arauquita",
    },
    {
        _id: uuid(),
        idDepartamento: "Arauca",
        nombre: "Cravo Norte",
    },
    {
        _id: uuid(),
        idDepartamento: "Arauca",
        nombre: "Puerto Rondón",
    },
    {
        _id: uuid(),
        idDepartamento: "Atlántico",
        nombre: "Barranquilla",
    },
    {
        _id: uuid(),
        idDepartamento: "Atlántico",
        nombre: "Baranoa",
    },
    {
        _id: uuid(),
        idDepartamento: "Atlántico",
        nombre: "Campo de la Cruz",
    },
    {
        _id: uuid(),
        idDepartamento: "Atlántico",
        nombre: "Candelaria",
    },
    {
        _id: uuid(),
        idDepartamento: "Atlántico",
        nombre: "Galapa",
    },
    {
        _id: uuid(),
        idDepartamento: "Bolívar",
        nombre: "Cartagena de Indias",
    },
    {
        _id: uuid(),
        idDepartamento: "Bolívar",
        nombre: "Magangué",
    },
    {
        _id: uuid(),
        idDepartamento: "Bolívar",
        nombre: "El Carmen de Bolívar",
    },
    {
        _id: uuid(),
        idDepartamento: "Bolívar",
        nombre: "Turbaco",
    },
    {
        _id: uuid(),
        idDepartamento: "Bolívar",
        nombre: "Arjona",
    },
];

const estratos = [
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
    },
];

const direcciones = [
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
    },
];

const BasicInformationForm = ({ handleChange, handleChangeSelect, state}: BasicInformationFormProps) => {
    const {
        departamento,
        ciudad,
        centroPoblado,
        estrato,
        direccion,
        detallesDireccion1,
        detallesDireccion2,
        detallesDireccion3,
    } = state;

    return (
        <Box sx={{mb: 4}}>
            <FormHeader
                number={1}
                description={
                    "Diligencia la información básica de tu dirección."
                }
            ></FormHeader>
            <StyledGrid container spacing={3}>
                {/* Departamento */}
                <StyledGrid item xs={12} sm={6}>
                    <StyledInputLabel htmlFor="departamento">
                        Departamento *
                    </StyledInputLabel>
                    <StyledSelect
                        id="departamento"
                        value={departamento}
                        onChange={handleChangeSelect}
                        name="departamento" 
                        required
                        displayEmpty={true}
                    >
                        <MenuItem value="" selected disabled>
                            Selecciona
                        </MenuItem>
                        {departamentos.map((departamento) => (
                            <MenuItem
                                key={departamento._id}
                                value={departamento.nombre}
                            >
                                {departamento.nombre}
                            </MenuItem>
                        ))}
                    </StyledSelect>
                </StyledGrid>
                {/* Ciudad */}
                <StyledGrid item xs={12} sm={6}>
                    <StyledInputLabel htmlFor="ciudad">
                        Ciudad * 
                    </StyledInputLabel>
                    <StyledSelect
                        id="ciudad"
                        value={ciudad}
                        onChange={handleChangeSelect}
                        name="ciudad"
                        displayEmpty={true}
                        required
                    >
                        <MenuItem value="" selected disabled>
                            Selecciona
                        </MenuItem>

                        {ciudades
                            .filter(
                                (ciudad) =>
                                    ciudad.idDepartamento === departamento
                            )
                            .map((ciudad) => (
                                <MenuItem
                                    key={ciudad._id}
                                    value={ciudad.nombre}
                                >
                                    {ciudad.nombre}
                                </MenuItem>
                            ))}
                    </StyledSelect>
                </StyledGrid>
                {/* Centro Poblado */}
                <StyledGrid item xs={6}>
                    <StyledInputLabel htmlFor="centroPoblado">
                        Centro Poblado (opcional)
                    </StyledInputLabel>
                    <StyledTextField
                        id="centroPoblado"
                        value={centroPoblado}
                        onChange={handleChange}
                        name="centroPoblado"
                        type="text"
                    ></StyledTextField>
                </StyledGrid>
                {/* Estrato */}
                <StyledGrid item xs={6}>
                    <StyledInputLabel htmlFor="estrato">
                        Estrato *
                    </StyledInputLabel>
                    <StyledSelect
                        id="estrato"
                        value={estrato}
                        onChange={handleChangeSelect}
                        name="estrato"
                        displayEmpty={true}
                        required
                    >
                        <MenuItem value="" selected disabled>
                            Selecciona
                        </MenuItem>

                        {estratos.map((estrato) => (
                            <MenuItem key={estrato._id} value={estrato.nombre}>
                                {estrato.nombre}
                            </MenuItem>
                        ))}
                    </StyledSelect>
                </StyledGrid>
                {/* Dirección */}
                <StyledGrid item xs={12} sm={6}>
                    <StyledInputLabel htmlFor="direccion">
                        Dirección * 
                    </StyledInputLabel>
                    <StyledSelect
                        id="direccion"
                        value={direccion}
                        onChange={handleChangeSelect}
                        name="direccion"
                        displayEmpty={true}
                        required
                    >
                        <MenuItem value="" selected disabled>
                            Selecciona
                        </MenuItem>

                        {direcciones.map((direccion) => (
                            <MenuItem
                                key={direccion._id}
                                value={direccion.nombre}
                            >
                                {direccion.nombre}
                            </MenuItem>
                        ))}
                    </StyledSelect>
                </StyledGrid>
                {/* Detalle Dirección */}
                <StyledGrid item xs={12} sm={6}>
                    <StyledInputLabel htmlFor="detallesDireccion1">
                        Detalle dirección * 
                    </StyledInputLabel>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <StyledTextField
                            id="detallesDireccion1"
                            name="detallesDireccion1"
                            helperText="Ej. 123B Sur B"
                            value={detallesDireccion1}
                            onChange={handleChange}
                            required
                        ></StyledTextField>
                        <Box
                            component="span"
                            sx={{
                                display: "inline-block",
                                mt: 3,
                            }}
                        >
                            #
                        </Box>
                        <StyledTextField
                            id="detallesDireccion2"
                            name="detallesDireccion2"
                            helperText="Ej. 23B Bis"
                            value={detallesDireccion2}
                            onChange={handleChange}
                            required
                        ></StyledTextField>
                        <Box
                            component="span"
                            sx={{
                                display: "inline-block",
                                mt: 3,
                            }}
                        >
                            -
                        </Box>
                        <StyledTextField
                            id="detallesDireccion3"
                            name="detallesDireccion3"
                            helperText=" "
                            value={detallesDireccion3}
                            onChange={handleChange}
                            required
                        ></StyledTextField>
                    </Box>
                </StyledGrid>
            </StyledGrid>
        </Box>
    );
};

export default BasicInformationForm;
