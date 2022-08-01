import React, {useState, useEffect} from "react";
import { v4 as uuid } from 'uuid';

import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import MenuItem from "@mui/material/MenuItem";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';


//! StyledUi Components
import StyledContainer from "components/StyledUi/StyledContainer/StyledContainer";
import StyledGrid from "components/StyledUi/StyledGrid";
import StyledButton from "components/StyledUi/StyledButton";
import StyledCard from "components/StyledUi/StyledCard";
import StyledSelect from "components/StyledUi/StyledSelect";
import StyledLoadingButton from "components/StyledUi/StyledLoadingButton";

//! Icons
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

//!React Router Dom
import {useNavigate, useOutletContext} from "react-router-dom";

//! Hooks
import useScrollToTop from "utils/hooks/useScrollToTop";

//!Widgets

//!Components
import PurchaseSummary from "../PurchaseSummary";
import Schedule from "./Schedule";

//!Widgets
import OwnModal from "components/widgets/OwnModal";

//!Actions
import * as CART_ACTIONS from "redux/slices/cart";

//!Selectors
import * as CART_SELECTORS from "redux/selectors/cart";
import * as ORDER_SELECTORS from "redux/selectors/order";

//!Hooks
import useAppDispatch from "utils/hooks/useAppDispatch";
import useAppSelector from "utils/hooks/useAppSelector";
import useScript from "utils/hooks/useScript";

//!Helpers
import {formatDateForDB, formatDateForUser, formatDateForUserExtended} from "utils/helpers/formatDate";

//!Services
import {paySavedCard} from "api/services/order";

//! Interfaces
import {FormEvent, ChangeEventSelect} from "interfaces";
import {ContextType} from "../interfaces";
import {DateTimeState} from "./interfaces";

import Hidden from "@mui/material/Hidden";

//! Actions
import * as ORDER_ACTIONS from "redux/slices/order";

const timeZones = [
	{
		_id: uuid(),
		name: "8am - 10pm",
	},
	{
		_id: uuid(),
		name: "10am - 1pm",
	},
	{
		_id: uuid(),
		name: "1pm - 3pm",
	},
];

