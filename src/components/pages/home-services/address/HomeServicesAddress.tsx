import {useState, useEffect} from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import Link from "@mui/material/Link";
import Fade from "@mui/material/Fade";

//! Components
import HomeServicesHeader from "../HomeServicesHeader";
import BasicInformationForm from "./BasicInformationForm";
import ComplementaryInformationForm from "./ComplementaryInformationForm";

//! UI Components
import StyledContainer from "components/StyledUi/StyledContainer";
import StyledGrid from "components/StyledUi/StyledGrid";
import StyledCard from "components/StyledUi/StyledCard";
import StyledButton from "components/StyledUi/StyledButton";


//!React Router Dom
import {useNavigate} from "react-router-dom";

//!Hooks
import useScrollToTop from "utils/hooks/useScrollToTop";
import useForm from "utils/hooks/useForm";

//!Interfaces
import { FormEvent } from "interfaces";
import {
	ComplementaryInformationState,
	BasicInformationState,
	ShippingAddressState,
} from "./interfaces";

//!Actions
import * as CART_ACTIONS from "redux/slices/cart";

//!React Redux;
import useAppDispatch from "utils/hooks/useAppDispatch";

//!Widgets
import OwnModal from "components/widgets/OwnModal";

const shippingAddresses: ShippingAddressState[] = [
	{
		address: "Avenida",
		price: 0,
		isFree: true,
	},
	{
		address: "Calle",
		price: 0,
		isFree: true,
	},
	{
		address: "Carrera",
		price: 0,
		isFree: true,
	},
	{
		address: "Transversal",
		price: 100,
		isFree: false,
	},
];

