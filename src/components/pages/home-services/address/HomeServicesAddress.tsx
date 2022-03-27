import {useState, useEffect} from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import Modal from "@mui/material/Modal";
import Link from "@mui/material/Link";
import Fade from "@mui/material/Fade";

//! Components
import HomeServicesHeader from "../HomeServicesHeader";
import BasicInformationForm from "./BasicInformationForm";
import SuplementaryInformationForm from "./ComplementaryInformationForm";

//! UI Components
import StyledContainer from "components/StyledUi/StyledContainer";
import StyledGrid from "components/StyledUi/StyledGrid";
import StyledCard from "components/StyledUi/StyledCard";
import StyledButton from "components/StyledUi/StyledButton";

//!Icons
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import {IconButton} from "@mui/material";

//!React Router Dom
import {useNavigate} from "react-router-dom";

//!Hooks
import useScrollToTop from "utils/hooks/useScrollToTop";

//! Interfaces
import {InformacionComplementariaArgs, InformacionBasicaArgs, ChangeEventArgs} from "./interfaces";

//!Actions
import * as CART_ACTIONS from "redux/actions/cart";

//!React Redux;
import useAppDispatch from "utils/hooks/useAppDispatch";

interface ShippingAddressProps {
    address: string
    price: number,
    isFree: boolean
}
const shippingAddresses: ShippingAddressProps[] = [
    {
        address: "Avenida",
        price: 0,
        isFree: true
    },
    {
        address: "Calle",
         price: 0,
        isFree: true
    },
    {
        address: "Carrera",
        price: 0,
        isFree: true
    },
    {
        address: "Transversal",
        price: 100,
        isFree: false
    }
]