//!Alert Component
const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
props,
ref,
) {
return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function CartInstallationSchedule() {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	//! Selectors
	const {setNumberStep} = useOutletContext<ContextType>();
	const cart = useAppSelector(CART_SELECTORS.selectCart);
	const totalPrice = useAppSelector(CART_SELECTORS.selectTotalPrice);
	const {personalData} = useAppSelector(CART_SELECTORS.selectUserInformation);
	const {address} = useAppSelector(CART_SELECTORS.selectShippingAddress);
	const {firstname, lastname, cellphone} = personalData;

	const isLoading = useAppSelector(ORDER_SELECTORS.selectIsLoading);
	const isError = useAppSelector(ORDER_SELECTORS.selectIsError);
	const message = useAppSelector(ORDER_SELECTORS.selectMessage);

	//! States
	const [solicitudeDate/* , setSolicitudeDate */] = useState<Date>(new Date());
	const [solicitudeNumber/* , setSolicitudeNumber */] =
		useState<String>("00002344564");
	const [solicitudeDetail/* , setSolicitudeDetail */] = useState<String>("204");
	const [technical/* , setTechnical */] = useState<string>("Por Definir");

	const [openModalConfirmation, setOpenModalConfirmation] = useState<boolean>(false);
	const [openModalCompleted, setOpenModalCompleted] = useState<boolean>(false);
	const [isFormCompleted, setIsFormCompleted] = useState<boolean>(false);
	const [dateTime, setDateTime] = useState<DateTimeState>({
		date: new Date(),
		time: "",
	});
	const {date, time} = dateTime;

    const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);


	//!Mercado Pago
	const { MercadoPago } = useScript({
        url: "https://sdk.mercadopago.com/js/v2",
        name: "MercadoPago"
	});

	//!Functions
	const handleCloseSnackbar = (event?: React.SyntheticEvent | Event, reason?: string) => {
		if (reason === 'clickaway') {
		return;
		}

		setOpenSnackbar(false);
	};

	const handleChangeSelect: ChangeEventSelect = (event) => {
		const {name, value} = event.target;
		setDateTime({
			...dateTime,
			[name]: value,
		});
	};

    const handleCloseModalConfirmation = () => {
		setOpenModalConfirmation(false);
		window.scrollTo({top: 100, behavior: "smooth"});
	};

	const handleSubmit: FormEvent = (event) => {
		event.preventDefault();
		setOpenModalConfirmation(true);
	};

	const handleConfirmationInstallationSchedule = () => {
		setOpenModalConfirmation(false);
		//!Date format like mongoose
		const newDateTime = {
			time,
			date: formatDateForDB(date as Date),
		};
		dispatch(CART_ACTIONS.saveInstallationSchedule(newDateTime));
		setOpenModalCompleted(true);
	};

	const handleCompletedInstallationSchedule = async () => {
		console.log(process.env);
		console.log(process.env.PUBLIC_KEY_MP);
		//!Traer mp
		const mp = new MercadoPago("TEST-19e19cc2-c3ce-4ea0-8f81-ef7351138372");
		console.log(mp)
        
		try{
			dispatch(ORDER_ACTIONS.createOrderRequest());
			const cardToken = await mp.createCardToken({
				cardId: "1650603827347", //!Memoria
				securityCode: "123", //!Formulario 
				identificationType: "DNI", //!Formulario
				identificationNumber: "11111111" //!Formulario
			}) 	
			const {id: token} = cardToken;	
			const {data} = await paySavedCard({amount: parseFloat((totalPrice * 0.00093).toFixed(2)), token, installments: 1, email: "test_user_78328320@testuser.com"});

			dispatch(ORDER_ACTIONS.createOrderSuccess({message: data.message, order: {
				orderNumber: uuid(),
				orderDate: formatDateForDB(new Date()),
				...cart
			}}))

			setTimeout(() => {
				setNumberStep(6);
				navigate("/cart/resumen")
			}, 5000)
		}catch(err: any){
			const res = err.response ? err.response.data : err.message;
			dispatch(ORDER_ACTIONS.createOrderError({message: res.message}));
		}
		
	}

	//!Effects
	useScrollToTop();

	//!Comprobar que los campos checked esten completos
	useEffect(() => {
		Object.values(dateTime).every((term) => term)
			? setIsFormCompleted(true)
			: setIsFormCompleted(false);
		//eslint-disable-next-line
	}, [dateTime]);

	useEffect(() => {
		if(message){
			setOpenSnackbar(true);
		}
	}, [message])
	return (
		<>
			{/* SnackBar */}
			<Snackbar anchorOrigin={{ vertical: "bottom", horizontal: "left" }} open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
				<Alert onClose={handleCloseSnackbar} severity={isError ? "error" : "success"} sx={{ width: '100%' }}>
						{message}
				</Alert>
			</Snackbar>
		
			<Fade in={true} timeout={1000} easing="ease-in-out">
				<Box
					sx={{
						minHeight: "100vh",
						backgroundColor: (theme) => theme.palette.common.white,
					}}
				>	
					<StyledContainer className="container-services">
						<StyledGrid container spacing={4}>
							<StyledGrid
								item
								xs={12} /* sx={{mx: {xs: 0, md: 4}}} */
							>
								<Box sx={{display: {xs: "block", md: "flex"}}}>
									{/* Contratación Servicios Fijos */}
									<Box sx={{flex: 8, mb: 6, mr: {xs: 0, md: 6}}}>
										{/* Contratación Servicios */}
										<Typography
											variant="h4"
											component="h1"
											sx={{mb: 4}}
										>
											Agendamiento de Instalación
										</Typography>
										<Typography
											variant="body1"
											component="h2"
											sx={{mb: 1}}
										>
											Seleccione la fecha y hora de
											instalación de tu producto:
										</Typography>

										{/* Wrapper Calendario*/}
										<Box
											component="form"
											onSubmit={handleSubmit}
											autoComplete="off"
										>
											<StyledCard
												variant="outlined"
												className="card-services-container card-services-container--shopping-cart"
											>
												<CardContent className="card-services-container__content">
													<Box
														sx={{
															display: {
																xs: "block",
																md: "flex",
															},
															alignItems:
																"flex-start",
															flexDirection: {
																xs: "column",
																md: "row",
															},
														}}
													>
														{/* Fecha y Hora de Instalación */}
														<Box
															sx={{
																flex: 1,
																mr: {xs: 0, md: 4},
																mb: {xs: 4, md: 0},
															}}
														>
															{/* Fecha de Instalación */}
															<Box
																sx={{
																	border: (
																		theme
																	) =>
																		`1px solid ${theme.palette.info.light}`,
																	mb: 3,
																}}
															>
																<Schedule
																	setDateTime={
																		setDateTime
																	}
																></Schedule>
															</Box>
															{/* Hora de Instalación */}
															<Box>
																<Typography
																	variant="body1"
																	component="p"
																	sx={{mb: 1}}
																>
																	Selecciona la
																	franja horaria
																	de la
																	instalación
																</Typography>
																<StyledSelect
																	id="time"
																	value={time}
																	onChange={
																		handleChangeSelect
																	}
																	name="time"
																	displayEmpty={
																		true
																	}
																	required
																>
																	<MenuItem
																		value=""
																		selected
																		disabled
																	>
																		Seleccionar
																		franja
																		horaria
																	</MenuItem>

																	{timeZones.map(
																		(
																			timeZone
																		) => (
																			<MenuItem
																				key={
																					timeZone._id
																				}
																				value={
																					timeZone.name
																				}
																			>
																				{
																					timeZone.name
																				}
																			</MenuItem>
																		)
																	)}
																</StyledSelect>
																<Typography
																	variant="body2"
																	component="p"
																	sx={{
																		mt: 2,
																		fontWeight:
																			"bolder",
																	}}
																>
																	La instalación
																	de tu producto
																	se realizará
																	máximo en 15
																	días hábiles
																</Typography>
															</Box>
														</Box>

														{/* Detalles de la Instalación */}
														<Box
															sx={{
																flex: 1,
																textAlign: {
																	xs: "initial",
																	md: "justify",
																},
															}}
														>
															<Hidden mdDown>
																<Typography
																	variant="body1"
																	sx={{mb: 2}}
																>
																	Recibirás una
																	notificación vía
																	mensaje de texto
																	con la
																	información
																	sobre el técnico
																	asignado que
																	realizara la
																	visita de
																	instalación de
																	tu producto
																</Typography>
															</Hidden>

															<Box
																sx={{
																	display: {
																		xs: "flex",
																		md: "block",
																	},
																}}
															>
																<Box
																	sx={{
																		flex: 1,
																		mr: {
																			xs: 3,
																			md: 0,
																		},
																	}}
																>
																	<Box
																		sx={{
																			mb: 2.5,
																		}}
																	>
																		<Typography
																			variant="body1"
																			sx={{
																				fontWeight:
																					"bolder",
																			}}
																		>
																			Dirección
																			del
																			servicio
																		</Typography>
																		<Typography variant="body1">
																			{
																				address
																			}
																		</Typography>
																	</Box>
																	<Box
																		sx={{
																			mb: 2.5,
																		}}
																	>
																		<Typography
																			variant="body1"
																			sx={{
																				fontWeight:
																					"bolder",
																			}}
																		>
																			Persona
																			que
																			recibe
																			la
																			visita
																		</Typography>
																		<Typography variant="body1">
																			{
																				firstname
																			}{" "}
																			{
																				lastname
																			}
																		</Typography>
																	</Box>
																	<Box
																		sx={{
																			mb: 2.5,
																		}}
																	>
																		<Typography
																			variant="body1"
																			sx={{
																				fontWeight:
																					"bolder",
																			}}
																		>
																			Teléfono
																			de
																			contacto
																		</Typography>
																		<Typography variant="body1">
																			{
																				cellphone
																			}
																		</Typography>
																	</Box>
																	<Box
																		sx={{
																			mb: {
																				xs: 0,
																				md: 2.5,
																			},
																		}}
																	>
																		<Typography
																			variant="body1"
																			sx={{
																				fontWeight:
																					"bolder",
																			}}
																		>
																			Técnico
																			Asignado
																		</Typography>
																		<Typography variant="body1">
																			{
																				technical
																			}
																		</Typography>
																	</Box>
																</Box>
																<Box sx={{flex: 1}}>
																	<Box
																		sx={{
																			mb: 2.5,
																		}}
																	>
																		<Typography
																			variant="body1"
																			sx={{
																				fontWeight:
																					"bolder",
																			}}
																		>
																			Fecha de
																			Solicitud
																		</Typography>
																		<Typography variant="body1">
																			{formatDateForUser(
																				solicitudeDate
																			)}
																		</Typography>
																	</Box>
																	<Box
																		sx={{
																			mb: 2.5,
																		}}
																	>
																		<Typography
																			variant="body1"
																			sx={{
																				fontWeight:
																					"bolder",
																			}}
																		>
																			Número
																			de
																			Solicitud
																		</Typography>
																		<Typography variant="body1">
																			{
																				solicitudeNumber
																			}
																		</Typography>
																	</Box>
																	<Box
																		sx={{
																			mb: {
																				xs: 0,
																				md: 2.5,
																			},
																		}}
																	>
																		<Typography
																			variant="body1"
																			sx={{
																				fontWeight:
																					"bolder",
																			}}
																		>
																			Detalle
																			de
																			Solicitud
																		</Typography>
																		<Typography variant="body1">
																			{
																				solicitudeDetail
																			}
																		</Typography>
																	</Box>
																</Box>
															</Box>
														</Box>
													</Box>
												</CardContent>
											</StyledCard>

											{/* Buttons */}
											<Box
												sx={{
													display: "flex",
													alignItems: "center",
													justifyContent: "space-between",
													flexDirection: {
														xs: "column",
														md: "row",
													},
												}}
											>
												<StyledButton
													variant="outlined"
													className="button-large button-outlined"
													color="info"
													sx={{
														typography: "body2",
														m: 0,
														order: {xs: 2, md: 1},
														width: {
															xs: "100%",
															md: "initial",
														},
													}}
													onClick={() =>
														navigate(
															"/cart/contracting-services"
														)
													}
												>
													{"< Volver"}
												</StyledButton>

												<StyledButton
													variant="contained"
													className="button-large"
													disabled={
														!isFormCompleted
															? true
															: false
													}
													type="submit"
													sx={{
														typography: "body2",
														m: 0,
														order: {xs: 1, md: 2},
														mb: {xs: 2, md: 0},
														width: {
															xs: "100%",
															md: "initial",
														},
													}}
												>
													{"Continuar"}
												</StyledButton>
											</Box>
										</Box>
									</Box>

									{/* Resumen de Compra */}
									<Box sx={{flex: 4, mb: 6}}>
										<PurchaseSummary></PurchaseSummary>
									</Box>
								</Box>
							</StyledGrid>
						</StyledGrid>
					</StyledContainer>

					{/* Modal Confirmation */}
					<OwnModal openModal={openModalConfirmation} setOpenModal={setOpenModalConfirmation}>
						<Typography
							variant="h6"
							component="p"
							sx={{mt: 4, mb: 3, fontWeight: "bolder"}}
						>
							Confirmación de agendamiento
						</Typography>

						<Box sx={{mb: 3}}>
							<Typography variant="body1" component="p" sx={{fontWeight: "bolder"}}>
							Día de la instalación
							</Typography>
							<Typography variant="body1" component="p" sx={{fontWeight: "bolder"}}>
								{formatDateForUserExtended(date as Date)} franja horario de {time}
							</Typography>
						</Box>                        

						<Typography variant="body1" component="p" sx={{mb: 4}}>
							Puedes consultar el técnico asignado un día antes del servicio en nuestro menú con las opción:<br></br><b>Mis pedidos / Instalaciones</b>
						</Typography>
						<Box
							sx={(theme) => ({
								mb: 2,
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
							<StyledButton
								variant="outlined"
								className="button-outlined"
								color="info"
								sx={(theme) => ({
									typography: "body1",
									order: "2",
									[theme.breakpoints.up("md")]: {
										order: "1",
										flex: 1,
										marginRight: theme.spacing(3)
									},
								})}
								onClick={handleCloseModalConfirmation}
							>
								Modificar
							</StyledButton>

							<StyledButton
								variant="contained"
								onClick={handleConfirmationInstallationSchedule}
								sx={(theme) => ({
									typography: "body1",
									order: "1",
									mb: 2,
									[theme.breakpoints.up("md")]: {
										order: "2",
										mb: 0,
										flex: 1,
									},
								})}
							>
								Confirmar
							</StyledButton>
						</Box>	
					</OwnModal>

					{/* Modal Completed */}
					<OwnModal openModal={openModalCompleted} setOpenModal={setOpenModalCompleted}>
						<Typography
							variant="h6"
							component="p"
							sx={{mt: 4, mb: 1, fontWeight: "bolder"}}
						>
							!Tu agendamiento de instalación ha sido realizado!
						</Typography>

						<Box sx={{mb: 2}}>
							<CheckCircleIcon color="success" fontSize="large"></CheckCircleIcon>
						</Box>                        

						<Typography variant="body1" component="p" sx={{mb: 4}}>
							Recibirás la notificación vía email con el detalle de tu pedido.
						</Typography>
						<Box
							sx={(theme) => ({
								mb: 2,
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
							})}
						>
							<StyledLoadingButton
								variant="contained"
								onClick={handleCompletedInstallationSchedule}
								sx={(theme) => ({
									typography: "body1",
									width: "100%"
								})}
								loading={isLoading}
							>
								Aceptar
							</StyledLoadingButton>
						</Box>	
					</OwnModal>

				</Box>
			</Fade>
		</>
	);
}

export default CartInstallationSchedule;
