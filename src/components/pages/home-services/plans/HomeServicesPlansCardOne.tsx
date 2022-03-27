import {useState} from "react";
import {styled} from "@mui/material/styles";

//!Componentes
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import CheckIcon from "@mui/icons-material/Check";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";


//!Ui Componentes
import StyledButton from "components/StyledUi/StyledButton";

//!React Redux
import useAppDispatch from "utils/hooks/useAppDispatch";

//! Actions
import * as PLANS_ACTIONS from "redux/actions/homeServicesPlans";

//! Interfaces
import {CardOne} from "./interfaces";
import CardActions from "@mui/material/CardActions";

function HomeServicesPlansCardOne({ item }: CardOne) {
    const [quantityHD, setQuantityHD] = useState(1);
    const [quantityTV, setQuantityTV] = useState(1);
    const dispatch = useAppDispatch();

    const {_id, category, plan, benefits, unitPrice, comboPrice, isSelected} = item;

    const StyledCard = styled(Card)(({theme}) => ({
        borderWidth: `${isSelected ? "2px" : "1px"}`,
        borderStyle: "solid",
        borderColor: `${
            isSelected
                ? theme.palette.primary.main
                : theme.palette.grey["500"]
        }`,
        borderRadius: "8px",
        borderTop: `5px solid ${
            isSelected
                ? theme.palette.primary.main
                : theme.palette.grey["500"]
        }`,
        backgroundColor: theme.palette.grey["50"],
        position: "relative",
        cursor: `${isSelected ? "initial" : "pointer"}`,
        "&:hover": {
            borderColor: theme.palette.primary.main,
            backgroundColor: `${
                isSelected
                    ? theme.palette.grey["50"]
                    : theme.palette.common.white
            }`,
            "& .card__plan": {
                color: theme.palette.primary.main,
            },
        },
        "& .MuiCardContent-root": {
            padding: theme.spacing(2.5),
            "& .card__header": {
                marginBottom: theme.spacing(2),
                "& .card__plan": {
                    fontWeight: "bolder",
                    color: `${isSelected ? theme.palette.primary.main : "initial"}`,
                }
            },
            "& .card__content": {
                "& .card__decoders": {
                    borderTop: `2px solid ${theme.palette.grey["400"]}`,
                    marginTop: theme.spacing(2),
                    paddingTop: theme.spacing(1),
                   
                }
            }, 
        },
        "& .MuiCardActions-root": {
            padding: theme.spacing(2.5),
            borderTop: `2px dashed ${theme.palette.grey["400"]}`,
            display: "block",
            marginBottom: theme.spacing(1),
            "& .card__footer": {
                "& .card__prices": {
                    width: "100%",
                    display: "flex",
                    "&.card__prices--one": {
                        alignItems: "flex-start",
                        justifyContent: "space-around",
                    },
                    "&.card__prices--two": {
                        alignItems: "center",
                        justifyContent: "center"
                    }
                },
                "& .card__button": {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: theme.spacing(2),
                }
            }
        },
    }));

    //! Functions
    const handleSelect = (): void => {
        //!Actualizar el seleccionado de un plan
        dispatch(PLANS_ACTIONS.TOGGLE_SELECTED_HOME_SERVICES_PLANS_ACTION({id: _id}))
    }


    return (
        <Grid item xs={12} sm={6} md={4}>
            <StyledCard
                variant="outlined"
                onClick={() => (isSelected ? {} : handleSelect())}
            >
                <CardContent >
                    {/* Card header */}
                    <Box className="card__header">
                        <Typography
                            variant="subtitle1"
                            component="h6"
                            sx={{fontWeight: "bolder", mb: -0.5, textTransform: "capitalize"}}
                        >
                            {category}
                        </Typography>
                        <Typography
                            variant="h4"
                            component="h5"
                            className="card__plan"
                        >
                            {plan}
                        </Typography>
                        {isSelected ? (
                            <CheckCircleIcon
                                fontSize="large"
                                sx={(theme) => ({
                                    color: theme.palette.success.light,
                                    position: "absolute",
                                    top: "2%",
                                    right: "3%",
                                })}
                            ></CheckCircleIcon>
                        ) : (
                            <CheckCircleOutlinedIcon
                                fontSize="large"
                                sx={(theme) => ({
                                    color: theme.palette.grey["500"],
                                    position: "absolute",
                                    top: "2%",
                                    right: "3%",
                                })}
                            ></CheckCircleOutlinedIcon>
                        )}
                    </Box>
                    <Box className="card__content">
                        {/* Puede haber benificios vacios, es por eso que lo filtramos */}
                        {benefits.filter(benefit => benefit.trim()).map((benefit) => (
                            <Typography
                                key={benefit}
                                variant="body2"
                                mb={1}
                                display="flex"
                                alignItems="flex-start"
                            >
                                <CheckIcon
                                    fontSize="small"
                                    sx={{
                                        color: (theme) =>
                                            theme.palette.info.main,
                                        mr: 0.5,
                                    }}
                                ></CheckIcon>
                                {benefit}
                            </Typography> 
                        ))}
                    
                        {category === "television" && (
                        <Box className="card__decoders">
                            <Typography
                                variant="body2"
                                component="p"
                                sx={{fontWeight: "bolder"}}
                            >
                                Seleccionar cantidad de decodificadores
                            </Typography>
                            <Box sx={{ display: "flex",
                                alignItems: "flex-start",
                                justifyContent: "space-around",
                                marginBottom: theme => theme.spacing(2)}}>
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <Typography
                                        variant="body1"
                                        component="p"
                                        sx={{
                                            fontWeight: "lighter",
                                            mb: 0.5,
                                            color: (theme) =>
                                                theme.palette.grey["600"],
                                        }}
                                    >
                                        HD
                                    </Typography>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Typography
                                            variant="h5"
                                            component="p"
                                            sx={{
                                                cursor: "pointer",
                                                color: (theme) =>
                                                    theme.palette.grey["700"],
                                            }}
                                            onClick={() =>
                                                isSelected
                                                    ? setQuantityHD((state) =>
                                                            state - 1 < 1
                                                                ? 0
                                                                : state - 1
                                                        )
                                                    : {}
                                            }
                                        >
                                            -
                                        </Typography>
                                        <Typography
                                            variant="body1"
                                            component="p"
                                            sx={{
                                                mx: 1.25,
                                                padding: (theme) =>
                                                    `${theme.spacing(
                                                        0.5
                                                    )} ${theme.spacing(1.5)}`,
                                                border: (theme) =>
                                                    `1px solid ${theme.palette.grey["400"]}`,
                                                backgroundColor: (theme) =>
                                                    theme.palette.common.white,
                                            }}
                                        >
                                            {quantityHD}
                                        </Typography>
                                        <Typography
                                            variant="h5"
                                            component="p"
                                            sx={{
                                                cursor: "pointer",
                                                color: (theme) =>
                                                    theme.palette.grey["700"],
                                            }}
                                            onClick={() =>
                                                isSelected
                                                    ? setQuantityHD(
                                                            (state) => state + 1
                                                        )
                                                    : {}
                                            }
                                        >
                                            +
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <Typography
                                        variant="body1"
                                        component="p"
                                        sx={{
                                            fontWeight: "lighter",
                                            mb: 0.5,
                                            color: (theme) =>
                                                theme.palette.grey["600"],
                                        }}
                                    >
                                        Nueva TV
                                    </Typography>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Typography
                                            variant="h5"
                                            component="p"
                                            sx={{
                                                cursor: "pointer",
                                                color: (theme) =>
                                                    theme.palette.grey["700"],
                                            }}
                                            onClick={() =>
                                                isSelected
                                                    ? setQuantityTV((state) =>
                                                            state - 1 < 1
                                                                ? 0
                                                                : state - 1
                                                        )
                                                    : {}
                                            }
                                        >
                                            -
                                        </Typography>
                                        <Typography
                                            variant="body1"
                                            component="p"
                                            sx={{
                                                mx: 1.25,
                                                padding: (theme) =>
                                                    `${theme.spacing(
                                                        0.5
                                                    )} ${theme.spacing(1.5)}`,
                                                border: (theme) =>
                                                    `1px solid ${theme.palette.grey["400"]}`,
                                                backgroundColor: (theme) =>
                                                    theme.palette.common.white,
                                            }}
                                        >
                                            {quantityTV}
                                        </Typography>
                                        <Typography
                                            variant="h5"
                                            component="p"
                                            sx={{
                                                cursor: "pointer",
                                                color: (theme) =>
                                                    theme.palette.grey["700"],
                                            }}
                                            onClick={() =>
                                                isSelected
                                                    ? setQuantityTV(
                                                            (state) => state + 1
                                                        )
                                                    : {}
                                            }
                                        >
                                            +
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                            <Typography
                                variant="caption"
                                component="p"
                                sx={{
                                    color: (theme) => theme.palette.grey["600"],
                                    textAlign: "center",
                                    lineHeight: 1,
                                }}
                            >
                                <small>
                                    *La cantidad básica son 2, y por cada
                                    decodificador adicional tiene un costo de
                                    $10.000.
                                </small>
                            </Typography>
                        </Box>
                        )}
                    </Box>
                </CardContent>
                <CardActions>
                    <Box className="card__footer">
                        <Box className="card__prices card__prices--one">
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "flex-start",
                                }}
                            >
                                <Typography
                                    variant="h6"
                                    component="span"
                                    sx={{mt: 0.5, mb: -0.5}}
                                >
                                    ${unitPrice}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    component="span"
                                    sx={(theme) => ({
                                        color: `${
                                            isSelected
                                                ? "initial"
                                                : theme.palette.grey["700"]
                                        }`,
                                    })}
                                >
                                    Precio Unitario
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "flex-end",
                                }}
                            >
                                <Typography
                                    variant="h5"
                                    component="span"
                                    sx={(theme) => ({
                                        fontWeight: "bolder",
                                        color: theme.palette.error.main,
                                        mb: -0.5,
                                    })}
                                >
                                    ${comboPrice}
                                </Typography>
                                <Typography
                                    variant="body1"
                                    component="span"
                                    sx={{fontWeight: "bolder", mb: -0.5}}
                                >
                                    Precio en combo
                                </Typography>
                                <Typography
                                    variant="caption"
                                    component="span"
                                    sx={(theme) => ({
                                        color: `${
                                            isSelected
                                                ? "initial"
                                                : theme.palette.grey["500"]
                                        }`,
                                    })}
                                >
                                    Impuestos Incluidos
                                </Typography>
                            </Box>
                        </Box>
                        {/* Boton */}
                        {isSelected && (
                        <Box className="card__button" >
                            <StyledButton
                                variant="outlined"
                                className="button-outlined"
                                color="info"
                                sx={{
                                    typography: "body2", m: 0
                                }}
                                onClick={() => handleSelect()}
                            >
                                Quitar Selección
                            </StyledButton>
                        </Box>
                        )}
                    </Box>
                </CardActions>
            </StyledCard>
        </Grid>
    );
}
export default HomeServicesPlansCardOne;
