import React from "react";
import { useState } from "react";
import { styled } from "@mui/material/styles";

//!Componentes
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CheckIcon from "@mui/icons-material/Check";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

interface CardOne {
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

function HomeServicesPlansCardOne({ item }: CardOne) {
  const [cardIsSelected, setCardIsSelected] = useState(false);
  const [quantityHD, setQuantityHD] = useState(1);
  const [quantityTV, setQuantityTV] = useState(1);

  const { category, plan, benefits, unitPrice, comboPrice } = item

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
    <Grid item xs={12} sm={6} md={4}>
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
              sx={{ fontWeight: "bolder", mb: -0.5 }}
            >
              {category}
            </Typography>
            <Typography
              variant="h4"
              component="h5"
              sx={{ fontWeight: "bolder" }}
              className="card-megas"
            >
              {plan}
            </Typography>
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

          <Box mb={3}>
            {benefits.map((benefit) => (
              <Typography
                key={benefit}
                variant="body2"
                mb={1}
                display="flex"
                alignItems="flex-start"
              >
                <CheckIcon
                  fontSize="small"
                  sx={{ color: (theme) => theme.palette.info.main, mr: 0.5 }}
                ></CheckIcon>
                {benefit}
              </Typography>
            ))}
          </Box>
          {category === "Televisión" && (
            <Box className="card-quantity">
              <Typography
                variant="body2"
                component="p"
                sx={{ fontWeight: "bolder" }}
              >
                Seleccionar cantidad de decodificadores
              </Typography>
              <Box className="card-quantity-numbers">
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <Typography
                    variant="body1"
                    component="p"
                    sx={{
                      fontWeight: "lighter",
                      mb: 0.5,
                      color: (theme) => theme.palette.grey["600"]
                    }}
                  >
                    HD
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                  >
                    <Typography
                      variant="h5"
                      component="p"
                      sx={{
                        cursor: "pointer",
                        color: (theme) => theme.palette.grey["700"]
                      }}
                      onClick={() =>
                        cardIsSelected
                          ? setQuantityHD((state) =>
                              state - 1 < 1 ? 0 : state - 1
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
                          `${theme.spacing(0.5)} ${theme.spacing(1.5)}`,
                        border: (theme) =>
                          `1px solid ${theme.palette.grey["400"]}`,
                        backgroundColor: (theme) => theme.palette.common.white
                      }}
                    >
                      {quantityHD}
                    </Typography>
                    <Typography
                      variant="h5"
                      component="p"
                      sx={{
                        cursor: "pointer",
                        color: (theme) => theme.palette.grey["700"]
                      }}
                      onClick={() =>
                        cardIsSelected
                          ? setQuantityHD((state) => state + 1)
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
                    justifyContent: "center"
                  }}
                >
                  <Typography
                    variant="body1"
                    component="p"
                    sx={{
                      fontWeight: "lighter",
                      mb: 0.5,
                      color: (theme) => theme.palette.grey["600"]
                    }}
                  >
                    Nueva TV
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                  >
                    <Typography
                      variant="h5"
                      component="p"
                      sx={{
                        cursor: "pointer",
                        color: (theme) => theme.palette.grey["700"]
                      }}
                      onClick={() =>
                        cardIsSelected
                          ? setQuantityTV((state) =>
                              state - 1 < 1 ? 0 : state - 1
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
                          `${theme.spacing(0.5)} ${theme.spacing(1.5)}`,
                        border: (theme) =>
                          `1px solid ${theme.palette.grey["400"]}`,
                        backgroundColor: (theme) => theme.palette.common.white
                      }}
                    >
                      {quantityTV}
                    </Typography>
                    <Typography
                      variant="h5"
                      component="p"
                      sx={{
                        cursor: "pointer",
                        color: (theme) => theme.palette.grey["700"]
                      }}
                      onClick={() =>
                        cardIsSelected
                          ? setQuantityTV((state) => state + 1)
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
                  lineHeight: 1
                }}
              >
                <small>
                  *La cantidad básica son 2, y por cada decodificador adicional
                  tiene un costo de $10.000.
                </small>
              </Typography>
            </Box>
          )}
          <Box className="card-footer">
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start"
              }}
            >
              <Typography
                variant="h6"
                component="span"
                sx={{ mt: 0.5, mb: -0.5 }}
              >
                ${unitPrice}
              </Typography>
              <Typography
                variant="body2"
                component="span"
                sx={(theme) => ({
                  color: `${
                    cardIsSelected ? "initial" : theme.palette.grey["700"]
                  }`
                })}
              >
                Precio Unitario
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end"
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
                ${comboPrice}
              </Typography>
              <Typography
                variant="body1"
                component="span"
                sx={{ fontWeight: "bolder", mb: -0.5 }}
              >
                Precio en combo
              </Typography>
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
export default HomeServicesPlansCardOne;
