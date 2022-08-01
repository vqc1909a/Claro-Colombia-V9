
import * as React from 'react';
import { styled } from '@mui/material/styles';

import Box from '@mui/material/Box';
import Hidden from '@mui/material/Hidden';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { StepIconProps } from '@mui/material/StepIcon';

//!Icons
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';
import AddModeratorOutlinedIcon from '@mui/icons-material/AddModeratorOutlined';
import HistoryEduOutlinedIcon from '@mui/icons-material/HistoryEduOutlined';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';

//! Mui Components
import StyledContainer from "components/StyledUi/StyledContainer";

//!Uuids
import {v4 as uuid} from "uuid";

const stepIcons: {[index: string]: React.ReactElement} = {
    1: <ShoppingCartOutlinedIcon fontSize="large"></ShoppingCartOutlinedIcon>,
    2: <ContactMailOutlinedIcon fontSize="large"></ContactMailOutlinedIcon>,
    3: <AddModeratorOutlinedIcon fontSize="large"></AddModeratorOutlinedIcon>,
    4: <HistoryEduOutlinedIcon fontSize="large"></HistoryEduOutlinedIcon>,
    5: <DateRangeOutlinedIcon fontSize="large"></DateRangeOutlinedIcon>,
    6: <Inventory2OutlinedIcon fontSize="large"></Inventory2OutlinedIcon>
}

const steps = [
    {
        _id: uuid(),
        label: <Box component="div" sx={{typography: {xs: "h5", md: "body2"}}} style={{fontWeight: "bolder"}}>Carrito</Box>
    },
    {
        _id: uuid(),
        label: <Box component="div" sx={{typography: {xs: "h5", md: "body2"}}} style={{fontWeight: "bolder"}}>Titular y datos<Hidden mdDown><br /></Hidden> de instalación</Box>
    },
    {
        _id: uuid(),
        label: <Box component="div" sx={{typography: {xs: "h5", md: "body2"}}} style={{fontWeight: "bolder"}}>Seguridad</Box>
    },
    {
        _id: uuid(),
        label: <Box component="div" sx={{typography: {xs: "h5", md: "body2"}}} style={{fontWeight: "bolder"}}>Contratación<Hidden mdDown><br /></Hidden> Servicios Fijos</Box>
    },
    {
        _id: uuid(),
        label: <Box component="div" sx={{typography: {xs: "h5", md: "body2"}}} style={{fontWeight: "bolder"}}>Agendamiento<Hidden mdDown><br /></Hidden> de Instalación</Box>
    },
    {
        _id: uuid(),
        label: <Box component="div" sx={{typography: {xs: "h5", md: "body2"}}} style={{fontWeight: "bolder"}}>Resumen</Box>
    }
]

const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 9,
    left: "-50%",
    right: "50%"
    // left: 'calc(-50% + 16px)',
    // right: 'calc(50% + 16px)',
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
        background: theme.palette.success.light
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
        background: theme.palette.success.light
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    position: "relative",
    zIndex: theme.zIndex.mobileStepper,
    height: 6,
    border: 0,
    borderRadius: 0,
    // background: `linear-gradient(to right, ${theme.palette.success.light} 50%, ${theme.palette.grey["300"]} 60%)`,
    background: theme.palette.grey["300"],

  }
}));

const QontoStepIconRoot = styled('div')<{ ownerState: { active?: boolean, completed?: boolean } }>(
  ({ theme, ownerState }) => ({
    position: "relative",
    zIndex: theme.zIndex.speedDial,
    color: theme.palette.grey["300"],
    backgroundColor: theme.palette.common.white,
    height: 23,
    width: 23,
    // display: 'flex',
    // alignItems: "center",
    // justifyContent: "center",
    border: `4px solid ${theme.palette.grey["300"]}`,
    borderRadius: "50%",
    // Si esta activo el step, el color que sea azul sino por defecto el medio gris
    ...(ownerState.active && {
      border: `4px solid ${theme.palette.success.light}`,
      boxShadow: "0px 0px 6px black"
    //   color: theme.palette.success.light,
    }),
    ...(ownerState.completed && {
      border: `4px solid ${theme.palette.success.light}`,
      boxShadow: "0px 0px 6px black"
    //   color: theme.palette.success.light,
    }),

    ...(ownerState.completed && {
        '& .QontoStepIcon-float': {
            color: theme.palette.secondary.main
        }
    }),
    ...(ownerState.active && {
        '& .QontoStepIcon-float': {
            color: theme.palette.secondary.main
        }
    })
    // Estos dos de abajo son los hijos que envuelve

    // '& .QontoStepIcon-completedIcon': {
    //   color: theme.palette.success.light,
    //   zIndex: 1,
    //   fontSize: 18,
    // },
    // '& .QontoStepIcon-circle': {
    //   width: 8,
    //   height: 8,
    //   borderRadius: '50%',
    //   backgroundColor: 'currentColor',
    // },
  }),
);

function QontoStepIcon(props: StepIconProps) {
  const { active, completed, className } = props;
// {
//     "completed": true,
//     "active": false,
//     "error": false,
//     "icon": 1
// }
    return (
    <QontoStepIconRoot ownerState={{ active, completed }} className={className}>
        <Box sx={{position: "absolute", top: "-50px", left: "50%", transform: "translateX(-50%)", display: {xs: "none", md: "initial"}}} className="QontoStepIcon-float">
            {stepIcons[String(props.icon)]}
        </Box>    
        {/* {completed ? (
            // Si esta completado que me muestre el check con el estilo
            <Check className="QontoStepIcon-completedIcon" />
            // Caso contrario que me  muestre solamente una bolita
        ) : (
            <div className="QontoStepIcon-circle" />
        )} */}
    </QontoStepIconRoot>
  );
}

const StyledStepLabel = styled(StepLabel)(({theme}) => ({
  "& .MuiStepLabel-labelContainer": {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "initial"
    }
  }
}));

function StepperHeader({numberStep}: {numberStep: number}) {
  return (
    <Box sx={{ width: '100%', pb: {xs: 4, md: 6}, pt: {xs: 6, md: 12}}}>
      <StyledContainer className="container-services">
        {/* Modificaciones al Stepper Progress para mobile */}
        <Hidden mdUp>
          <Box sx={{textAlign: "center", mb: 2}}>
            {stepIcons[String(numberStep + 1)]}
            {steps[numberStep].label}
          </Box>
        </Hidden>
        
        {/* Stepper Progress desktop */}
        <Stepper alternativeLabel activeStep={numberStep} connector={<QontoConnector />} className="padre">
          {steps.map((step) => (
            <Step key={step._id} /* completed={true} */>
              <StyledStepLabel StepIconComponent={QontoStepIcon} >{step.label}</StyledStepLabel>
            </Step>
          ))}
        </Stepper>   
      </StyledContainer>   
    </Box>
  );
}

export default StepperHeader