function HomeServicesAddress() {
	let navigate = useNavigate();
	let dispatch = useAppDispatch();

	//! States
	const {
		form: informacionBasica,
		handleChange: handleChangeInformacionBasica,
		handleChangeSelect: handleChangeInformacionBasicaSelect,
	} = useForm<BasicInformationState>({
		departamento: "",
		ciudad: "",
		centroPoblado: "",
		estrato: "",
		direccion: "",
		detallesDireccion1: "",
		detallesDireccion2: "",
		detallesDireccion3: "",
	});

	const {
		form: informacionComplementaria,
		handleChange: handleChangeInformacionComplementaria,
		handleChangeSelect: handleChangeInformacionComplementariaSelect,
	} = useForm<ComplementaryInformationState>({
		barrio: "",
		bloqueInterior: "",
		numeroBloqueInterior: "",
		tipoInmueble: "",
		numeroTipoInmueble: "",
		inmuebleOtro: "",
		informacionAdicional: "",
	});
	const [shippingAddress, setShippingAddress] = useState<string>("");

	const [
		estadoInformacionComplementaria1,
		setEstadoInformacionComplementaria1,
	] = useState<boolean>(false);
	const [
		estadoInformacionComplementaria2,
		setEstadoInformacionComplementaria2,
	] = useState<boolean>(false);
	const [estadoComenzarCotizacion, setEstadoComenzarCotizacion] =
		useState<boolean>(false);
	const [openModal, setOpenModal] = useState<boolean>(false);

    //!Handles
	const handleSaveShippingAddress = () => {
		//!Guardar dirección en carrito de compra
		let findShippingAddress = shippingAddresses.find(({address}) =>
			shippingAddress.includes(address)
		) as ShippingAddressState;

		dispatch(
			CART_ACTIONS.saveShippingAddress({
				address: shippingAddress,
				price: findShippingAddress.price,
				isFree: findShippingAddress.isFree,
			})
		);
		navigate("/servicios-hogar-planes-bienvenida");
	};

	const handleCloseModal = () => {
		setOpenModal(false);
		window.scrollTo({top: 100, behavior: "smooth"});
	};

	const handleSubmit: FormEvent = (event) => {
		event.preventDefault();
		setOpenModal(true)
	}

	//! Functions
	const verificarCamposVaciosInformacionBasica = (
		informacionBasica: BasicInformationState
	): boolean => {
		let {centroPoblado, ...nuevaInformacionBasica} = informacionBasica;
		let arrayValoresInformacionBasica = Object.values(
			nuevaInformacionBasica
		);
		return arrayValoresInformacionBasica.some((value) => value === "");
	};

	const verificarCamposVaciosInformacionComplementaria = (
		informacionComplementaria: ComplementaryInformationState
	): boolean => {
		let nuevaInformacionComplementaria: any = Object.assign(
			{},
			informacionComplementaria
		);
		if (informacionComplementaria.numeroTipoInmueble !== "Otro") {
			let {inmuebleOtro, ...res} = informacionComplementaria;
			nuevaInformacionComplementaria = res;
		}
		let {informacionAdicional, ...res} = nuevaInformacionComplementaria;
		nuevaInformacionComplementaria = res;
		let arrayValoresInformacionComplementaria = Object.values(
			nuevaInformacionComplementaria
		);
		return arrayValoresInformacionComplementaria.some(
			(value) => value === ""
		);
	};

	const verificarCamposVaciosInformacionComplementaria1 = (
		informacionComplementaria: ComplementaryInformationState
	): boolean => {
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
		return !verificarCamposVaciosInformacionBasica(informacionBasica) &&
			!verificarCamposVaciosInformacionComplementaria(
				informacionComplementaria
			)
			? true
			: false;
	};

	const ComponentChildren = () => {
		return (
			<>
				<Typography
					variant="body1"
					component="p"
					sx={{mt: 3, mb: .5}}
				>
					La dirección Ingresada es:
				</Typography>
				<Typography
					variant="body1"
					component="p"
					sx={{fontWeight: "bolder", mb: 1}}
				>
					{shippingAddress}
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
							typography: "body1",
							color: theme.palette.info.dark,
							order: "2",
							[theme.breakpoints.up("md")]: {
								order: "1",
								marginRight: theme.spacing(3),
								flex: 1
							},
						})}
						onClick={handleCloseModal}
					>
						&#8592; Cambiar la dirección
					</Link>

					<StyledButton
						variant="contained"
						onClick={handleSaveShippingAddress}
						className="button-small"
						sx={(theme) => ({
							mb: 2,
							typography: "body1",
							order: "1",
							[theme.breakpoints.up("md")]: {
								mb: 0,
								order: "2",
								flex: 1,
							},
						})}
					>
						Confirmar
					</StyledButton>
				</Box>			
			</>
		)
	}
	//! Effects
	useScrollToTop();
	useEffect(() => {
		if (!verificarCamposVaciosInformacionBasica(informacionBasica)) {
			setEstadoInformacionComplementaria1(true);
		}
	}, [informacionBasica]);

	useEffect(() => {
		if (
			!verificarCamposVaciosInformacionComplementaria1(
				informacionComplementaria
			)
		) {
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
		let shippingAddress = `${informacionBasica?.direccion} ${informacionBasica?.detallesDireccion1} N°${informacionBasica?.detallesDireccion2}-${informacionBasica?.detallesDireccion3}, Barrio ${informacionComplementaria?.barrio} ${informacionComplementaria?.tipoInmueble} ${informacionComplementaria?.numeroTipoInmueble} y el ${informacionBasica?.estrato}`;
		console.log(shippingAddress);

		setShippingAddress(shippingAddress);
		//eslint-disable-next-line
	}, [openModal]);

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
									<Box component="form" autoComplete="off" onSubmit={handleSubmit}>
										{/* Formulario de información básica */}
										<BasicInformationForm
											handleChange={
												handleChangeInformacionBasica
											}
											handleChangeSelect={
												handleChangeInformacionBasicaSelect
											}
											state={informacionBasica}
										></BasicInformationForm>

										{/* Formulario de información complementaria */}
										<ComplementaryInformationForm
											handleChange={
												handleChangeInformacionComplementaria
											}
											handleChangeSelect={
												handleChangeInformacionComplementariaSelect
											}
											isActiveState1={
												estadoInformacionComplementaria1
											}
											isActiveState2={
												estadoInformacionComplementaria2
											}
											state={informacionComplementaria}
										></ComplementaryInformationForm>

										{/* Button */}
										<Box
											display="flex"
											justifyContent="center"
											alignItems="center"
										>
											{estadoComenzarCotizacion ? (
												<StyledButton
													type="submit"
													variant="contained"
													sx={{typography: "body1"}}
												>
													Comenzar la Cotización
												</StyledButton>
											) : (
												<StyledButton
													type="submit"
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
				<OwnModal openModal={openModal} setOpenModal={setOpenModal}>
					<ComponentChildren></ComponentChildren>
				</OwnModal>
			
			</Box>
		</Fade>
	);
}
export default HomeServicesAddress;
