import React from "react";
import { styled } from "@mui/material/styles";

//!Componentes
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Hidden from "@mui/material/Hidden";

//! Mui Components
import StyledImage from "components/StyledUi/StyledImage";
import StyledButton from "components/StyledUi/StyledButton";


//!React Redux
import useAppDispatch from "utils/hooks/useAppDispatch";

//! Actions
import * as PLANS_ACTIONS from "redux/slices/homePlans";

//! Interfaces
import {CardTwo} from "./interfaces";
import CardActions from "@mui/material/CardActions";

function HomeServicesPlansCardTwo({ item }: CardTwo) {
  const dispatch = useAppDispatch();
  const {_id, subcategory, plan, image, unitPrice, isSelected} = item;

  const StyledCard = styled(Card)(({ theme }) => ({
    borderWidth: `${isSelected ? "2px" : "1px"}`,
    borderStyle: "solid",
    borderColor: `${
      isSelected ? theme.palette.primary.main : theme.palette.grey["500"]
    }`,
    borderRadius: "8px",
    borderTop: `5px solid ${
      isSelected ? theme.palette.primary.main : theme.palette.grey["500"]
    }`,
    backgroundColor: theme.palette.grey["50"],
    position: "relative",
    cursor: `${isSelected ? "initial" : "pointer"}`,
    "&:hover": {
      borderColor: theme.palette.primary.main,
      backgroundColor: `${
        isSelected ? theme.palette.grey["50"] : theme.palette.common.white
      }`
    },
    "& .MuiCardContent-root": {
      padding: theme.spacing(2.5),
      "& .card__image": {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
        height: "60px",
        [theme.breakpoints.up("sm")]: {
          height: "70px"
        },
        [theme.breakpoints.up("md")]: {
          height: "80px"
        },
        img: {
          width: "100%",
          [theme.breakpoints.up("sm")]: {
            width: "80%",
          },
          [theme.breakpoints.up("md")]: {
            width: "75%"
          }
        }
        // height: "80px"
      }
    },
    "& .MuiCardActions-root": {
      padding: theme.spacing(2.5),
      borderTop: `2px dashed ${theme.palette.grey["400"]}`,
      display: "block",
      marginBottom: theme.spacing(1),
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
  }));

  //! Functions
  const handleSelect = (): void => {
      //!Actualizar el seleccionado de un plan
      dispatch(PLANS_ACTIONS.toggleSelectedHomePlan(_id))
  }

  return (
    <Grid item xs={6} sm={4} md={3}>
      <StyledCard
        variant="outlined"
        onClick={() => (isSelected ? {} : handleSelect())}
      >
        <CardContent>
            <Typography
              variant="subtitle1"
              component="h6"
              sx={{ fontWeight: "bolder", mb: { xs: 0, sm: 1 } }}
            >
              {subcategory}
            </Typography>
            <Box className="card__image">
              <StyledImage
                alt={plan}
                src={image}
                loading="lazy"
                // sx={{
                //   width: { xs: "100%", sm: "80%" },
                //   height: { xs: "60px", sm: "70px" },
                // }}
              ></StyledImage>
            </Box>
            {isSelected ? (
              <CheckCircleIcon
                fontSize="large"
                sx={(theme) => ({
                  color: theme.palette.success.light,
                  position: "absolute",
                  top: "2%",
                  right: "3%"
                })}
              ></CheckCircleIcon>
            ) : (
              <CheckCircleOutlinedIcon
                fontSize="large"
                sx={(theme) => ({
                  color: theme.palette.grey["500"],
                  position: "absolute",
                  top: "2%",
                  right: "3%"
                })}
              ></CheckCircleOutlinedIcon>
            )}
        </CardContent>
        <CardActions>
          <Box className="card__footer">
            <Box className="card__prices card__prices--two">
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Typography
                variant="h5"
                component="span"
                sx={(theme) => ({
                  fontWeight: "bolder",
                  color: theme.palette.error.main,
                  mb: -0.5
                })}
              >
                ${unitPrice}
              </Typography>
              <Typography
                variant="body1"
                component="span"
                sx={{ fontWeight: "bolder", mb: -0.5 }}
              >
                Precio
              </Typography>
              <Hidden smDown>
                <Typography
                  variant="caption"
                  component="span"
                  sx={(theme) => ({
                    color: `${
                      isSelected ? "initial" : theme.palette.grey["500"]
                    }`
                  })}
                >
                  Impuestos Incluidos
                </Typography>
              </Hidden>
            </Box>
            </Box>
            {/* Boton */}
            {isSelected && (
              <Box className="card__button">
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
export default HomeServicesPlansCardTwo;
