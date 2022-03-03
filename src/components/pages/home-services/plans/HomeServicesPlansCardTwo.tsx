import React from "react";
import { useState } from "react";
import { styled } from "@mui/material/styles";

//!Componentes
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Hidden from "@mui/material/Hidden";


interface CardTwo {
  item: {
    subcategory: string,
    image: string,
    idImage: string,
    benefits: string[],
    comboPrice: number,
    isActive: boolean,
    _id: string,
    category: string,
    plan: string,
    unitPrice: number,
    createdAt: string,
    updatedAt: string
  }
}

function HomeServicesPlansCardTwo({ item }: CardTwo) {
  const [cardIsSelected, setCardIsSelected] = useState(false);
  const {subcategory, plan, image, unitPrice} = item;

  const StyledCard = styled(Card)(({ theme }) => ({
    borderWidth: `${cardIsSelected ? "2px" : "1px"}`,
    borderStyle: "solid",
    borderColor: `${
      cardIsSelected ? theme.palette.primary.main : theme.palette.grey["500"]
    }`,
    borderRadius: "10px",
    borderTop: `5px solid ${
      cardIsSelected ? theme.palette.primary.main : theme.palette.grey["500"]
    }`,
    backgroundColor: theme.palette.grey["50"],
    position: "relative",
    cursor: `${cardIsSelected ? "initial" : "pointer"}`,
    " .card-megas": {
      color: `${cardIsSelected ? theme.palette.primary.main : "initial"}`
    },
    "&:hover": {
      borderColor: theme.palette.primary.main,
      backgroundColor: `${
        cardIsSelected ? theme.palette.grey["50"] : theme.palette.common.white
      }`,
      " .card-megas": {
        color: theme.palette.primary.main
      }
    },
    "& .card-footer": {
      borderTop: `2px dashed ${theme.palette.grey["400"]}`,
      paddingTop: theme.spacing(2),
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-around"
    },
    "& .card-footerSpecial": {
      borderTop: `2px dashed ${theme.palette.grey["400"]}`,
      paddingTop: theme.spacing(2),
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    "& .card-image": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "80px"
    },
    "& .card-quantity": {
      borderTop: `2px solid ${theme.palette.grey["400"]}`,
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(2),
      "& .card-quantity-numbers": {
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-around",
        marginBottom: theme.spacing(2)
      }
    }
  }));

  return (
    <Grid item xs={6} sm={4} md={3}>
      <StyledCard
        variant="outlined"
        onClick={() => (cardIsSelected ? {} : setCardIsSelected(true))}
      >
        <CardContent
          sx={(theme) => ({
            padding: theme.spacing(2.5)
          })}
        >
          <Box mb={2}>
            <Typography
              variant="subtitle1"
              component="h6"
              sx={{ fontWeight: "bolder", mb: { xs: 0, sm: 1 } }}
            >
              {subcategory}
            </Typography>
            <Box className="card-image">
              <Box
                component="img"
                alt={plan}
                src={image}
                loading="lazy"
                sx={{
                  width: { xs: "100%", sm: "80%" },
                  height: { xs: "60px", sm: "70px" },
                  verticalAlign: "top"
                }}
              ></Box>
            </Box>
            {cardIsSelected ? (
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
          </Box>
          <Box className="card-footerSpecial">
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
                      cardIsSelected ? "initial" : theme.palette.grey["500"]
                    }`
                  })}
                >
                  Impuestos Incluidos
                </Typography>
              </Hidden>
            </Box>
          </Box>
          {/* Boton */}
          {cardIsSelected && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                pt: 2
              }}
            >
              <Button
                variant="outlined"
                size="medium"
                color="info"
                sx={{
                  textTransform: "capitalize",
                  backgroundColor: (theme) => theme.palette.common.white
                }}
                onClick={() => setCardIsSelected(false)}
              >
                Quitar Selección
              </Button>
            </Box>
          )}
        </CardContent>
      </StyledCard>
    </Grid>
  );
}
export default HomeServicesPlansCardTwo;