function HomeServicesAddress() {
    let navigate = useNavigate();
    let dispatch = useAppDispatch();

    //! States
    const [informacionBasica, setInformacionBasica] = useState({
        departamento: "",
        ciudad: "",
        centroPoblado: "",
        estrato: "",
        direccion: "",
        detallesDireccion1: "",
        detallesDireccion2: "",
        detallesDireccion3: "",
    });

    const [informacionComplementaria, setInformacionComplementaria] = useState({
        barrio: "",
        bloqueInterior: "",
        numeroBloqueInterior: "",
        tipoInmueble: "",
        numeroTipoInmueble: "",
        inmuebleOtro: "",
        informacionAdicional: "",
    });

    const [estadoInformacionComplementaria1, setEstadoInformacionComplementaria1] = useState<boolean>(false);
    const [estadoInformacionComplementaria2, setEstadoInformacionComplementaria2] = useState<boolean>(false);

    const [estadoComenzarCotizacion, setEstadoComenzarCotizacion] = useState<boolean>(false);
    const [shippingAddress, setShippingAddress] = useState<string>("");

    const [openModal, setOpenModal] = useState<boolean>(false);

    //! Handles
    const handleInformacionBasica: ChangeEventArgs = (event) => {
        setInformacionBasica({
            ...informacionBasica,
            [event.target.name]: event.target.value.trim(),
        });
    };

    const handleInformacionComplementaria: ChangeEventArgs = (event) => {
        setInformacionComplementaria({
            ...informacionComplementaria,
            [event.target.name]: event.target.value.trim(),
        });
    };

    const handleShippingAddress = () => {
        //!Guardar dirección en carrito de compra
        let findShippingAddress: ShippingAddressProps | any = shippingAddresses.find(({address}) => shippingAddress.includes(address));
        dispatch(CART_ACTIONS.CART_SAVE_SHIPPING_ADDRESS_ACTION({
            address: shippingAddress,
            price: findShippingAddress.price,
            isFree: findShippingAddress.isFree
        }))
        navigate("/servicios-hogar-planes-bienvenida")
    }
    
    const handleCloseModal = () => {
        setOpenModal(false);
        window.scrollTo({top: 120, behavior: 'smooth'});
    }

    //! Functions
    const verificarCamposVaciosInformacionBasica = (
        informacionBasica: InformacionBasicaArgs
    ): boolean => {
        let {centroPoblado, ...nuevaInformacionBasica} = informacionBasica;
        let arrayValoresInformacionBasica = Object.values(
            nuevaInformacionBasica
        );
        return arrayValoresInformacionBasica.some(value => value === "");
    };

    const verificarCamposVaciosInformacionComplementaria = (informacionComplementaria: InformacionComplementariaArgs): boolean => {
        let nuevaInformacionComplementaria: any = Object.assign({}, informacionComplementaria);
        if (informacionComplementaria.numeroTipoInmueble !== "Otro") {
            let {inmuebleOtro, ...res} = informacionComplementaria;
            nuevaInformacionComplementaria = res;
        }
        let {informacionAdicional, ...res} = nuevaInformacionComplementaria;
        nuevaInformacionComplementaria = res;
        let arrayValoresInformacionComplementaria = Object.values(
            nuevaInformacionComplementaria
        );
        return arrayValoresInformacionComplementaria.some(value => value === "");
    };

    const verificarCamposVaciosInformacionComplementaria1 = (informacionComplementaria: InformacionComplementariaArgs): boolean => {
        const {barrio, bloqueInterior, numeroBloqueInterior} =
            informacionComplementaria;
        let valoresInformacionComplementaria1 = [
            barrio,
            bloqueInterior,
            numeroBloqueInterior,
        ];
        return valoresInformacionComplementaria1.some(
            (value) => value === "" || value === "Selecciona"
        );
    };

    const conseguirEstadoComenzarCotizacion = (): boolean => {
        return !verificarCamposVaciosInformacionBasica(informacionBasica) && !verificarCamposVaciosInformacionComplementaria(informacionComplementaria) ? true : false;
    };

    //! Effects
    useScrollToTop();
    useEffect(() => {
        if (!verificarCamposVaciosInformacionBasica(informacionBasica)) {
            setEstadoInformacionComplementaria1(true);
        }
    }, [informacionBasica]);

    useEffect(() => {
        if (!verificarCamposVaciosInformacionComplementaria1(informacionComplementaria)) {
            setEstadoInformacionComplementaria2(true);
        }
        // eslint-disable-next-line
    }, [informacionComplementaria]);

    useEffect(() => {
        let estado = conseguirEstadoComenzarCotizacion();
        setEstadoComenzarCotizacion(estado);
        // eslint-disable-next-line
    }, [informacionBasica, informacionComplementaria]);

    useEffect((): any => {
        if (!openModal) return;
        let shippingAddress = `${informacionBasica?.direccion} ${informacionBasica?.detallesDireccion1} N°${informacionBasica?.detallesDireccion2}-${informacionBasica?.detallesDireccion3}, Barrio ${informacionComplementaria?.barrio} ${informacionComplementaria?.tipoInmueble} ${informacionComplementaria?.numeroTipoInmueble} y el ${informacionBasica?.estrato}`
        console.log(shippingAddress);

        setShippingAddress(shippingAddress);
        //eslint-disable-next-line
    }, [openModal])


    return (
        <Fade in={true} timeout={1000} easing="ease-in-out">
            <Box
                sx={{
                    minHeight: "100vh",
                    backgroundColor: (theme) => theme.palette.common.white,
                    backgroundImage:
                        "url('images/home-services/clarohogar.jpg')",
                    backgroundPosition: "right top",
                    backgroundSize: {
                        xs: "43% 120px",
                        sm: "50% 170px",
                        md: "55% 600px",
                    },
                    backgroundRepeat: "no-repeat",
                }}
            >
                <StyledContainer className="container-services">
                    <StyledGrid container spacing={0}>
                        {/* Form Section */}
                        <StyledGrid item xs={12} md={6}>
                            <HomeServicesHeader></HomeServicesHeader>

                            {/* Card del Formulario */}
                            <StyledCard className="card-services-container">
                                <CardContent className="card-services-container__content">
                                    {/* Suggestion Box */}
                                    <Box className="card-services-container__suggestion">
                                        <AddLocationAltIcon
                                            fontSize="large"
                                            color="error"
                                            sx={{mr: 1}}
                                        ></AddLocationAltIcon>
                                        <Typography
                                            variant="body2"
                                            sx={{textAlign: "justify"}}
                                        >
                                            Para iniciar tu experiencia
                                            <Box
                                                component="span"
                                                fontWeight="bolder"
                                            >
                                                {" "}
                                                Diligencia la información de tu
                                                dirección donde quieres tener tu
                                                servicio Claro en 2 pasos
                                            </Box>
                                        </Typography>
                                    </Box>
                                    {/* Form */}
                                    <Box
                                        component="form"
                                        sx={{
                                            "& .MuiTextField-root": {m: 1},
                                        }}
                                        autoComplete="off"
                                    >
                                        {/* Formulario de información básica */}
                                        <BasicInformationForm
                                            handleInformacionBasica={
                                                handleInformacionBasica
                                            }
                                            informacionBasica={
                                                informacionBasica
                                            }
                                        ></BasicInformationForm>

                                        {/* Formulario de información complementaria */}
                                        <SuplementaryInformationForm
                                            handleInformacionComplementaria={
                                                handleInformacionComplementaria
                                            }
                                            estadoInformacionComplementaria1={
                                                estadoInformacionComplementaria1
                                            }
                                            estadoInformacionComplementaria2={
                                                estadoInformacionComplementaria2
                                            }
                                            informacionComplementaria={
                                                informacionComplementaria
                                            }
                                        ></SuplementaryInformationForm>

                                        {/* Button */}
                                        <Box
                                            display="flex"
                                            justifyContent="center"
                                            alignItems="center"
                                        >
                                            {estadoComenzarCotizacion ? (
                                                <StyledButton
                                                    onClick={() =>
                                                        setOpenModal(true)
                                                    }
                                                    variant="contained"
                                                    sx={{typography: "body1"}}
                                                >
                                                    Comenzar la Cotización
                                                </StyledButton>
                                            ) : (
                                                <StyledButton
                                                    variant="contained"
                                                    disabled
                                                    sx={{typography: "body1"}}
                                                >
                                                    {`Comenzar la Cotización >`}
                                                </StyledButton>
                                            )}
                                        </Box>
                                    </Box>
                                </CardContent>
                            </StyledCard>
                        </StyledGrid>

                        {/* Image Section */}
                        <StyledGrid item xs={12} md={6}></StyledGrid>
                    </StyledGrid>
                </StyledContainer>

                {/* Modal */}
                <Modal
                    keepMounted
                    open={openModal}
                    onClose={() => setOpenModal(false)}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box
                        sx={(theme) => ({
                            position: "absolute" as "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            maxWidth: 500,
                            minWidth: 300,
                            bgcolor: "background.paper",
                            // border: '2px solid #000',
                            boxShadow: 24,
                            px: 4,
                            py: 4,
                            textAlign: "center",
                            [theme.breakpoints.up("md")]: {
                                px: 6,
                            },
                        })}
                    >
                        <Box
                            sx={{position: "absolute", top: "3%", right: "2%"}}
                        >
                            <IconButton
                                aria-label="close"
                                color="inherit"
                                onClick={() => setOpenModal(false)}
                            >
                                <CloseOutlinedIcon></CloseOutlinedIcon>
                            </IconButton>
                        </Box>
                        <Typography
                            id="modal-modal-title"
                            variant="body1"
                            sx={{mt: 3}}
                        >
                            La dirección Ingresada es: <br></br>
                            <Box component="span" sx={{fontWeight: "bolder"}}>
                                {shippingAddress}
                            </Box>
                        </Typography>
                        <Box
                            sx={(theme) => ({
                                mt: 3,
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                [theme.breakpoints.up("md")]: {
                                    justifyContent: "space-between",
                                    flexDirection: "row",
                                },
                            })}
                        >
                            <Link
                                component="button"
                                sx={(theme) => ({
                                    typography: "body2",
                                    color: theme.palette.info.main,
                                    order: "2",
                                    [theme.breakpoints.up("md")]: {
                                        order: "1",
                                    },
                                })}
                                onClick={handleCloseModal}
                            >
                                &#8592; Cambiar la dirección
                            </Link>

                            <StyledButton
                                variant="contained"
                                onClick={handleShippingAddress}
                                sx={(theme) => ({
                                    typography: "body1",
                                    order: "1",
                                    mb: 2,
                                    [theme.breakpoints.up("md")]: {
                                        order: "2",
                                        mb: 0,
                                        marginLeft: theme.spacing(3),
                                        flex: 1,
                                    },
                                })}
                            >
                                Confirmar
                            </StyledButton>
                        </Box>
                    </Box>
                </Modal>
            </Box>
        </Fade>
    );
}
export default HomeServicesAddress;
